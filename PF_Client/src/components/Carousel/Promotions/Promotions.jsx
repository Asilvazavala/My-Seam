import React, { useEffect } from 'react'
import styles from './Promotions.module.css'
import { NavBar } from '../../NavBar/NavBar'
import { CardProducts } from '../../Card/CardProducts/CardProducts';
import { useSelector, useDispatch } from 'react-redux';
import { getPromotions } from '../../../redux/actions';
import { Footer } from '../../Footer/Footer'

export const Promotions = () => {
  let promotions = useSelector((state) => state.promotions);

  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(getPromotions());
  }, [])

  return (
    <div>
      <NavBar />

      {/* Promotions Products*/}
      <h1 className={promotions.length > 0 ? styles.tituloPromocion : styles.hidePromotions}>HASTA <b className={styles.resaltarTituloPromocion}>33%</b> DE DESCUENTO SOLO <b className={styles.resaltarTituloPromocion}>HOY</b></h1>
      <ul className={styles.cardContainer}>
      {
        promotions.length > 0 ? 
        promotions.map((el) => {
          return ( 
            <CardProducts
              id = {el.id} 
              key = {el.id}
              image = {el.image}
              name = {el.name} 
              price = {Math.round(el.price * .8)}
              description = {el.description}
            />
          )
        }) 
        : null
       }
      </ul>  
      <Footer />
    </div>
  )
}
