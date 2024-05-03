import {React, useState} from 'react';
import Bar from '../BarComponent/Bar';

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

function Login(){

    const [username, getUser] = useState('');
    const [password, getPass] = useState('');

    function log()
    {
        if (username === '' || password === '')
            {
                alert("Please fill out");
            }
        else
        {
            console.log("Username: " + username);
            console.log("Password: " + password);
            alert("Success");
        }
    }

    return (
        <div>
            <Bar />
            <div style={{height: '100vh', width: '99vw', background: '#FFFCF7', display: 'flex', justifyContent: 'center',   alignItems: 'center',}}>
                <div style={{width: '100%', height:'80%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{backgroundColor: '#FFF8EB', height: '100%', width: '30%'}}>
                        <div style={{fontSize:'4vw', textAlign: 'center', height: '20%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <div style={{textAlign:'center', fontFamily: 'Anonymous Pro'}}>Login</div>
                        </div>
                        
                        <div style={{height: '40%', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                            <div style={{width: '90%'}}>
                                <label style={{fontFamily: 'Anonymous Pro'}}>Username</label>
                                <div style={{width: '100%'}}>
                                    <input type='text' style={{width: '100%', height: '5vh', border: '3px solid black'}} value={username} onChange={(event) => getUser(event.target.value)}></input>
                                </div>
                            </div>

                            <div style={{width: '90%'}}>
                                <label style={{fontFamily: 'Anonymous Pro'}}>Password</label>
                                <div style={{width: '100%'}}>
                                    <input type='text' style={{width: '100%', height: '5vh', border: '3px solid black'}} value={password} onChange={(event) => getPass(event.target.value)}></input>
                                </div>
                                <div style={{textAlign: 'right', color: '#0009DA', fontFamily: 'Anonymous Pro'}}>Forgot Password?</div>
                            </div>
                        </div>

                        <div style={{height: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <button style={buttonStyle} onClick={log}>Log In</button>

                            <button style={buttonStyle}>Sign Up</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;