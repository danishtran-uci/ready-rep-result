import React, { useState } from 'react';

const buttonStyle = {
  borderRadius: '40px',
  height: '10%',
  width: '40%',
  margin: '1vh',
  fontFamily: 'Anonymous Pro',
  fontSize: '1vw',
  background: '#ADADAD',
  border: 'none',
}

const backgroundStyle = {
  height: '100%',
  width: '30%',
  background: '#FFF8EB',
  fontFamily: 'Anonymous Pro',
  margin: '5vw',
}

const inputStyle = {
  marginLeft: '5vw',
  marginRight: '2vw',
  width: '4vw',
  height: '4vh',
  borderRadius: '40px',
  background: '#ADADAD',
  border: 'none',
}

function WeightPage() {
  const [morningWeight, setMorningWeight] = useState('');
  const [eveningWeight, setEveningWeight] = useState('');
  const [weightHistory, setWeightHistory] = useState([]);

  function addWeightToHistory() {
    console.log(morningWeight)
    if (morningWeight !== '' && eveningWeight !== '') {
      const weightEntry = {
        morningWeight: morningWeight,
        eveningWeight: eveningWeight
      };

      setWeightHistory([...weightHistory, weightEntry]);

      setMorningWeight('');
      setEveningWeight('');
    } else {
      alert('Please enter both morning and evening weights.');
    }
  };


  return (
    <div
      style={{
        height: '80vh',
        width: '99vw',
        background: '#FFFCF7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div
        style={{
          height: '80%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span
          style={backgroundStyle}
        >
          <p
            style={{
              paddingLeft: '2vw',
              fontWeight: 'bold',
              fontSize: '2vw',
            }}
          >
            Today's Weight
          </p>
          <div
            style={{
              paddingLeft: '5vw',
              paddingTop: '2.5vh',
              fontSize: '1.5vw',
            }}
          >
            Morning:
            <input
              type="number"
              style={inputStyle}
              value={morningWeight}
              onChange={(event) => setMorningWeight(event.target.value)}

            />
            lb
          </div>
          <div
            style={{
              paddingLeft: '5vw',
              paddingTop: '8vh',
              fontSize: '1.5vw',
            }}
          >
            Evening:
            <input
              type="number"
              style={inputStyle}
              value={eveningWeight}
              onChange={(event) => setEveningWeight(event.target.value)}
            />
            lb
          </div>
          <button
            style={{
              ...buttonStyle,
              marginTop: '22vh',
              marginRight: '2vw',
              float: 'right',
              fontSize: '1.5vw',
            }}
            onClick={addWeightToHistory}
          >
            Finish Day
          </button>
        </span>
        <span
          style={backgroundStyle}
        >
          <p
            style={{
              paddingLeft: '2vw',
              fontWeight: 'bold',
              fontSize: '2vw',
            }}
          >
            Past Weight
          </p>
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
              flexDirection: 'column',
            }}
          >
            {weightHistory.map((entry, index) => (
              <div key={index}>
                <p>Day {index + 1}</p>
                <p>Morning: {entry.morningWeight} lb</p>
                <p>Evening: {entry.eveningWeight} lb</p>
              </div>
            ))}
          </p>
        </span>
      </div>
    </div>
  );
}

export default WeightPage;