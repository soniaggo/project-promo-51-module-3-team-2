import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles/App.scss';

import Form from './components/Form.jsx';
import Header from './components/Header.jsx';
import CardPreview from './components/CardPreview.jsx';
import ProjectsList from './components/ProjectsList.jsx';
import PhotoProject from './components/PhotoProject.jsx';
import callToApi from './services/api'

function App() {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('formState');
    return saved ? JSON.parse(saved).formData : {
      name: '',
      slogan: '',
      link_reseñas: '',
      web: '',
      genero: '',
      sinopsis: '',
      autor: '',
      rol_personaje: ''
    };

    
  });

    const [moviesListed, setMoviesListed] = useState([]);

  useEffect(() => {
    callToApi().then(data => {
      setMoviesListed(data);
    })

  }, []);

  const [projectImage, setProjectImage] = useState(() => {
    const saved = localStorage.getItem('formState');
    return saved ? JSON.parse(saved).projectImage : null;
  });

  const [imagen_personaje, setAuthorImage] = useState(() => {
    const saved = localStorage.getItem('formState');
    return saved ? JSON.parse(saved).imagen_personaje : '';
  });

  const handleReset = () => {
    localStorage.removeItem('formState');
    setFormData({
      name: '',
      slogan: '',
      link_reseñas: '',
      web: '',
      genero: '',
      sinopsis: '',
      autor: '',
      rol_personaje: ''
    });
    setProjectImage(null);
    setAuthorImage('');
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          index
          element={
            <>
              <Header />
              <div className="main-layout">
                <div className="main-layout__left">
                  <Form
                    imagen_personaje={imagen_personaje}
                    setAuthorImage={setAuthorImage}
                    pformData={formData}
                    psetFormData={setFormData}
                    projectImage={projectImage}
                    setProjectImage={setProjectImage}
                  />
                  <div className="reset-container">
                    <button className="button__reset" onClick={handleReset}>Borrar todo</button>
                  </div>
                </div>
                <div className="main-layout__right">
                  <CardPreview pformData={formData} imagen_personaje={imagen_personaje} />
                <PhotoProject image={projectImage} />

                </div>
              </div>
            </>
          }
        />
        <Route path="/proyectos" element={<><Header /><ProjectsList moviesListed={moviesListed}/></>} />
      </Routes>
    </>
  );
}

export default App;


