import { Routes, Route, Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './styles/App.scss'

import Form from './components/Form.jsx'
import Header from './components/Header.jsx'
import CardPreview from './components/CardPreview.jsx'
import ProjectsList from './components/ProjectsList.jsx'
import PhotoProject from './components/PhotoProject.jsx';

function App() {

  const [formData, setFormData] = useState({
    name: '',
    slogan: '',
    repo: '',
    web: '',
    technologies: '',
    desc: '',
    autor: '',
    job: ''
  }); 
   const [projectImage, setProjectImage] = useState(null);
  return (
    <>
      
      <Routes>
        <Route path="/" index element={
          <>
            <Header /> 
            {projectImage && <PhotoProject image={projectImage} />} 
            <CardPreview pformData={formData}/> <Form  pformData={formData} psetFormData={setFormData}projectImage={projectImage}
             setProjectImage={setProjectImage} />
          </>
          } />
        <Route path="/proyectos" element={<ProjectsList />} />
      </Routes>
    </>
  )
}

export default App;
