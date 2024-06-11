import { React, useState } from 'react';
import Bar from '../BarComponent/Bar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const buttonTextStyle = {
  fontFamily: 'Anonymous Pro',
  fontSize: '3vh'
}

const buttonStyle = {
  borderRadius: '40px',
  height: '30%',
  width: '50%',
  margin: '1vh',
  fontFamily: 'Anonymous Pro',
  fontSize: '3vw',
  background: '#ADADAD',
  border: 'none',
}

const inputStyle = {
  width: '100%',
  height: '6vh',
  border: '3px solid black',
  fontSize: '3vh'
}

const loginContentStyle = {
  height: '40%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

function LoginPage() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  function updateLogin(propertyName, value) {
    setLoginData((prevQuery) => ({
      ...prevQuery,
      [propertyName]: value,
    }));
  }

  async function log(e) {
    e.preventDefault();
    try {
      await axios.post("https://ready-rep-result.onrender.com/Login", {
        username: loginData.username,
        password: loginData.password
      }).then(res => {
        if (res.data === "exist") {
          navigate('/', { state: { username: loginData.username } })
        } else if (res.data === "notexist") {
          alert("User have not sign up");
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
            width: '100%',
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              backgroundColor: '#FFF8EB',
              height: '100%',
              width: '30%'
            }}
          >
            <div
              style={{
                fontSize: '4vw',
                textAlign: 'center',
                height: '20%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  fontFamily: 'Anonymous Pro'
                }}
              >Login</div>
            </div>

            <form action="POST">
              <div style={loginContentStyle}>

                <div style={{ width: '90%' }}>
                  <label style={buttonTextStyle}>Username</label>
                  <div style={{ width: '100%' }}>
                    <input
                      type='username'
                      style={{
                        ...inputStyle,
                        marginBottom: '2vh',
                      }}
                      onChange={(event) => updateLogin('username', event.target.value)} />
                  </div>

                  <label style={buttonTextStyle}>Password</label>
                  <div style={{ width: '100%' }}>
                    <input
                      type='password'
                      style={inputStyle}
                      onChange={(event) => updateLogin('password', event.target.value)} />
                  </div>

                  <button
                    style={{
                      ...buttonStyle,
                      height: '4vh',
                      marginBottom: '2vh',
                      fontSize: '1vw',
                      color: '#0009DA',
                    }}
                    onClick={() => navigate('/ChangePassword')}
                  >Forgot Password?</button>
                </div>

                <input
                  style={buttonStyle}
                  onClick={log}
                  type="submit"
                  value="Submit"
                />

                <button style={buttonStyle} onClick={() => navigate('/SignUp')}>Sign Up</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div >
  )
};

export default LoginPage;