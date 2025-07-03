 import React from 'react';
 import CardPreview from './CardPreview';
  import '../styles/Form.scss';
  export default function Form() {
   return (
  <form className="addForm">
        
        <CardPreview />
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group"/>
          <p>Cuéntanos sobre el proyecto</p>
          <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto"/>
          <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan"/>
          <div className="addForm__2col"/>
            <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio"/>
             <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo"/>
          <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías"/>
          <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5"></textarea>
        <fieldset className="addForm__group"/>
          <p>Cuéntanos sobre la autora</p>
          <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre"/>
          <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo"/>
        <fieldset className="addForm__group--upload"/>
          <label htmlFor="image" className="button">Subir foto del proyecto</label>
          <input className="addForm__hidden" type="file" name="image" id="image"/>
          <label htmlFor="photo" className="button">Subir foto de la autora</label>
          <input className="addForm__hidden" type="file" name="photo" id="photo"/>
          <button className="button__large">Crear proyecto</button>
    </form>
  )
 }
