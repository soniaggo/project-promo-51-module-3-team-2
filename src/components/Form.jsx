import React, { useEffect, useState } from 'react';
import '../styles/Form.scss';
import CardPreview from './CardPreview.jsx';
import PhotoProject from './PhotoProject.jsx';

function Form({ pformData, psetFormData, projectImage, setProjectImage, authorImage, setAuthorImage }) {
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
      authorImage: authorImage
    };
    localStorage.setItem('formState', JSON.stringify(dataToSave));
  }, [pformData, projectImage, authorImage]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setErrorMsg('');
    setCardURL('');

    if (!projectImage || !authorImage) {
      setErrorMsg('Tienes que añadir la portada y la foto del personaje antes de enviar el formulario.');
      return;
    }

    const requestData = {
      name: pformData.name,
      slogan: pformData.slogan,
      technologies: pformData.technologies,
      desc: pformData.desc,
      repo: pformData.repo, 
      demo: pformData.web,
      image: projectImage,
      photo: authorImage,
      autor: pformData.autor,
      job: pformData.job,
    };

    fetch('https://dev.adalab.es/api/projectCard', {
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
      <input className="addForm__input" type="text" name="name" id="name" placeholder="Título de la pieza audiovisual" value={pformData.name} onChange={handleChange} required />
      <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Frase estrella" value={pformData.slogan} onChange={handleChange} required />
      <div className="addForm__2col" />
      <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Añade un enlace a la página de reseñas" value={pformData.repo} onChange={handleChange} required />
      <input className="addForm__input" type="url" name="web" id="web" placeholder="Añade la plataforma donde se pueda reproducir" value={pformData.web} onChange={handleChange} required />
      <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Género" value={pformData.technologies} onChange={handleChange} required />
      <textarea className="addForm__input" name="desc" id="desc" placeholder="Sinopsis" rows="5" value={pformData.desc} onChange={handleChange} required></textarea>
      <fieldset className="addForm__group"></fieldset>
      <p>Cuéntanos sobre tu personaje favorito</p>
      <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre del personaje" value={pformData.autor} onChange={handleChange} required />
      <input className="addForm__input" type="text" name="job" id="job" placeholder="Rol del personaje" value={pformData.job} onChange={handleChange} required />
      <fieldset className="addForm__group--upload"></fieldset>
      <label htmlFor="image" className="button">Subir portada de la producción</label>
      <input className="addForm__hidden" type="file" id="image" name="image" onChange={handleProjectImageUpload} />
      <label htmlFor="photo" className="button">Subir foto del personaje</label>
      <input className="addForm__hidden" type="file" name="photo" id="photo" onChange={handleAuthorImageUpload} />
      <button className="button__large" type="submit">¡ACCIÓN!</button>

      {errorMsg && <p className="formError">{errorMsg}</p>}
      {cardURL && (
        <div className="cardResult">
          <p>¡Claqueta generada correctamente!</p>
          {/* <a href={cardURL} target="_blank" rel="noopener noreferrer">{cardURL}</a> */}
        </div>
      )}
    </form>
  );
}

export default Form;
