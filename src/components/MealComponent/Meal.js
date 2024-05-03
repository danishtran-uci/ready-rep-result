import {React, useState} from 'react';

function Meal() {

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

  return (
    <div>
      <div style={{width: "100%", height: "80vh", alignItems: 'center', display:'flex', flexDirection: 'row'}}>
        <div style={{width: "50%", height:'70%', backgroundColor: '#FFF8EB', border: "10px solid white", display:'flex', flexDirection: 'column'}}>
          <div style={{height: '10%', fontSize: '3vw', fontFamily: 'Anonymous Pro', fontWeight: 'bold', padding: '1vw'}}>
            <div>
                Current Meal
            </div>
          </div>

          <div style={{padding:'1vw', width: '80%',alignItems: 'center', height: '80%', fontSize: '3vw', fontFamily: 'Anonymous Pro', alignItems: 'center', display:'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
            <div>
                Calories: <input type="number" style={inputStyle}></input>kcal
            </div>
            <div>
                Fat: <input type="number" style={inputStyle}></input>g
            </div>
            <div>
                Protein: <input type="number" style={inputStyle}></input>g
            </div>
            <div>
                Sugar: <input type="number" style={inputStyle}></input>g
            </div>

          </div>
            
            <div>
                <button style={buttonStyle}>Finish Exercise</button>
            </div>

        </div>
        
        <div style={{width: "50%", height:'70%', backgroundColor: '#FFF8EB', border: "10px solid white", display:'flex', flexDirection: 'column'}}>
          <div style={{height: '10%', fontSize: '3vw', fontFamily: 'Anonymous Pro', fontWeight: 'bold', padding: '1vw'}}>
            <div>
                Meal History
            </div>
          </div>

          <div style={{padding:'1vw', width: '80%', height: '80%', fontSize: '3vw', fontFamily: 'Anonymous Pro', alignItems: 'center', display:'flex', flexDirection: 'column', justifyContent: 'space-around', textAlign: 'center'}}>
            <div>Meal #1</div>
            <div>
                Calories: 156 kcal
            </div>
            <div>
                Fat: 9 g
            </div>
            <div>
                Protein: 6 g
            </div>
            <div>
                Sugar: .6 g
            </div>

          </div>
            
            <div>
                <button style={buttonStyle}>Clear</button>
            </div>

            </div>
        </div>
    </div>
  );
}

export default Meal;