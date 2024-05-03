import React from 'react';

const buttonStyle = {
  borderRadius: '40px',
  height: '10%',
  width: '40%',
  margin: '1vh',
  fontFamily: 'Anonymous Pro',
  fontSize: '1vw',
  background: '#ADADAD',
  border: 'none',
}

function HomePage() {

  return (
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
            }}
          >
            Welcome
          </p>

          <button style={buttonStyle}>Set/Rep Saver</button>
          <button style={buttonStyle}>Macro Saver</button>
          <button style={buttonStyle}>Weight Saver</button>
          <button style={buttonStyle}>Discover Workouts</button>
          <button style={buttonStyle}>Login</button>
          <button style={buttonStyle}>Profile</button>
        </span>
      </div>
    </div>
  );
}

export default HomePage;