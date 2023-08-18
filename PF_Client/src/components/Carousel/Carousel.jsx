import React from 'react'
import promo1 from '../../images/promociones1.webp'
import promo2 from '../../assets/images/finTemporada.webp'
import promo3 from '../../images/promociones3.webp'
import styles from './Carousel.module.css'
import { Link } from 'react-router-dom';

export const Carousel = () => {

  return (
    <div className={styles.containerPromotion}>
      <div id="carousel" className="carousel slide carousel-dark" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">

          {/* Imagen 1 */}
          <Link to= {'/promotions'}>
            <div className= "carousel-item active">
              <img src={promo1} className={styles.imgCarousel} alt="promo1" title="Haz clic para ver más detalles"/>
              <div className="carousel-caption d-md-block">
                <p className={styles.terminosCondiciones}>Aplican términos y condiciones.</p>
              </div>
            </div>
          </Link>

          {/* Imagen 2 */}
          <Link to= {'/promotions'}>
            <div className="carousel-item">
              <img loading='lazy' decoding='async' src={promo2} className={styles.imgCarousel} alt="promo2" title="Haz clic para ver más detalles"/>
              <div className="carousel-caption d-md-block">
                <p className={styles.terminosCondiciones}>Aplican términos y condiciones.</p>
              </div>
            </div>
          </Link>

          {/* Imagen 3 */}
          <Link to= {'/promotions'}>
            <div className="carousel-item">
              <img loading='lazy' decoding='async' src={promo3} className={styles.imgCarousel} alt="promo3" title="Haz clic para ver más detalles"/>
              <div className="carousel-caption d-md-block">
              </div>
            </div>
          </Link>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  )
}
