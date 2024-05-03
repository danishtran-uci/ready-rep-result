import {React, useState} from 'react';

function Bar() {
    const [dropDownToggle, setDropDownToggle] = useState(false);


    return (
        <div style={{width: '100%'}}>
            <div style={{height: "20vh", width:"100%", backgroundColor: "#022F40", alignItems: 'center', display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                
                
                <div style={{fontSize: '4vw', color: 'white', padding: '10px'}}>Ready Set Result</div>

                <div style={{padding:'10px'}}>
                    <button onClick={() => setDropDownToggle((prev) => (!prev))} style={{backgroundColor: 'transparent', color: 'white', border: 'none', fontSize: '1vw'}}>
                        <p>Menu</p>
                        <p>----------------</p>
                        <p>----------------</p>
                        <p>----------------</p>
                    </button>
                </div>
            </div>
            
            <div style={{display: 'block', position:'absolute', zIndex: '1', right:'0'}}>
                <div style={{width: '25vh', backgroundColor: '#FFF8EB', boxShadow: '0px 8px 12px 0px rgba(0,0,0,0.2)', textAlign: 'left'}}>
                    {dropDownToggle &&  
                        <div style={{fontSize: '2vw'}}>
                            <div style={{padding: '10px'}}>Set/Rep Saver</div>
                            <div style={{padding: '10px'}}>Macro Saver</div>
                            <div style={{padding: '10px'}}>Weight Saver</div>
                            <div style={{padding: '10px'}}>Discover Workouts</div>
                            <div style={{padding: '10px'}}>Login</div>
                            <div style={{padding: '10px'}}>Profile</div>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Bar;