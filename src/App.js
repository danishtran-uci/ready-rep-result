import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/homeComponents/HomePage';
import SetRepPage from './components/setRepComponents/SetRepPage';
import WeightPage from './components/weightComponents/WeightPage';
import DiscoverPage from './components/discoverComponents/DiscoverPage';
import ProfilePage from './components/profileComponents/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/SetRep"
          element={<SetRepPage />}
        />
        {/* <Route
          path="/Macro"
          element={<MacroPage />}
        /> */}
        <Route
          path="/Weight"
          element={<WeightPage />}
        />
        <Route
          path="/Discover"
          element={<DiscoverPage />}
        />
        {/* <Route
          path="/Login"
          element={<LoginPage />}
        /> */}
        <Route
          path="/Profile"
          element={<ProfilePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
