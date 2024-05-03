import {React, useState} from 'react';

function Exercise() {

  const buttonStyle = {
    margin: '1vw',
    borderRadius: '40px',
    fontSize: '3vw',
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
          <div style={{height: '10%', textAlign:'center', fontSize: '5vh', fontFamily: 'Anonymous Pro', fontWeight: 'bold', padding: '1vw'}}>
            <div>
                Bench Press
            </div>
            <div>Instruction</div>
          </div>

          <div style={{padding:'1vw', width: '100%', height: '80%', textAlign: 'center', fontSize: '3vw', fontFamily: 'Anonymous Pro', alignItems: 'center', display:'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
            <div>
                Set 1: <input type="number" style={inputStyle}></input>lbs: <input type="number" style={inputStyle}></input> Rep 
            </div>
            <div>
                Set 2: <input type="number" style={inputStyle}></input>lbs: <input type="number" style={inputStyle}></input> Rep 
            </div>
            <div>
                Set 3: <input type="number" style={inputStyle}></input>lbs: <input type="number" style={inputStyle}></input> Rep 
            </div>
          </div>
            
            <div>
                <button style={buttonStyle}>+ Add Set</button>
            </div>

            <div>
                <button style={buttonStyle}>Finish Exercise</button>
            </div>

        </div>
        
        <div style={{width: "50%", height:'70%', backgroundColor: '#FFF8EB', border: "10px solid white", display:'flex', flexDirection: 'column'}}>
          <div style={{height: '10%', fontSize: '4vh', fontFamily: 'Anonymous Pro', fontWeight: 'bold', padding: '1vw'}}>
            <div>
                Current Workout
            </div>
          </div>

          <div style={{padding:'1vw', width: '100%', height: '80%', fontSize: '3vw', fontFamily: 'Anonymous Pro', alignItems: 'center', display:'flex', flexDirection: 'column', justifyContent: 'space-around', textAlign: 'center'}}>
            Shoulder Press
            <div>
                Set 1 - (20lb): 8 rep 
            </div>
            <div>
                Set 2 - (20lb): 8 rep 
            </div>
            <div>
                Set 3 - (20lb): 8 rep 
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

export default Exercise;