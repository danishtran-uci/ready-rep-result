import {React, useState} from 'react';

function SetRepPage() {

  // const [exercises, addExercise] = useState({"Shoulder Press": [20,8,20,8,20,8]});
  // const [sets, addSets] = useState('': []);

  // function addExToExercises()
  // {
  //   sets[0] = "Bench Press";
  //   var canAdd = true;
  //   if (sets[1].length !== 6)
  //     {
  //       canAdd = false;
  //     }
  //   for (let set of sets[1])
  //   {
  //     if (set < 0)
  //     {
  //       canAdd = false;
  //     }
  //   }

  //   if (canAdd)
  //     {
  //       console.log('a');
  //       console.log(sets);
  //       addExercise((preqList) => ({
  //         ...preqList, 
  //         [sets[0]]: sets[1]
  //       }));
  //       console.log(exercises);
  //     }
  //   else
  //   {
  //     alert('Please enter valid inputs');
  //   }
  // }

  const buttonStyle = {
    borderRadius: '40px',
    margin: '1vh',
    fontSize: '2vw',
    fontFamily: 'Anonymous Pro',
    background: '#ADADAD',
    border: 'none',
    textAlign: 'left'
  }

  const inputStyle = {
    borderRadius: '40px',
    height: '10%',
    width: '10%',
    margin: '1vh',
    fontFamily: 'Anonymous Pro',
    fontSize: '3vw',
    background: '#ADADAD',
    border: 'none',
    textAlign: 'left'
  }

  return (
    <div>
      <div style={{width: "100%", height: "80vh", alignItems: 'center', display:'flex', flexDirection: 'row'}}>
        <div style={{width: "50%", backgroundColor: '#FFF8EB', border: "5px solid white"}}>
          <div style={{height: '25%', fontSize: '3vw'}}>
            <div style={{padding: '10px'}}>
              <div style={{float: "right"}}>
                  <button style={buttonStyle}>Change Workout</button>
              </div>
                Bench Press
            </div>
          </div>

          <div style={{textAlign: "center", height: '50%', fontSize: '3vw'}}>
            <div>
              Set 1 - <input type="number" style={inputStyle}></input>lbs: <input type="number" style={inputStyle}></input> Rep
            </div>
            <div>
              Set 2 - <input type="number" style={inputStyle}></input>lbs: <input type="number" style={inputStyle}></input> Rep
            </div>
            <div>
              Set 3 - <input type="number" style={inputStyle}></input>lbs: <input type="number" style={inputStyle}></input> Rep
            </div>
          </div>

          <div style={{height:'25%', padding: '10px'}}>
            <div style={{textAlign: "right", height: '50%'}}>
              <button style={buttonStyle}>+ Add Set</button>
            </div>

            <div style={{textAlign: "right", height: '50%'}}>
              <button style={buttonStyle}>Finish Exercise</button>
            </div>
          </div>
        </div>
        
        <div style={{width: "50%", backgroundColor: '#FFF8EB', border: "5px solid white"}}>
          <div style={{height: "25%", fontSize: '3vw'}}>
            <div style={{padding: '10px'}}>Current Workout</div>
          </div>

          <div style={{textAlign: "center", height: '50%', fontSize: '3vw'}}>
            <div>Shoulder Press</div>
            <div>
              Set 1 - (20 lb): 8 rep 
            </div>
            <div>
              Set 2 - (20 lb): 8 rep 
            </div>
            <div>
              Set 3 - (20 lb): 8 rep 
            </div>
          </div>

          <div style={{textAlign: 'right', height: '25%', padding: '10px'}}>
            <button style={buttonStyle}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetRepPage;