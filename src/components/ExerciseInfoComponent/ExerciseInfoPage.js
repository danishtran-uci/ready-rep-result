import { React, useState } from 'react';
import Bar from '../BarComponent/Bar';
import { useLocation } from 'react-router-dom';

function ExerciseInfoPage() {
  const location = useLocation()

  const [exerciseChosen, setExerciseChosen] = useState(location.state)

  return (
    <div>
      <Bar />
      <div
        style={{
          width: "100%",
          height: "80vh",
          backgroundColor: '#FFFCF7',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <div style={{ width: "50%", height: '70%', backgroundColor: '#FFF8EB', border: "10px solid white", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ height: '10%', textAlign: 'center', fontSize: '5vh', fontFamily: 'Anonymous Pro', fontWeight: 'bold', padding: '1vw' }}>
            <div>
              {exerciseChosen}
              <span style={{ fontSize: '1vw' }}>
                {'('}Will Use YouTube API in the future to search to display multiple videos{')'}
              </span>
            </div>
          </div>

          <div style={{ padding: '1vw', width: '100%', height: '80%', textAlign: 'center', fontSize: '3vw', fontFamily: 'Anonymous Pro', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <iframe width="90%" height="90%" src="https://www.youtube.com/embed/-J4P-XOEtFY?si=tGVyWprfhzygOgfY"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExerciseInfoPage;