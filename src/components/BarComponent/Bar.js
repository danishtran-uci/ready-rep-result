import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const dropdownitems = {
  padding: '2%',
  borderRadius: '40px',
  margin: '1vh',
  fontFamily: 'Anonymous Pro',
  fontSize: '1vw',
  background: '#ADADAD',
  border: 'none',
  height: '4vh',
  width: '10vw',
}

function Bar() {
  const [dropDownToggle, setDropDownToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div style={{
        width: '100vw',
        marginLeft: '-1vw',
        marginTop: '-1.5vh'
      }}
      >
        <div
          style={{
            height: "18vh",
            backgroundColor: "#022F40",
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>


          <div style={{
            fontSize: '4vw',
            color: 'white',
            marginLeft: '2vw'
          }}
          >Ready Set Result</div>

          <div style={{ marginTop: '1vh', marginRight: '2vw' }}>
            <button
              onClick={() => setDropDownToggle((prev) => (!prev))}
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: 'none',
                fontSize: '1.5vh'
              }}
            >
              <p>Menu</p>
              <p>----------------</p>
              <p>----------------</p>
              <p>----------------</p>
            </button>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          zIndex: '1',
          right: '2vh'
        }}
        >
          <div style={{
            backgroundColor: '#FFF8EB',
            boxShadow: '0px 8px 12px rgba(0,0,0,0.2)',
            textAlign: 'left'
          }}
          >
            {dropDownToggle &&
              <div style={{
                fontSize: '2vw',
                display: 'flex',
                flexDirection: 'column',
              }}
              >
                <button
                  style={dropdownitems}
                  onClick={() => (
                    navigate("/")
                  )}
                >Home</button>
                <button
                  style={dropdownitems}
                  onClick={() => (
                    navigate("/SetRep")
                  )}
                >Set/Rep Saver</button>
                <button
                  style={dropdownitems}
                // onClick={() => (
                //   navigate("/Macro")
                // )}
                >Macro Saver</button>
                <button
                  style={dropdownitems}
                  onClick={() => (
                    navigate("/Weight")
                  )}
                >Weight Saver</button>
                <button
                  style={dropdownitems}
                  onClick={() => (
                    navigate("/Discover")
                  )}
                >Discover Workouts</button>
                <button
                  style={dropdownitems}
                // onClick={() => (
                //   navigate("/Login")
                // )}
                >Login</button>
                <button
                  style={dropdownitems}
                  onClick={() => (
                    navigate("/Profile")
                  )}
                >Profile</button>
              </div>
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Bar;