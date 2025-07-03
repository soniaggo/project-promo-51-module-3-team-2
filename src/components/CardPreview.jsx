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
            <h3 className="card__name">{pformData.autor}</h3>
          </div>
          <div className="card__project">
            <h3 className="card__name">{pformData.name}</h3>
            <p className="card__slogan">{pformData.slogan}</p>
            <p className="card__description">{pformData.desc}</p>
            <div className="card__technicalInfo">
              <p className="card__technologies">{pformData.technologies}</p>
              <a className="icon icon__www" href="#" title="Haz click para ver el proyecto online">
                Web link
              </a>
              <a className="icon icon__github" href="#" title="Haz click para ver el código del proyecto">
                GitHub link
              </a>
            </div>
          </div>
      </section>
  )
}
export default CardPreview