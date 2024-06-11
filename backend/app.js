const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();

const saltRounds = 10;
const secretKey = "d6f9e8f91a7b4c8d91e2b3a6c4f7e8d0c1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6"; // Replace with your own secret key

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/SignUp", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const check = await collection.findOne({ username: username });

    if (check) {
      console.log("Username already exists");
      res.json("exist");
    } else {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      console.log(`Original Password: ${password}`);
      console.log(`Hashed Password: ${hashedPassword}`);

      // Store the hashed password in the database
      const data = {
        username: username,
        email: email,
        password: hashedPassword,
      };
      await collection.insertMany([data]);
      console.log("User successfully registered");
      res.json("notexist");
    }
  } catch (e) {
    console.error("Error during sign-up:", e);
    res.json("error");
  }
});

app.post("/Login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await collection.findOne({ username: username });

    if (user) {
      console.log(`Stored Hashed Password: ${user.password}`);
      const validPassword = await bcrypt.compare(password, user.password);
      console.log(`Password Valid: ${validPassword}`);
      if (validPassword) {
        const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: "1h" });
        res.json({ status: "exist", token: token });
      } else {
        res.json({ status: "invalid_password" });
      }
    } else {
      res.json({ status: "notexist" });
    }
  } catch (e) {
    console.error("Error during login:", e);
    res.json("error");
  }
});

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.post("/ChangePassword", authenticateToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  try {
    const user = await collection.findOne({ username: req.user.username });

    if (user) {
      const validPassword = await bcrypt.compare(oldPassword, user.password);

      if (validPassword) {
        const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);
        await collection.updateOne(
          { username: req.user.username },
          { $set: { password: hashedNewPassword } }
        );
        res.json({ status: "password_changed" });
      } else {
        res.json({ status: "invalid_old_password" });
      }
    } else {
      res.json({ status: "user_not_found" });
    }
  } catch (e) {
    console.error("Error during password change:", e);
    res.json("error");
  }
});

// Protected route example
app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

app.listen(3000, () => {
  console.log("port connected");
});