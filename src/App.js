import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './FormPage';
import DisplayPage from './DisplayPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<FormPage />}
        />
        <Route
          path='/display'
          element={<DisplayPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
