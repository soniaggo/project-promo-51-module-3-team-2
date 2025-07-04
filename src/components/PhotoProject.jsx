

import React from 'react';
import '../styles/PhotoProject.scss';

function PhotoProject({ image }) {
  if (!image) return null;

  return (
    <div className="photo-project">
      <img src={image} alt="Vista previa del proyecto" style={{ maxWidth: '100%', borderRadius: '10px' }} />
    </div>
  );
}

export default PhotoProject;
