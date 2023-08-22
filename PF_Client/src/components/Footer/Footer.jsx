import React from 'react';
import styles from './Footer.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Footer = () => {
  // Me traigo los estados del reducer 
  const allProducts = useSelector((state) => state.products);

  return (
    <div className={allProducts.length > 0 ? '' : styles.hideFooter}>
    <footer className="d-flex flex-column align-items-center justify-content-center">
      <div className={styles.containerFooterIcons}>
        <Link to="https://antonio-silva-portfolio.onrender.com/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-briefcase"></i>
        </Link>
        <Link to="mailto:asilvazavala@gmail.com" >
          <i className="bi bi-envelope"></i>
        </Link>
        {/* Github */}
        <Link to="https://github.com/Asilvazavala/My-Seam" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </Link>
        {/* Correo */}
        <i data-bs-toggle="modal" data-bs-target="#exampleModal" className="bi bi-linkedin"></i>
        <div style={{color: 'black'}} className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Perfiles de Linkedin</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className={`${styles.links} modal-body`}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/antonio-silva-developer/">Antonio Silva</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/brayan-triana-abello-014252274/">Brayan Triana</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabo-delcast/">Gabriel Castillo</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gustavo-peretti-gus/">Gustavo Peretti</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jorgetoso/">Jorge Toso</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nicolas-kim05/">Nicolas Kim</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pedro-oscar-pina-739b70223/">Pedro Pina</a>
              </div>
              <div className="modal-footer">
                <button style={{background: 'black'}} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Derechos de autor */}
      <div className={styles.footerDerechosAutor}>
        Creado por Equipo-10A (2023) 
        <p className='text-center'>Todos los derechos reservados &#169;</p>
      </div>
    </footer>
  </div>







  )
}