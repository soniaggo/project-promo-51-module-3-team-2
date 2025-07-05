 import React from 'react';
 import { useState } from 'react';
 import '../styles/Form.scss';
 import CardPreview from './CardPreview.jsx';
 import PhotoProject from './PhotoProject.jsx';


 function Form({ pformData, psetFormData, projectImage ,setProjectImage, authorImage, setAuthorImage })
   {

  

  const handleChange = (ev) => {
    const { name, value } = ev.target; 
    psetFormData({
      ...pformData,
      [name]: value
    });
  };
 const handleProjectImageUpload = (ev) => {
    const file = ev.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProjectImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };
 const handleAuthorImageUpload = (ev) => {
  const file = ev.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setAuthorImage(reader.result); 
    };
    reader.readAsDataURL(file);
  }
};

   return (
        <form className="addForm">
        <h2 className="title">Crea tu claqueta</h2>
        <fieldset className="addForm__group"/>
          <p>Cuéntanos sobre tu producción favorita</p>
          <input className="addForm__input" type="text" name="name" id="name" placeholder="Título de la pieza audiovisual" value={pformData.name} onChange={handleChange}/>
          <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Frase estrella" value={pformData.slogan} onChange={handleChange}/>
          <div className="addForm__2col"/>
            <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Añade un enlace a la página de reseñas" value={pformData.repo} onChange={handleChange}/>
             <input className="addForm__input" type="url" name="web" id="web" placeholder="Añade la plataforma donde se pueda reproducir" value={pformData.web} onChange={handleChange}/>
          <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Puntuación" value={pformData.technologies} onChange={handleChange}/>
          <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Sinopsis" rows="5" value={pformData.desc} onChange={handleChange}></textarea>
        <fieldset className="addForm__group"></fieldset>
          <p>Cuéntanos sobre tu personaje favorito</p>
          <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre del personaje" value={pformData.autor} onChange={handleChange}/>
          <input className="addForm__input" type="text" name="job" id="job" placeholder="Rol del personaje" value={pformData.job} onChange={handleChange}/>
        <fieldset className="addForm__group--upload"></fieldset>
           <label htmlFor="image" className="button">Subir portada de la producción</label>
           <input className="addForm__hidden" type="file" id="image" name="image"  onChange={handleProjectImageUpload} />
          
          <label htmlFor="photo" className="button">Subir foto del personaje</label>
          <input className="addForm__hidden" type="file" name="photo" id="photo" onChange={handleAuthorImageUpload} />
          <button className="button__large">¡ACCIÓN!</button>
    </form>
  )
 }

 export default Form;
