import React from 'react';

const buttonStyle = {
  borderRadius: '40px',
  width: '80%',
  fontFamily: 'Anonymous Pro',
  fontSize: '1vw',
  background: '#ADADAD',
  border: 'none',
}

const backgroundStyle = {
  height: '100%',
  width: '30%',
  background: '#FFF8EB',
  fontFamily: 'Anonymous Pro',
  margin: '5vw',
}

const workoutRowStyle = {
  height: '40%',
  marginTop: '-4vh',
  marginBottom: '1vh',
  marginLeft: '1vw',
  marginRight: '1vw',
  display: 'flex',
  justifyContent: 'space-evenly',
  borderStyle: 'solid',
}

const workoutSectionStyle = {
  width: '33%', 
  display: 'flex',
  justifyContent: 'center',
  borderStyle: 'solid',
}

const workoutContentStyle = {
  flexDirection: 'column', 
  width: '100%', 
  display: 'flex', 
  alignItems: 'center',
  justifyContent: 'space-evenly',
}

function DiscoverPage() {
  return (
    <div
      style={{
      height: '80vh',
      width: '99vw',
      background: '#FFFCF7',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
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
            ...backgroundStyle,
            width: '80%'
          }}
        >
          <p 
            style={{
              fontWeight: 'bold',
              fontSize: '2vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Discover
          </p>

          <div style={workoutRowStyle}>
            <div style={workoutSectionStyle}>
              <div style={workoutContentStyle}>
                <div style={{fontSize: '1.5vw'}}>Chest</div>
                <button style={buttonStyle}>
                  Bench Press
                </button>
                <button style={buttonStyle}>
                  Incline Press
                </button>
                <button style={buttonStyle}>
                  Cable Crossover
                </button>
              </div>
            </div>
            <div style={workoutSectionStyle}>
              <div style={workoutContentStyle}>
                <div style={{fontSize: '1.5vw'}}>Back</div>
                <button style={buttonStyle}>
                  Deadlift
                </button>
                <button style={buttonStyle}>
                  Dumbbell Rows
                </button>
                <button style={buttonStyle}>
                  Lat Pulldown
                </button>
              </div>
            </div>
            <div style={workoutSectionStyle}>
              <div style={workoutContentStyle}>
                <div style={{fontSize: '1.5vw'}}>Arms</div>
                <button style={buttonStyle}>
                  Bicep Curls
                </button>
                <button style={buttonStyle}>
                  Cable Tricep Pushdown
                </button>
                <button style={buttonStyle}>
                  Skull Crushers
                </button>
              </div>
            </div>
          </div>

          <div
            style={{
              ...workoutRowStyle,
              marginTop: '0vh',
            }}
          >
            <div style={workoutSectionStyle}>
              <div style={workoutContentStyle}>
                <div style={{fontSize: '1.5vw'}}>Legs</div>
                <button style={buttonStyle}>
                  Squats
                </button>
                <button style={buttonStyle}>
                  Leg Extension                
                </button>
                <button style={buttonStyle}>
                  Hamstring Curls
                </button>
              </div>
            </div>
            <div style={workoutSectionStyle}>
              <div style={workoutContentStyle}>
                <div style={{fontSize: '1.5vw'}}>Shoulder</div>
                <button style={buttonStyle}>
                  Overhead Press
                </button>
                <button style={buttonStyle}>
                  Side Lateral Raise
                </button>
                <button style={buttonStyle}>
                  Front Raise
                </button>
              </div>
            </div>
            <div style={workoutSectionStyle}>
              <div style={workoutContentStyle}>
                <div style={{fontSize: '1.5vw'}}>Core</div>
                <button style={buttonStyle}>
                  Plank
                </button>
                <button style={buttonStyle}>
                  Crunch
                </button>
                <button style={buttonStyle}>
                  Side Plank
                </button>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}

export default DiscoverPage;