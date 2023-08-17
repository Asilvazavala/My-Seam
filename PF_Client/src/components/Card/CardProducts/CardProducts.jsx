import React from 'react'
import styles from './CardProducts.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useFunctions } from '../../../hooks/useFunctions';
import { useNotifications } from '../../../hooks/useNotifications';
import { addCart, addFavourite, getSimilarProducts } from '../../../redux/actions';
//Chakra
import { useColorMode, Icon } from '@chakra-ui/react'
import { BsFillCartPlusFill, BsFillHeartFill } from "react-icons/bs";

export const CardProducts = ({ id, image, name, price }) => {
  const { dispatch, NavLink, useSelector, goTop } = useFunctions();
  const { notificationError, notificationSuccess, ToastContainer } = useNotifications();

  // Cambiar , id, image, name, price, d tema entre oscuro/claro 
  const currentTheme = useColorMode().colorMode
  if (name.length > 20){
    name = name.slice(0,19) + "..."    
  }
   
  const { isAuthenticated } = useAuth0();

  const allProducts = useSelector(state => state.allProducts)
  const favourites = useSelector(state => state.favourites)
  
  // Buscar si el producto esta en favoritos
  const currentProduct = allProducts.find(el => el.id == id)
  const isFavourite = favourites.findIndex(el => el.id == currentProduct?.id)
  
  const handleCart =  () => {
    notificationSuccess(`${name} agregado al carrito de compras`)
    dispatch(addCart(currentProduct));
  }

  const handleFavourites =  () => {
    if (!isAuthenticated) return notificationError('Debe iniciar sesión para añadir a favoritos')
    if (isFavourite >= 0) {
      notificationSuccess(`${name} eliminado de favoritos `)
    } else {
        notificationSuccess(`${name} agregado a favoritos`)
      }
    dispatch(addFavourite(currentProduct));
  }
  console.log(currentProduct);
  
  function handleClick(currentProduct) {
    dispatch(getSimilarProducts(currentProduct))
  }
 
  return (
    <div>
      <ToastContainer />
      <div key = {id} >
        <li className={currentTheme === "dark" ? styles.cardDarkTheme : styles.cardLightTheme}>          
          <NavLink className={styles.Link} to= {`/ProductDetail/${id}`} onClick={goTop}>
            <img onClick={() => handleClick(currentProduct)} loading='lazy' decoding='async' className={styles.imgCenter} src={image[0]} alt={name} title="Haz clic para ver más detalles" />
          </NavLink>
          <Icon 
            as={BsFillCartPlusFill} 
            w={8} 
            h={8} 
            className={styles.buttonCart} 
            onClick={handleCart} 
            title="Agregar al carrito"
          />
          <Icon 
            as={BsFillHeartFill} 
            color={isFavourite >= 0  ? 'red' : ''} 
            w={8} 
            h={8} 
            className={isFavourite >= 0  ? styles.favItem : styles.buttonFavourites} 
            onClick={handleFavourites} 
            title="Agregar a favoritos"
          />
          <NavLink className={styles.Link} to= {`/ProductDetail/${id}`} onClick={goTop} >
            <article className={styles.articleDescription}>
              <h1 onClick={() => handleClick(currentProduct)} className={styles.articleName} title="Haz clic para ver más detalles">{name}</h1>
              <h2 onClick={() => handleClick(currentProduct)} className={styles.articlePrice} title="Haz clic para ver más detalles"> ${price}</h2>
            </article>
          </NavLink>
        </li>                      
      </div>
    </div>
  )
}