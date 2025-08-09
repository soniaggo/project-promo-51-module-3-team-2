import React from 'react';
import '../styles/CardPreview.scss';
import Miranda from '../images/miranda.jpeg'; 

function CardPreview({ pformData, imagen_personaje }) {
  return (
    <section className="preview">
      <div className="card__content">
        <div className="card__author">
          <div className="card__authorPhoto">
            {imagen_personaje ? (
              <img src={imagen_personaje} alt="Foto de la autora" className="card__authorImg" />
            ) : (
              <img src={Miranda} alt="Foto por defecto" className="card__authorImg" />
            )}
          </div>  
          <h3 className="card__name">{pformData.nombre_personaje || 'Miranda Priestly'}</h3>
          <p className="card__rol_personaje">{pformData.rol_personaje || 'Directora de la revista de moda Runway'}</p>
        </div>

        <div className="card__project">
          <h3 className="card__name">{pformData.titulo_obra || 'El diablo viste de Prada'}</h3>
          <p className="card__frase_estrella">{pformData.frase_estrella ? `«${pformData.frase_estrella}»` : "«Los detalles de tu incompetencia no me interesan»"}</p>
          <p className="card__sinopsis">{pformData.sinopsis || 'Una joven periodista consigue el trabajo "soñado" como asistente de la poderosa editora de una revista de moda, pero pronto descubre que el glamour tiene un precio y debe decidir qué está dispuesta a sacrificar por triunfar.'}</p>
          <div className="card__technicalInfo">
            <p className="card__genero">{pformData.genero || 'Sátira dramática'}</p>
            <div className="card__links">
               <a
                className="icon icon__github"
                href={pformData.link_plataforma || 'https://www.netflix.com/title/70044889'}
                title="Aquí tienes el enlace para acceder a la película en Netflix"
                target="_blank"
                rel="noreferrer">  🎦</a>
              <a
                className="icon icon__www"
                href={pformData.link_resenas || 'https://www.filmaffinity.com/es/film845394.html'}
                title="Mira las reseñas de esta producción"
                target="_blank"
                rel="noreferrer">⭐⭐⭐⭐  </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardPreview;
