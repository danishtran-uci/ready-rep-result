import { React, useState } from 'react';
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

  const [mealData, setMealData] = useState({
    calories: 0,
    fat: 0,
    protein: 0,
    sugar: 0,
  })

  function updateMealData(propertyName, value) {
    setMealData((prevQuery) => ({
      ...prevQuery,
      [propertyName]: value,
    }));
  }

  function addMealToHistory() {
    if (mealData.calories === 0 || mealData.fat === 0 || mealData.protein === 0 || mealData.sugar === 0) {
      alert("Please Fill Out");
    }
    else if (mealData.calories < 0 || mealData.fat < 0 || mealData.protein < 0 || mealData.sugar < 0) {
      alert("Invalid Inputs")
    }
    else {
      setMealHistory([...mealHistory, mealData]);

      updateMealData('calories', 0);
      updateMealData('fat', 0);
      updateMealData('protein', 0);
      updateMealData('sugar', 0);
    }
  };

  return (
    <div>
      <Bar />
      <div style={{ width: "100%", height: "80vh", alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: "50%", height: '70%', backgroundColor: '#FFF8EB', border: "10px solid white", display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '10%', fontSize: '3vw', fontFamily: 'Anonymous Pro', fontWeight: 'bold', padding: '1vw' }}>
            <div>
              Current Meal
            </div>
          </div>

          <div style={{ padding: '1vw', width: '80%', alignItems: 'center', height: '80%', fontSize: '3vw', fontFamily: 'Anonymous Pro', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <div>
              Calories: <input type="number" style={inputStyle} value={mealData.calories} onChange={(event) => updateMealData('calories', event.target.value)}></input>kcal
            </div>
            <div>
              Fat: <input type="number" style={inputStyle} value={mealData.fat} onChange={(event) => updateMealData('fat', event.target.value)}></input>g
            </div>
            <div>
              Protein: <input type="number" style={inputStyle} value={mealData.protein} onChange={(event) => updateMealData('protein', event.target.value)}></input>g
            </div>
            <div>
              Sugar: <input type="number" style={inputStyle} value={mealData.sugar} onChange={(event) => updateMealData('sugar', event.target.value)}></input>g
            </div>

          </div>

          <div>
            <button style={buttonStyle} onClick={addMealToHistory}>Finish Meal</button>
          </div>

        </div>

        <div style={{ width: "50%", height: '70%', backgroundColor: '#FFF8EB', border: "10px solid white", display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '10%', fontSize: '3vw', fontFamily: 'Anonymous Pro', fontWeight: 'bold', padding: '1vw' }}>
            <div>
              Meal History
            </div>
          </div>

          <div style={{ height: '80%' }}>
            <p
              style={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                flexDirection: 'column',
              }}
            >
              {mealHistory.map((meal, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontFamily: 'Anonymous Pro',
                    fontSize: '1.25vw'
                  }}
                >
                  <strong>Meal# {index + 1}</strong>
                  <span>Calories: {meal.calories} kcal</span>
                  <span>Fat: {meal.fat} g</span>
                  <span>Protein: {meal.protein} g</span>
                  <span>Sugar: {meal.sugar} g</span>
                </div>
              ))}
            </p>
          </div>

          <div>
            <button
              style={buttonStyle}
              onClick={() => setMealHistory([])}
            >Clear</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MacroPage;