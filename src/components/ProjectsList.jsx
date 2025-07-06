
import '../styles/Header.scss'
import proyecto from '../images/foto-proyecto.jpg'

function ProjectsList() {
  return (
    <>
    <h2>Lista de Proyectos</h2>
    <img className="lista-proyectos" src={proyecto} alt='Foto de proyecto'/> 
    </>
  )
}

export default ProjectsList