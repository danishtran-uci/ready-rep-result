import React, { useState } from 'react';
import Bar from '../BarComponent/Bar';

const buttonStyle = {
  borderRadius: '40px',
  width: '20%',
  fontFamily: 'Anonymous Pro',
  fontSize: '1vw',
  background: '#ADADAD',
  border: 'none',
  marginRight: '10vw'
}

const textInputContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  height: '15%'
}

const textStyle = {
  fontSize: '2.5vh',
  width: '5%',
  marginLeft: '12%',
  marginTop: '1%'
}

const inputStyle = {
  height: '100%',
  width: '60%',
  marginLeft: '5%',
  fontSize: '2vh',
  fontFamily: 'Anonymous Pro',
}

function ProfilePage() {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    gender: '',
    age: '',
    height: null,
  })

  function updateProfileData(propertyName, value) {
    setProfileData((prevQuery) => ({
      ...prevQuery,
      [propertyName]: value,
    }));
  }

  function handleUpdateProfile() {
    console.log(profileData)
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
              width: '80%',
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
                marginBottom: '10vh',
              }}
            >
              Profile
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
              <span style={textInputContainer}>
                <span style={textStyle}>Name:</span>
                <input
                  style={inputStyle}
                  onChange={(event) => updateProfileData('name', event.target.value)}
                />
              </span>

              <span style={textInputContainer}>
                <span style={textStyle}>Email:</span>
                <input
                  style={inputStyle}
                  onChange={(event) => updateProfileData('email', event.target.value)}
                />
              </span>

              <span style={{ ...textInputContainer, justifyContent: 'center' }}>
                <span style={{
                  ...textStyle,
                  marginLeft: '5%',
                }}
                >Gender:</span>
                <input
                  style={{ ...inputStyle, width: '5%', }}
                  onChange={(event) => updateProfileData('gender', event.target.value)}
                />
                <span style={{
                  ...textStyle,
                  marginLeft: '5%',
                }}
                >Age:</span>
                <input
                  type="number"
                  style={{ ...inputStyle, width: '5%', }}
                  onChange={(event) => updateProfileData('age', event.target.value)}
                />
                <span style={{
                  ...textStyle,
                  marginLeft: '5%',
                }}
                >Height:</span>
                <input
                  style={{ ...inputStyle, width: '5%', }}
                  onChange={(event) => updateProfileData('height', event.target.value)}
                />
              </span>

              <div style={{ height: '15%', width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: '1vh', marginBottom: '-7vh' }}>
                <button style={buttonStyle} onClick={handleUpdateProfile}>Confirm</button>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;