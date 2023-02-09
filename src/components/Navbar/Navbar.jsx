import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark navbarMenu">
          <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  <img src="../Logo-Pagina-Web.png" alt="logo" style={{width:'5rem'}}/>
                </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                  <a class="nav-link active" aria-current="page" href="#">Nuestra Historia</a>
                  <a class="nav-link active" aria-current="page" href="#">Nuestras Marcas</a>
                  <a class="nav-link active" aria-current="page" href="#">Nuestros Productos</a>
                  <a class="nav-link active" aria-current="page" href="#">Donde Comprar</a>
                </div>
            </div>
            <div>
              <CartWidget />
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar