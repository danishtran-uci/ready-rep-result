import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bar from '../BarComponent/Bar';

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
  const navigate = useNavigate();

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
              }}
            >
              Welcome
            </p>

            <button
              style={buttonStyle}
              onClick={() => (
                navigate("/SetRep")
              )}
            >Set/Rep Saver</button>
            <button
              style={buttonStyle}
            // onClick={() => (
            //   navigate("/Macro")
            // )}
            >Macro Saver</button>
            <button
              style={buttonStyle}
              onClick={() => (
                navigate("/Weight")
              )}
            >Weight Saver</button>
            <button
              style={buttonStyle}
              onClick={() => (
                navigate("/Discover")
              )}
            >Discover Workouts</button>
            <button
              style={buttonStyle}
            // onClick={() => (
            //   navigate("/Login")
            // )}
            >Login</button>
            <button
              style={buttonStyle}
              onClick={() => (
                navigate("/Profile")
              )}
            >Profile</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;