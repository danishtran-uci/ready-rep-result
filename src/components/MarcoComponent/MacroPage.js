import {React, useState} from 'react';
import Bar from '../BarComponent/Bar';

function MacroPage() {

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

  const [mealHistory, setMealHistory] = useState([]);
  
  const [calories, setCal] = useState('');
  const [fat, setFat] = useState('');
  const [protein, setProtein] = useState('');
  const [sugar, setSugar] = useState('');

  function addMealToHistory()
  {
    if (calories === '' || fat === '' || protein === '' || sugar === '')
      {
        alert("Please Fill Out");
      }
    else if (calories < 0 || fat < 0 || protein < 0 || sugar < 0)
      {
        alert("Invalid Inputs")
      }
    else
    {
      const curMeal = {
        calories: calories,
        fat: fat,
        protein: protein,
        sugar: sugar
      };

      setMealHistory([...mealHistory, curMeal]);

      setCal('');
      setFat('');
      setSugar('');
      setProtein('');

      console.log(mealHistory);
    }
  };

  return (
    <div>
      <Bar />
      <div style={{width: "100%", height: "80vh", alignItems: 'center', display:'flex', flexDirection: 'row'}}>
        <div style={{width: "50%", height:'70%', backgroundColor: '#FFF8EB', border: "10px solid white", display:'flex', flexDirection: 'column'}}>
          <div style={{height: '10%', fontSize: '3vw', fontFamily: 'Anonymous Pro', fontWeight: 'bold', padding: '1vw'}}>
            <div>
                Current Meal
            </div>
          </div>

          <div style={{padding:'1vw', width: '80%',alignItems: 'center', height: '80%', fontSize: '3vw', fontFamily: 'Anonymous Pro', display:'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
            <div>
                Calories: <input type="number" style={inputStyle} value={calories} onChange={(event) => setCal(event.target.value)}></input>kcal
            </div>
            <div>
                Fat: <input type="number" style={inputStyle} value={fat} onChange={(event) => setFat(event.target.value)}></input>g
            </div>
            <div>
                Protein: <input type="number" style={inputStyle} value={protein} onChange={(event) => setProtein(event.target.value)}></input>g
            </div>
            <div>
                Sugar: <input type="number" style={inputStyle} value={sugar} onChange={(event) => setSugar(event.target.value)}></input>g
            </div>

          </div>
            
            <div>
                <button style={buttonStyle} onClick={addMealToHistory}>Finish Meal</button>
            </div>

        </div>
        
        <div style={{width: "50%", height:'70%', backgroundColor: '#FFF8EB', border: "10px solid white", display:'flex', flexDirection: 'column'}}>
          <div style={{height: '10%', fontSize: '3vw', fontFamily: 'Anonymous Pro', fontWeight: 'bold', padding: '1vw'}}>
            <div>
                Meal History
            </div>
          </div>

          <div style={{height: '80%'}}>
            <p
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                  flexDirection: 'column',
                }}
              >
                {mealHistory.map((entry, index) => (
                  <div key={index}>
                    <p>Meal# {index + 1}</p>
                    <p>Calories: {entry.calories} kcal</p>
                    <p>Fat: {entry.fat} g</p>
                    <p>Protein: {entry.protein} g</p>
                    <p>Sugar: {entry.sugar} g</p>
                  </div>
                ))}
              </p>
          </div>
            
            <div>
                <button style={buttonStyle}>Clear</button>
            </div>

            </div>
        </div>
    </div>
  );
}

export default MacroPage;