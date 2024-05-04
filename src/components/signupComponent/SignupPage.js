import React, { useState } from 'react';
import Bar from '../BarComponent/Bar';

const buttonStyle = {
  height: '4vh',
  width: '10vw',
  borderRadius: '40px',
  margin: '3vh',
  fontFamily: 'Anonymous Pro',
  fontSize: '1vw',
  background: '#ADADAD',
  border: 'none',
}

const textStyle = {
  fontSize: '2.5vh',
  marginLeft: '20%'
}

const inputStyle = {
  height: '100%',
  width: '60%',
  marginLeft: '20%',
  marginRight: '20%',
  fontSize: '2vh',
  fontFamily: 'Anonymous Pro',
}

function SignUpPage() {
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

  function handleUpdateProfile() {
    console.log(signupData)
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
            <p
              style={{
                fontWeight: 'bold',
                fontSize: '3vw',
                marginTop: '-5vh',
              }}
            >
              Sign Up
            </p>

            <div style={{
              height: '60%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              marginTop: '-5vh',
            }}
            >
              <span>
                <span style={textStyle}>Username</span>
                <input
                  style={inputStyle}
                  onChange={(event) => updateSignupData('username', event.target.value)}
                />
              </span>

              <span>
                <span style={textStyle}>Email</span>
                <input
                  style={inputStyle}
                  onChange={(event) => updateSignupData('email', event.target.value)}
                />
              </span>

              <span>
                <span style={textStyle}>Password</span>
                <input
                  style={inputStyle}
                  onChange={(event) => updateSignupData('password', event.target.value)}
                />
              </span>
            </div>

            <button
              style={buttonStyle}
              onClick={handleUpdateProfile}
            >Confirm</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;