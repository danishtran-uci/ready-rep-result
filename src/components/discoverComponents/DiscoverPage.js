import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bar from '../BarComponent/Bar';

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
                  <div style={{ fontSize: '1.5vw' }}>Chest</div>
                  <button
                    style={buttonStyle}
                    onClick={() => (
                      navigate("/ExerciseInfo", { state: 'Bench Press' })
                    )}
                  >
                    Bench Press
                  </button>
                  <button
                    style={buttonStyle}
                    onClick={() => (
                      navigate("/ExerciseInfo", { state: 'Incline Press' })
                    )}
                  >
                    Incline Press
                  </button>
                  <button
                    style={buttonStyle}
                    onClick={() => (
                      navigate("/ExerciseInfo", { state: 'Cable Crossover' })
                    )}
                  >
                    Cable Crossover
                  </button>
                </div>
              </div>
              <div style={workoutSectionStyle}>
                <div style={workoutContentStyle}>
                  <div style={{ fontSize: '1.5vw' }}>Back</div>
                  <button
                    style={buttonStyle}
                    onClick={() => (
                      navigate("/ExerciseInfo", { state: 'Deadlift' })
                    )}
                  >
                    Deadlift
                  </button>
                  <button
                    style={buttonStyle}
                    onClick={() => (
                      navigate("/ExerciseInfo", { state: 'Dumbbell Rows' })
                    )}
                  >
                    Dumbbell Rows
                  </button>
                  <button
                    style={buttonStyle}
                    onClick={() => (
                      navigate("/ExerciseInfo", { state: 'Lat Pulldown' })
                    )}
                  >
                    Lat Pulldown
                  </button>
                </div>
              </div>
              <div style={workoutSectionStyle}>
                <div style={workoutContentStyle}>
                  <div style={{ fontSize: '1.5vw' }}>Arms</div>
                  <button
                    style={buttonStyle}
                    onClick={() => (
                      navigate("/ExerciseInfo", { state: 'Bicep Curls' })
                    )}
                  >
                    Bicep Curls
                  </button>
                  <button
                    style={buttonStyle}
                    onClick={() => (
                      navigate("/ExerciseInfo", { state: 'Cable Tricep Pushdown' })
                    )}
                  >
                    Cable Tricep Pushdown
                  </button>
                  <button
                    style={buttonStyle}
                    onClick={() => (
                      navigate("/ExerciseInfo", { state: 'Skull Crushers' })
                    )}
                  >
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
                  <div style={{ fontSize: '1.5vw' }}>Legs</div>
                  <button
                    style={buttonStyle}
                    onClick={() => (
                      navigate("/ExerciseInfo", { state: 'Squats' })
                    )}
                  >
                    Squats
                  </button>
                  <button
                    style={buttonStyle}
                    onClick={() => (
                      navigate("/ExerciseInfo", { state: 'Leg Extension' })
                    )}
                  >
                    Leg Extension
                  </button>
                  <button
                    style={buttonStyle}
                    onClick={() => (
                      navigate("/ExerciseInfo", { state: 'Hamstring Curls' })
                    )}
                  >
                    Hamstring Curls
                  </button>
                </div>
              </div>
              <div style={workoutSectionStyle}>
                <div style={workoutContentStyle}>
                  <div style={{ fontSize: '1.5vw' }}>Shoulder</div>
                  <button
                    style={buttonStyle}
                    onClick={() => (
                      navigate("/ExerciseInfo", { state: 'Overhead Press' })
                    )}
                  >
                    Overhead Press
                  </button>
                  <button
                    style={buttonStyle}
                    onClick={() => (
                      navigate("/ExerciseInfo", { state: 'Side Lateral Raise' })
                    )}
                  >
                    Side Lateral Raise
                  </button>
                  <button
                    style={buttonStyle}
                    onClick={() => (
                      navigate("/ExerciseInfo", { state: 'Front Raise' })
                    )}
                  >
                    Front Raise
                  </button>
                </div>
              </div>
              <div style={workoutSectionStyle}>
                <div style={workoutContentStyle}>
                  <div style={{ fontSize: '1.5vw' }}>Core</div>
                  <button
                    style={buttonStyle}
                    onClick={() => (
                      navigate("/ExerciseInfo", { state: 'Plank' })
                    )}
                  >
                    Plank
                  </button>
                  <button
                    style={buttonStyle}
                    onClick={() => (
                      navigate("/ExerciseInfo", { state: 'Crunch' })
                    )}
                  >
                    Crunch
                  </button>
                  <button
                    style={buttonStyle}
                    onClick={() => (
                      navigate("/ExerciseInfo", { state: 'Side Plank' })
                    )}
                  >
                    Side Plank
                  </button>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default DiscoverPage;