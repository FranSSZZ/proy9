import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Aframe from './routes/Aframe';
import Expe from './routes/Expe';



function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aframe' element={<Aframe />} />
        <Route path='/expe' element={<Expe/>}/>
     </Routes>
     
    </>
  );
}

export default App;