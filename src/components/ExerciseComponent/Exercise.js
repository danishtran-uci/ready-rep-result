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
          </div>

          <div style={{padding:'1vw', width: '100%', height: '80%', textAlign: 'center', fontSize: '3vw', fontFamily: 'Anonymous Pro', alignItems: 'center', display:'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
            <iframe width="90%" height="90%" src="https://www.youtube.com/embed/-J4P-XOEtFY?si=tGVyWprfhzygOgfY"></iframe>
          </div>
        </div>
        
        <div style={{width: "50%", height:'70%', backgroundColor: '#FFF8EB', border: "10px solid white", display:'flex', flexDirection: 'column'}}>
          <div style={{height: '10%', fontSize: '4vh', fontFamily: 'Anonymous Pro', fontWeight: 'bold', padding: '1vw'}}>
            <div style={{textAlign: 'center'}}>
                Instructions
            </div>
          </div>

          <div style={{width: '100%', height: '80%', fontSize: '2vw', fontFamily: 'Anonymous Pro', alignItems: 'center', display:'flex', flexDirection: 'column', justifyContent: 'space-around', textAlign: 'center'}}>
            
            <ol>
                <li>
                    Lay on your back onto a flat bench. Put feet firmly on the ground.
                </li>

                <li>
                    Grip barbell with hands at around shoulder width.
                </li>

                <li>
                    Slowly lift up the bar off the rack and bring it slightly above the chest. 
                </li>

                <li>
                    Lower the bar to the chest until your elbows are slightly below the bench.
                </li>

                <li>
                    Push the bar back up to a neutral position above your chest. 
                </li>

                <li>
                    Repeat until failure.
                </li>
            </ol>

          </div>

            </div>
        </div>
    </div>
  );
}

export default Exercise;