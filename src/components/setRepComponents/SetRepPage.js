import { React, useState } from 'react';
import Bar from '../BarComponent/Bar';

function SetRepPage() {

  const buttonStyle = {
    margin: '1vw',
    borderRadius: '40px',
    fontSize: '2vw',
    fontFamily: 'Anonymous Pro',
    background: '#ADADAD',
    border: 'none',
    textAlign: 'left',
    float: 'right'
  }

  const inputStyle = {
    borderRadius: '40px',
    height: '70%',
    width: '15%',
    margin: '1vh',
    fontFamily: 'Anonymous Pro',
    fontSize: '3vw',
    background: '#ADADAD',
    border: 'none',
  }

  const [workoutList, setWorkout] = useState([]);

  const [sets, setSets] = useState([]);

  function addSet() {
    const nSet = {
      lbs: '',
      reps: ''
    };
    setSets([...sets, nSet])
  };

  function finish() {

    var canAdd = true;

    sets.map((entry) => {
      if (entry.lbs === '' || entry.reps === '') {
        canAdd = false;
      }
    });

    if (!canAdd) {
      alert("Please Fill Out");
    }
    else {

      setWorkout([...workoutList, sets]);

      console.log(workoutList);

      setSets([]);
    }
  };

  return (
    <div>
      <Bar />
      <div style={{ width: "100%", height: "80vh", alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: "50%", height: '70%', backgroundColor: '#FFF8EB', border: "10px solid white", display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '10%', fontSize: '3vw', fontFamily: 'Anonymous Pro', fontWeight: 'bold', padding: '1vw' }}>
            {/* <div style={{float: "right"}}>
                  <button style={buttonStyle}>Change Workout</button>
            </div> */}
            <div>
              Bench Press
            </div>
          </div>

          <div style={{ width: '80%', height: '60%', fontSize: '2vw', justifyContent: 'center', fontFamily: 'Anonymous Pro', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <p
              style={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                flexDirection: 'column',
              }}
            >
              {sets.map((entry, index) => (
                <div key={index}>
                  Set {index + 1} <input type="number" style={inputStyle} onChange={(event) => sets[index].lbs = event.target.value}></input>lbs: <input type="number" style={inputStyle} onChange={(event) => sets[index].reps = event.target.value}></input> Rep
                </div>
              ))}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <div>
              <button style={buttonStyle} onClick={addSet}>+ Add Set</button>
            </div>

            <div>
              <button style={buttonStyle} onClick={finish}>Finish Exercise</button>
            </div>
          </div>

        </div>

        <div style={{ width: "50%", height: '70%', backgroundColor: '#FFF8EB', border: "10px solid white", display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '10%', fontSize: '4vh', fontFamily: 'Anonymous Pro', fontWeight: 'bold', padding: '1vw' }}>
            <div>
              Current Workout
            </div>
          </div>

          <div style={{ padding: '1vw', width: '100%', height: '80%', fontSize: '3vw', fontFamily: 'Anonymous Pro', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', textAlign: 'center' }}>
            Bench Press
            <p
              style={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                flexDirection: 'column',
              }}
            >
              {workoutList.map((sets, index) => (
                <div key={index}>
                  {sets.map((set, idx) => (
                    <div key={idx}>
                      Set {index + 1} - ({set.lbs} lb): {set.reps} Rep
                    </div>
                  ))}
                </div>
              ))}
            </p>

          </div>

          <div>
            <button style={buttonStyle} onClick={() => (setWorkout([]))}>Clear</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SetRepPage;