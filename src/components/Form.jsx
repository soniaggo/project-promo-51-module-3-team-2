import React, { useEffect, useState } from 'react';
import '../styles/Form.scss';
import CardPreview from './CardPreview.jsx';
import PhotoProject from './PhotoProject.jsx';

function Form({ pformData, psetFormData, projectImage, setProjectImage, imagen_personaje, setAuthorImage }) {
  const [errorMsg, setErrorMsg] = useState('');
  const [cardURL, setCardURL] = useState('');

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

  
  useEffect(() => {
    const dataToSave = {
      formData: pformData,
      projectImage: projectImage,
      imagen_personaje: imagen_personaje
    };
    localStorage.setItem('formState', JSON.stringify(dataToSave));
  }, [pformData, projectImage, imagen_personaje]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setErrorMsg('');
    setCardURL('');

    if (!projectImage || !imagen_personaje) {
      setErrorMsg('Tienes que añadir la portada y la foto del personaje antes de enviar el formulario.');
      return;
    }

    const requestData = {
      titulo_obra: pformData.titulo_obra,
      frase_estrella: pformData.frase_estrella,
      genero: pformData.genero,
      sinopsis: pformData.sinopsis,
      link_resenas: pformData.link_resenas, 
      link_plataforma: pformData.link_plataforma,
      imagen_obra: projectImage,
      imagen_personaje: imagen_personaje,
      nombre_personaje: pformData.nombre_personaje,
      rol_personaje: pformData.rol_personaje,
    };
    console.log(requestData)

    fetch('http://localhost:4000/project/add', {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data response:', data);
        if (data.success) {
          setCardURL(data.cardURL);
          setErrorMsg('');
        } else {
          setErrorMsg('Error en la respuesta de la API.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setErrorMsg('Error de conexión con el servidor.');
      });
  };

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <h2 className="title">Crea tu claqueta</h2>
      <fieldset className="addForm__group" />
      <p>Cuéntanos sobre tu producción favorita</p>
      <input className="addForm__input" type="text" name="titulo_obra" id="titulo_obra" placeholder="Título de la pieza audiovisual" value={pformData.titulo_obra} onChange={handleChange} required />
      <input className="addForm__input" type="text" name="frase_estrella" id="frase_estrella" placeholder="Frase estrella" value={pformData.frase_estrella} onChange={handleChange} required />
      <div className="addForm__2col" />
      <input className="addForm__input" type="url" name="link_resenas" id="link_resenas" placeholder="Añade un enlace a la página de reseñas" value={pformData.link_resenas} onChange={handleChange} required />
      <input className="addForm__input" type="url" name="link_plataforma" id="link_plataforma" placeholder="Añade la plataforma donde se pueda reproducir" value={pformData.link_plataforma} onChange={handleChange} required />
      <input className="addForm__input" type="text" name="genero" id="genero" placeholder="Género" value={pformData.genero} onChange={handleChange} required />
      <textarea className="addForm__input" name="sinopsis" id="sinopsis" placeholder="Sinopsis" rows="5" value={pformData.sinopsis} onChange={handleChange} required></textarea>
      <fieldset className="addForm__group"></fieldset>
      <p>Cuéntanos sobre tu personaje favorito</p>
      <input className="addForm__input" type="text" name="nombre_personaje" id="nombre_personaje" placeholder="Nombre del personaje" value={pformData.nombre_personaje} onChange={handleChange} required />
      <input className="addForm__input" type="text" name="rol_personaje" id="rol_personaje" placeholder="Rol del personaje" value={pformData.rol_personaje} onChange={handleChange} required />
      <fieldset className="addForm__group--upload"></fieldset>
      <label htmlFor="image" className="button">Subir portada de la producción</label>
      <input className="addForm__hidden" type="file" id="image" name="image" onChange={handleProjectImageUpload} />
      <label htmlFor="imagen_personaje" className="button">Subir foto del personaje</label>
      <input className="addForm__hidden" type="file" name="imagen_personaje" id="imagen_personaje" onChange={handleAuthorImageUpload} />
      <button className="button__large" type="submit">¡ACCIÓN!</button>

      {errorMsg && <p className="formError">{errorMsg}</p>}
      {cardURL && (
        <div className="cardResult">
          <p>¡Claqueta generada correctamente!</p>
          { <a href={cardURL} target="_blank" rel="noopener noreferrer">{cardURL}</a> }
        </div>
      )}
    </form>
  );
}

export default Form;
