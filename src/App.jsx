import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './styles/App.scss';

import Form from './components/Form.jsx';
import Header from './components/Header.jsx';
import CardPreview from './components/CardPreview.jsx';
import ProjectsList from './components/ProjectsList.jsx';
import PhotoProject from './components/PhotoProject.jsx';

function App() {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('formState');
    return saved ? JSON.parse(saved).formData : {
      name: '',
      slogan: '',
      repo: '',
      web: '',
      technologies: '',
      desc: '',
      autor: '',
      job: ''
    };
  });

  const [projectImage, setProjectImage] = useState(() => {
    const saved = localStorage.getItem('formState');
    return saved ? JSON.parse(saved).projectImage : null;
  });

  const [authorImage, setAuthorImage] = useState(() => {
    const saved = localStorage.getItem('formState');
    return saved ? JSON.parse(saved).authorImage : '';
  });

  const handleReset = () => {
    localStorage.removeItem('formState');
    setFormData({
      name: '',
      slogan: '',
      repo: '',
      web: '',
      technologies: '',
      desc: '',
      autor: '',
      job: ''
    });
    setProjectImage(null);
    setAuthorImage('');
  };

  return (
    <>
      <Routes>
        <Route path="/" index element={
          <>
            <Header />
            {projectImage && <PhotoProject image={projectImage} />}
            <CardPreview pformData={formData} authorImage={authorImage} />
            <Form
              authorImage={authorImage}
              setAuthorImage={setAuthorImage}
              pformData={formData}
              psetFormData={setFormData}
              projectImage={projectImage}
              setProjectImage={setProjectImage}
            />
            <div className="reset-container">
              <button className="button__reset" onClick={handleReset}>Borrar todo</button>
            </div>
          </>
        } />
        <Route path="/proyectos" element={<><Header /><ProjectsList /></>} />
      </Routes>
    </>
  );
}

export default App;

