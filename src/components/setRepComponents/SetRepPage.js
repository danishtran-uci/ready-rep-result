import {React} from 'react';

function SetRepPage() {

  const buttonStyle = {
    borderRadius: '40px',
    margin: '1vh',
    fontSize: '2.5vw',
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
          <div style={{height: '25%', fontSize: '5vw'}}>
            <div style={{padding: '10px'}}>
              <div style={{float: "right"}}>
                  <button style={buttonStyle}>Change Workout</button>
              </div>
                Bench Press
            </div>
          </div>

          <div style={{textAlign: "center", height: '50%', fontSize: '5vw'}}>
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
          <div style={{height: "25%", fontSize: '5vw'}}>
            <div style={{padding: '10px'}}>Current Workout</div>
          </div>

          <div style={{textAlign: "center", height: '50%', fontSize: '5vw'}}>
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