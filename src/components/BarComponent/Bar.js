import {React, useState} from 'react';

const dropdownitems = {
    padding: '2%'
}

function Bar() {
    const [dropDownToggle, setDropDownToggle] = useState(false);


    return (
        <div>
            <div style={{width: '100vw', marginLeft: '-1vw', marginTop: '-1.5vh'}}>
                <div 
                    style={{
                        height: "15vh", 
                        backgroundColor: "#022F40", 
                        alignItems: 'center', 
                        display:'flex', 
                        flexDirection: 'row', 
                        justifyContent: 'space-between'
                    }}>
                    
                    
                    <div style={{fontSize: '4vw', color: 'white', marginLeft: '2vw'}}>Ready Set Result</div>

                    <div style={{marginTop:'1vh', marginRight: '2vw'}}>
                        <button onClick={() => setDropDownToggle((prev) => (!prev))} style={{backgroundColor: 'transparent', color: 'white', border: 'none', fontSize: '1.5vh'}}>
                            <p>Menu</p>
                            <p>----------------</p>
                            <p>----------------</p>
                            <p>----------------</p>
                        </button>
                    </div>
                </div>
                
                <div style={{position:'absolute', zIndex: '1', right:'2vh'}}>
                    <div style={{backgroundColor: '#FFF8EB', boxShadow: '0px 8px 12px rgba(0,0,0,0.2)', textAlign: 'left'}}>
                        {dropDownToggle &&  
                            <div style={{fontSize: '2vw'}}>
                                <div style={dropdownitems}>Set/Rep Saver</div>
                                <div style={dropdownitems}>Macro Saver</div>
                                <div style={dropdownitems}>Weight Saver</div>
                                <div style={dropdownitems}>Discover Workouts</div>
                                <div style={dropdownitems}>Login</div>
                                <div style={dropdownitems}>Profile</div>
                            </div>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Bar;