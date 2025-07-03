import '../styles/Header.scss'
import { Routes, Route, Link, NavLink, useLocation } from 'react-router'
import logo from '../images/logo.webp'

function Header() {
  
  const { pathname } = useLocation();
  let dinamicButton = null;

  if (pathname.startsWith("/proyectos")) {
    dinamicButton = <NavLink to="/"><button className="header__button">Crear Proyecto</button></NavLink>;
  } else if (pathname === "/") {
    dinamicButton = <NavLink to="/proyectos"><button className="header__button">Ver Proyectos</button></NavLink>;
  }
  return (
  <section className="header">
    <div className="header__topbar">
        <p class="header__topbar-left">Brag Space</p>
        <img class="header__topbar-right-image" src={logo} alt="logo" />
    </div>
    <div className="header__hero">
        <h1 className="header__title">Brag Space</h1>
        <h2 className="header__subtitle">Escaparate en línea para recoger ideas a través de la tecnología</h2>
        {dinamicButton}
    </div>        
  </section>
  )
}
export default Header