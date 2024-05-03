import {React} from 'react';

const buttonStyle = {
    borderRadius: '40px',
    height: '20%',
    width: '50%',
    margin: '1vh',
    fontFamily: 'Anonymous Pro',
    fontSize: '3vw',
    background: '#ADADAD',
    border: 'none',
  }

function Password(){

    return (
        <div style={{height: '100vh', width: '99vw', background: '#FFFCF7', display: 'flex', justifyContent: 'center',   alignItems: 'center',}}>
            <div style={{width: '100%', height:'80%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{backgroundColor: '#FFF8EB', height: '100%', width: '30%'}}>
                    <div style={{fontSize:'3vw', textAlign: 'center', height: '20%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{textAlign:'center', fontFamily: 'Anonymous Pro'}}>Change Password</div>
                    </div>
                    
                    <div style={{height: '40%', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                        <div style={{width: '90%'}}>
                            <label style={{fontFamily: 'Anonymous Pro'}}>New Password</label>
                            <div style={{width: '100%'}}><input type='text' style={{width: '100%', height: '5vh', border: '3px solid black'}}></input></div>
                        </div>

                        <div style={{width: '90%'}}>
                            <label style={{fontFamily: 'Anonymous Pro'}}>Confirm Password</label>
                            <div style={{width: '100%'}}><input type='text' style={{width: '100%', height: '5vh', border: '3px solid black'}}></input></div>
                        </div>
                    </div>

                    <div style={{height: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <button style={buttonStyle}>Confirm</button>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Password;