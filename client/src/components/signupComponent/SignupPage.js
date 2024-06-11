import React, { useState } from 'react';
import Bar from '../BarComponent/Bar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const buttonStyle = {
  height: '4vh',
  width: '10vw',
  borderRadius: '40px',
  marginTop: '7vh',
  fontFamily: 'Anonymous Pro',
  fontSize: '1.5vw',
  background: '#ADADAD',
  border: 'none',
}

const textStyle = {
  fontSize: '2.5vh',
  marginLeft: '20%'
}

const inputStyle = {
  height: '30%',
  width: '60%',
  marginLeft: '20%',
  marginRight: '20%',
  marginBottom: '2vh',
  fontSize: '3vh',
  fontFamily: 'Anonymous Pro',
}

function SignUpPage() {
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
  })

  function updateSignupData(propertyName, value) {
    setSignupData((prevQuery) => ({
      ...prevQuery,
      [propertyName]: value,
    }));
  }

  async function addProfile(e) {
    e.preventDefault();
    try {
      await axios.post("https://ready-rep-result.onrender.com/SignUp", {
        username: signupData.username,
        email: signupData.email,
        password: signupData.password
      }).then(res => {
        if (res.data === "exist") {
          alert("User already exists")
        } else if (res.data === "notexist") {
          navigate('/', { state: { username: signupData.username } })
        }
      }).catch(e => {
        alert("Wrong Details");
        console.log(e);
      })
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Bar />
      <div
        style={{
          height: '80vh',
          width: '99vw',
          background: '#FFFCF7',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            height: '80%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              height: '100%',
              width: '30%',
              background: '#FFF8EB',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              fontFamily: 'Anonymous Pro',
            }}
          >
            <div
              style={{
                width: '100%',
                fontWeight: 'bold',
                fontSize: '3vw',
                textAlign: 'center',
                marginTop: '2vh',
              }}
            >
              Sign Up
            </div>

            <form action="POST"
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}
            >
              <div>
                <span>
                  <span style={textStyle}>Username</span>
                  <input
                    type="username"
                    style={inputStyle}
                    onChange={(event) => updateSignupData('username', event.target.value)}
                  />
                </span>

                <span>
                  <span style={textStyle}>Email</span>
                  <input
                    type="email"
                    style={inputStyle}
                    onChange={(event) => updateSignupData('email', event.target.value)}
                  />
                </span>

                <span>
                  <span style={textStyle}>Password</span>
                  <input
                    type="password"
                    style={inputStyle}
                    onChange={(event) => updateSignupData('password', event.target.value)}
                  />
                </span>
              </div>

              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <input
                  style={buttonStyle}
                  onClick={addProfile}
                  type="submit"
                  value="Confirm"
                />
              </div>
            </form>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;