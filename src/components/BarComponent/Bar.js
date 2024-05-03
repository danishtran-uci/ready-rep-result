import {React, useState} from 'react';

function Bar() {
    const [dropDownToggle, setDropDownToggle] = useState(false);


    return (
        <div style={{width: '100%'}}>
            <div style={{height: "20vh", width:"100%", backgroundColor: "#022F40", alignItems: 'center', display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                
                
                <div style={{fontSize: '5vw', color: 'white', padding: '10px'}}>Ready Set Result</div>

                <div style={{padding:'10px'}}>
                    <button onClick={() => setDropDownToggle((prev) => (!prev))} style={{backgroundColor: 'transparent', color: 'white', border: 'none'}}>
                        <p>TEST</p>
                        <p>----------------</p>
                        <p>----------------</p>
                        <p>----------------</p>
                    </button>

                </div>

            </div>

            <div style={{width: '25vh', float: 'right', backgroundColor: '#FFF8EB', boxShadow: '0px 8px 12px 0px rgba(0,0,0,0.2)'}}>
                {dropDownToggle &&  
                        <div style={{fontSize: '3vw'}}>
                            <div style={{padding: '10px'}}>Discover</div>
                            <div style={{padding: '10px'}}>Workout Tracker</div>
                            <div style={{padding: '10px'}}>Calorie Tracker</div>
                            <div style={{padding: '10px'}}>Weight Tracker</div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Bar;