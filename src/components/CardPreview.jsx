import React from 'react'
import '../styles/CardPreview.scss';
import Form from './Form.jsx';

function CardPreview( {pformData}) {
  return (

    <section className="preview">
          <div className="card__author">
            <div className="card__authorPhoto"></div>
            <p className="card__job">
              {pformData.job}
            </p>
            <h3 className="card__name">{pformData.autor || 'Oliver Gato'}</h3>
          </div>
          <div className="card__project">
            <h3 className="card__name" > {pformData.name || 'Proyecto gatuno'} </h3>
            <p className="card__slogan">{pformData.slogan || 'Miau'}</p>
            <p className="card__description">{pformData.desc || 'Revolcarse por el suelo en invierno y en verano'}</p>
            <div className="card__technicalInfo">
              <p className="card__technologies">{pformData.technologies || 'wiskas y latitas'}</p>
              <a className="icon icon__www" href= {pformData.web || 'https://github.com/soniaggo/project-promo-51-module-3-team-2/'}  >🌐
              </a></div>
              
              <a className="icon icon__github" href={pformData.repo || 'https://github.com/soniaggo/project-promo-51-module-3-team-2/'} title="Haz click para ver el código del proyecto"> 🖥️
              </a>
            </div>
      </section>
  )
}
export default CardPreview