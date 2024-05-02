import {React} from 'react';

function SetRepPage() {

  return (
    <div>
      <table style={{width: "100%", borderSpacing:"20px"}}>
        <tbody>
          <tr style={{height: "95vh"}}>
            <td style={{width: "50vh", border: "1px solid black"}}>
              <div style={{width: "100%"}}>
                <span style={{float: "right"}}>
                    <button style={{width: "60px", textWrap: "pretty"}}>Change Workout</button>
                </span>
                <h1>
                  Bench Press
                </h1>
              </div>

              <div style={{textAlign: "center"}}>
                <div>
                  Set 1 - <input type="number" style={{width: "10vh"}}></input>lbs: <input type="number" style={{width: "10vh"}}></input> Rep
                </div>
                <div>
                  Set 2 - <input type="number" style={{width: "10vh"}}></input>lbs: <input type="number" style={{width: "10vh"}}></input> Rep
                </div>
                <div>
                  Set 3 - <input type="number" style={{width: "10vh"}}></input>lbs: <input type="number" style={{width: "10vh"}}></input> Rep
                </div>
              </div>

              <div style={{textAlign: "right"}}>
                <button>+ Add Set</button>
              </div>

              <div style={{textAlign: "right"}}>
                <button>Finish Exercise</button>
              </div>
            </td>
            <td style={{width: "50vh", border: "1px solid black"}}>
            <div>
                <h1>Current Workout</h1>

                <div>
                  <h4 style={{textAlign: "center"}}>Shoulder Press</h4>
                  <div style={{textAlign: "center"}}>
                    Set 1 - (20 lb): 8 rep 
                  </div>
                  <div style={{textAlign: "center"}}>
                    Set 2 - (20 lb): 8 rep 
                  </div>
                  <div style={{textAlign: "center"}}>
                    Set 3 - (20 lb): 8 rep 
                  </div>
                </div>

                <div style={{textAlign: "right"}}>
                  <button>Clear</button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SetRepPage;