import Nav from "./components/nav/Nav"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react"
import Inicio from "./components/inicio/Inicio";
import Prueba from './components/prueba/Prueba'

function App() {

  return (
    <>
      <Router>
      <Nav/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/prueba" element={<Prueba/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
