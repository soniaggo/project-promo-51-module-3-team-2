import '../styles/Header.scss';
import proyecto from '../images/imagen-claquetas.png';
import '../styles/ProjectsList.scss'; // Importa el archivo de estilos sin asignarle un identificador

function ProjectsList() {
  return (
    <>
      <h2>Lista de Proyectos</h2>
      <img className="lista-proyectos" src={proyecto} alt="Foto de proyecto" />
    </>
  );
}

export default ProjectsList;