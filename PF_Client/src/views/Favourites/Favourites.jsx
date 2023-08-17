import React, { useEffect } from 'react'
import styles from './Favourites.module.css'
import { NavBar } from '../../components/NavBar/NavBar'
import { CardProducts } from '../../components/Card/CardProducts/CardProducts'
import { useSelector } from 'react-redux';
import { useNotifications } from '../../hooks/useNotifications';

export const Favourites = () => {
  const favourites = useSelector(state => state.favourites)
  const { ToastContainer } = useNotifications();

  return (
    <div>
      <ToastContainer />
      <NavBar />
      <h1 className={favourites.length > 0 ? '' : styles.hide}>Mis favoritos</h1>
      <ul className={styles.cardContainer}>
        {favourites.length > 0 ? (
          favourites.map((product) => {
              return (
                <CardProducts
                  id={product.id}
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                />
              );
          })
        ) : (
          <p>No hay Favoritos</p>
        )}
      </ul>
    </div>
  )
}
