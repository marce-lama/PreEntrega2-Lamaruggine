import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-dark navbarMenu">
          <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img src="../Logo-Pagina-Web.png" alt="logo" style={{width:'5rem'}}/>
                </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                  <a className="nav-link active" aria-current="page" href="#">Nuestra Historia</a>
                  <a className="nav-link active" aria-current="page" href="#">Nuestras Marcas</a>
                  <a className="nav-link active" aria-current="page" href="#">Nuestros Productos</a>
                  <a className="nav-link active" aria-current="page" href="#">Donde Comprar</a>
                </div>
            </div>
            <div>
              <CartWidget />
            </div>
          </div>
        </nav>
  )
}

export default Navbar