import React, { useState, useEffect } from 'react';
import './dpersonalesP.css';

const Dperso = () => {
  const [dpersonalesData, setdpersonalesData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/d_personales")
      .then(response => response.json())
      .then(data => setdpersonalesData(data['hydra:member']))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className='card-wrapper'>
      {dpersonalesData.map(dpersonales => (
        <div className='card-container' key={dpersonales.id}>
          <div className='image-container'>
            <img src={dpersonales.n_contacto} alt="qr"></img>
          </div>

          <div>
            <div className='card-title'>
              <h2>LinkedIn</h2>
            </div>
            <div className="card-content">
              <h2>{dpersonales.nombre}</h2>
              <h3>{dpersonales.mail}</h3>
              <p>{dpersonales.direccion}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DPerso;

