import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bar from '../BarComponent/Bar';
import { Box, Button, TextField, Typography, Stack } from '@mui/material';
import { exerciseOptions, fetchData } from './fetchData';

// const buttonStyle = {
//   borderRadius: '40px',
//   width: '80%',
//   fontFamily: 'Anonymous Pro',
//   fontSize: '1vw',
//   background: '#ADADAD',
//   border: 'none',
// }

const backgroundStyle = {
  height: '100%',
  width: '30%',
  background: '#FFF8EB',
  fontFamily: 'Anonymous Pro',
  margin: '5vw',
}

// const workoutRowStyle = {
//   height: '40%',
//   marginTop: '-4vh',
//   marginBottom: '1vh',
//   marginLeft: '1vw',
//   marginRight: '1vw',
//   display: 'flex',
//   justifyContent: 'space-evenly',
// }

// const workoutSectionStyle = {
//   width: '33%',
//   display: 'flex',
//   justifyContent: 'center',
// }

// const workoutContentStyle = {
//   flexDirection: 'column',
//   width: '100%',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-evenly',
// }

function DiscoverPage() {

  const [search, setSearch] = useState('');
  const [exercises, setEx] = useState([]);

  const navigate = useNavigate();

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/name/${search}`, exerciseOptions);
      console.log(exerciseData);

      setEx(exerciseData);
      setSearch('');
    }
  };

  return (
    <div>
      <Bar />
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
          <div
            style={{
              ...backgroundStyle,
              width: '80vw'
            }}
          >
            <p
              style={{
                fontWeight: 'bold',
                fontSize: '2vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Discover
            </p>
            <div>
              <Box position="relative" mb="72px">
                <TextField
                  height="76px"
                  sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value.toLowerCase())}
                  placeholder="Search Exercises"
                  type="text"
                />
                <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
                  Search
                </Button>
              </Box>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center', flexWrap: "wrap"
            }}>
              {exercises.map((entry, index) => (
                <div style={{ margin: '10px', border: '1px solid black', borderRadius: '12px', padding: '5px' }}>
                  <img src={entry.gifUrl} loading='lazy'></img>
                  <Stack direction="row">
                    <Button sx={{ textTransform: 'captitalize', borderRadius: '20px', background: '#D7FFF1', color: 'black', ml: '15px' }}>Area: {entry.bodyPart}</Button>
                    <Button sx={{ textTransform: 'captitalize', borderRadius: '20px', background: '#FFE8D4', color: 'black', ml: '15px' }}>Targets: {entry.bodyPart}</Button>
                  </Stack>

                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", margin: '10px' }}>
                    <Typography textTransform="capitalize" fontWeight='bold' textAlign='center'>
                      {entry.name}
                    </Typography>

                    <Button sx={{ borderRadius: '50%', border: '1px solid black' }} onClick={() => {
                      navigate('/SetRep', { state: { exerciseName: entry.name } });
                    }}>+</Button>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default DiscoverPage;