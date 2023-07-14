import React, { useState, useEffect } from 'react';
import './ExperienciaP.css';

const Expe = () => {
  const [experienciaData, setExperienciaData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/experiencias/")
      .then(response => response.json())
      .then(data => setExperienciaData(data['hydra:member']))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className='card-wrapper'>
      {experienciaData.map(experiencia => (
        <div className='card-container' key={experiencia.id}>
          <div className='image-container'>
            <img src={experiencia.img} alt="Logos"></img>
          </div>

          <div>
            <div className='card-title'>
              <h2>{experiencia.cargo}</h2>
            </div>
            <div className="card-content">
              <h2>{experiencia.años}</h2>
              <h3>{experiencia.organizacion}</h3>
              <p>{experiencia.responsabilidades}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Expe;

