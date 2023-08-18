import React from 'react'
import styles from './SectionsAdmin.module.css'
import imgTech from '../../images/Technology.webp'
import imgHome from '../../images/home.webp'
import imgCostura from '../../images/home.webp'
import imgCostura2 from '../../images/Technology.webp'
import { Link } from 'react-router-dom'

export const SectionsAdmin = () => {
  return (
    <div>
      <div><h4 className={styles.titleSections}>DASHBOARD ADMIN</h4>
        <div className={styles.containerSections} title="Haz clic para ver más detalles">

          {/* Imagen 1 */}
          <div className={styles.containerImg}>
            <img className={styles.techImage} src={imgTech} alt='imgCostura'/>
            <Link to="/users">
              <p className={styles.titleImage}>Usuarios Registrados</p>
            </Link>
          </div>

          {/* Imagen 2 */}
          <div className={styles.containerImg}>
            <img className={styles.homeImage} src={imgHome} alt='imgCostura'/>
             <Link to="/productList">
              <p className={styles.titleImage}>Productos</p>
            </Link>
          </div>

          {/* Imagen 3 */}
          <div className={styles.containerImg3Y4}>
            <div className={styles.containerImg}>
              <img className={styles.seamImage} src={imgCostura} alt='imgCostura'/>
              <p className={styles.titleImage}>PQR's</p>
            </div>

            {/* Imagen 4 */}
            <div className={styles.containerImg}>
              <img className={styles.seamImage2} src={imgCostura2} alt='imgCostura' />
               <Link to="/serviceList">
              <p className={styles.titleImage}>Servicios</p>
            </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
