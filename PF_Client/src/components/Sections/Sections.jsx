import React from 'react'
import styles from './Sections.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../../redux/actions';

export const Sections = () => {
  // Me traigo los estados del reducer 
  const dispatch = useDispatch()
  let navigate = useNavigate();

  const scrollToCategories = () => {
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  const handleFilterByCategory = (e) => {
    const category = e.target.id;
    dispatch(filterByCategory(category));
    scrollToCategories()
}

  return (
    <div className={styles.mainContainer}>
      <h4 className={styles.titleSections}>Secciones populares</h4>
      <div className={styles.cardsContainer}>
        
          <div id={'Pantalones'} onClick={(e) => handleFilterByCategory(e)} className={styles.card1}>
            <h2>Pantalones</h2>
          </div>

          <div id={'Camisas'} onClick={(e) => handleFilterByCategory(e)} className={styles.card2}>
            <h2>Camisas</h2>
          </div>

          <div id={'Faldas'} onClick={(e) => handleFilterByCategory(e)} className={styles.card3}>
            <h2>Faldas</h2>
          </div>

        </div>

        <div className={styles.cardsContainer}>
            <div id={'Camperas'} onClick={(e) => handleFilterByCategory(e)} className={styles.card4}>
              <h2>Sudaderas</h2>
            </div>

            <div id={'Vestidos'} onClick={(e) => handleFilterByCategory(e)} className={styles.card5}>
              <h2>Vestidos</h2>
            </div>

            <div className={styles.card6} onClick={() => navigate('/service')}>
              <h2>Servicios</h2>
            </div>
        </div>

    </div>
  )
}
