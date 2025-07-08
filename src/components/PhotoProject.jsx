

 import React from 'react';
 import '../styles/PhotoProject.scss';
 import DefaultImage from '../images/foto-proyecto.jpg'

 function PhotoProject({ image }) {
 const imgToShow = image || DefaultImage;

  return (
    <div className="photo-project">
       <img src={imgToShow} alt="Vista previa del proyecto" />
    </div>
  );
 }

export default PhotoProject;

