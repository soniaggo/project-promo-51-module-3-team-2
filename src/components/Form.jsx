 import React from 'react';
 import { useState } from 'react';
 import '../styles/Form.scss';
 import CardPreview from './CardPreview.jsx';

 function Form({ pformData, psetFormData }) {

    

  const handleChange = (ev) => {
    const { name, value } = ev.target; 
    psetFormData({
      ...pformData,
      [name]: value
    });
  };


   return (
        <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group"/>
          <p>Cuéntanos sobre el proyecto</p>
          <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" value={pformData.name} onChange={handleChange}/>
          <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" value={pformData.slogan} onChange={handleChange}/>
          <div className="addForm__2col"/>
            <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" value={pformData.repo} onChange={handleChange}/>
             <input className="addForm__input" type="url" name="web" id="web" placeholder="Página Web" value={pformData.web} onChange={handleChange}/>
          <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" value={pformData.technologies} onChange={handleChange}/>
          <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" value={pformData.desc} onChange={handleChange}></textarea>
        <fieldset className="addForm__group"></fieldset>
          <p>Cuéntanos sobre la autora</p>
          <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" value={pformData.autor} onChange={handleChange}/>
          <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" value={pformData.job} onChange={handleChange}/>
        <fieldset className="addForm__group--upload"></fieldset>
          <label htmlFor="image" className="button">Subir foto del proyecto</label>
          <input className="addForm__hidden" type="file" name="image" id="image"/>
          <label htmlFor="photo" className="button">Subir foto de la autora</label>
          <input className="addForm__hidden" type="file" name="photo" id="photo"/>
          <button className="button__large">Crear proyecto</button>
    </form>
  )
 }

 export default Form;
