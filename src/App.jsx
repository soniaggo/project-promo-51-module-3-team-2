import { Routes, Route, Link, NavLink } from 'react-router'
import './styles/App.scss'
import Form from './components/Form.jsx'
import Header from './components/Header.jsx'
import ProjectsList from './components/ProjectsList.jsx'

function App() {

  return (
    <>
      <Header/>
    <Routes>
      <Route index path="/" element={<Form />} />
      <Route path="/proyectos" element={<ProjectsList />} />
    </Routes>



      
    </>
  )
}

export default App