import '../styles/Header.scss'
import { Routes, Route, Link, NavLink, useLocation } from 'react-router'
import logo from '../images/girlflix.png'
import sisters from '../images/sisters.png'

function Header() {
  
  const { pathname } = useLocation();
  let dinamicButton = null;

  if (pathname.startsWith("/proyectos")) {
    dinamicButton = <NavLink to="/" className="header__button">Crear Proyecto</NavLink>;
  } else if (pathname === "/") {
    dinamicButton = <NavLink to="/proyectos" className="header__button">Recomendaciones</NavLink>;
  }
  return (
  <section className="header">
    <div className="header__topbar">
        <img className="header__topbar-right-image" src={sisters} alt="logo-sisters" />
    </div>
    <div className="header__hero">
    <img className="img__hero" src={logo} alt="logo" />
        {/* <p>Recomienda, recuerda y comparte</p> */}
        <h2 className="header__subtitle">Historias que te marcaron, personajes que amas.</h2>
        {dinamicButton}
    </div>        
  </section>
  )
}
export default Header