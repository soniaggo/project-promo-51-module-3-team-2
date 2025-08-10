import "../styles/Header.scss";
import "../styles/ProjectsList.scss"; // Importa el archivo de estilos sin asignarle un identificador

function ProjectsList({ moviesListed }) {
  if (!Array.isArray(moviesListed) || moviesListed.length === 0) {
    return <p>No hay proyectos disponibles.</p>;
  }

  return (
    
    <ul className="moviesList">
      {moviesListed.map((movie) => (
        <li key={movie.id} className="card">
          <div className="card__content">
            <div className="card__author">
              <div className="card__authorPhoto">
                <img
                  src={movie.imagen_personaje}
                  alt={movie.nombre_personaje}
                  className="card__authorImg"
                />
              </div>
              <h3 className="card__name">{movie.nombre_personaje}</h3>
              <p className="card__rol_personaje">{movie.rol_personaje}</p>
            </div>

            <div className="card__project">
              <h3 className="card__name">{movie.titulo_obra}</h3>
              <p className="card__frase_estrella">{movie.frase_estrella}</p>
              <p className="card__sinopsis">{movie.sinopsis}</p>
              <div className="card__technicalInfo">
                <p className="card__genero">{movie.genero}</p>
                <div className="card__links">
                  <a
                    className="icon icon__github"
                    href={movie.link_plataforma}
                    title="Aquí tienes el enlace para acceder a la película en Netflix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    🎦
                  </a>
                  <a
                    className="icon icon__www"
                    href={movie.link_resenas}
                    title="Mira las reseñas de esta producción"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ⭐⭐⭐⭐{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default ProjectsList;
