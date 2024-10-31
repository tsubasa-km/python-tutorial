import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Top } from './components/Top';
import { PythonProvider } from 'react-py'



function App() {
  return (
    <PythonProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Top}></Route>
      </Routes>
    </BrowserRouter>
    </PythonProvider>
  );
}

export default App;
