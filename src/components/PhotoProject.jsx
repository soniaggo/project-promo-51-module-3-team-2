

import React from 'react';
import '../styles/PhotoProject.scss';

function PhotoProject({ image }) {
  if (!image) return null;

  return (
    <div className="photo-project">
      <img src={image} alt="Vista previa del proyecto" />
    </div>
  );
}

export default PhotoProject;
