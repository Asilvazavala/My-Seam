import React, {useEffect, useState} from "react";
import styles from "./ItemDetail.module.css";
import { Icon } from '@chakra-ui/react'
import { BsFillCartPlusFill, BsFillHeartFill } from "react-icons/bs";
import { useFunctions } from '../../../hooks/useFunctions';
import { useNotifications } from '../../../hooks/useNotifications';
import { addFavourite, addCart } from '../../../redux/actions';
import { useAuth0 } from "@auth0/auth0-react";
import { OtrosArticulos } from "../OtrosArticulos/OtrosArticulos";

export default function ItemDetail({ image, details }) {
  const { useSelector, dispatch } = useFunctions();
  const { notificationError, notificationSuccess, ToastContainer } = useNotifications();
  const { isAuthenticated } = useAuth0();

  const favourites = useSelector(state => state.favourites);
  const isFavourite = favourites.findIndex(el => el.id == details.id)

  const [mainImage, setMainImage] = useState()
  const [tallaSeleccionada, setTallaSeleccionada] = useState(null);  

  const handleTallaClick = (talla) => {
    setTallaSeleccionada(talla);
  };  

  const handleFavourites =  () => {
    if (!isAuthenticated) return notificationError('Debe iniciar sesión para añadir a favoritos')
    if (isFavourite >= 0) {
      notificationSuccess(`${details.name} eliminado de favoritos`)
    } else {
        notificationSuccess(`${details.name} agregado a favoritos`)
      }
    dispatch(addFavourite(details))
  }

  const handleCart =  () => {
    notificationSuccess(`${details.name} agregado al carrito de compras`)
    dispatch(addCart(details));
  }

  useEffect(()=>{
      setMainImage(image[0])
  }, [image])

 return (
  <section className={styles.wrapper}>
    <ToastContainer />
    <article className={styles.otherImages}>
      {image.map((e,i)=>{
        return(
          <figure key={i} className={styles.grid_item}
            onMouseEnter={() => setMainImage(e)}
          >
            <img
              className={mainImage === e ? styles.imgSelected : ''}
              style={{ height: '12vh' }} 
              src={e} 
              alt={e.filename}
              key={i}
            ></img>
          </figure>
        )
      })}
    </article>

    <div className={styles.containerItemOtherProducts}>
      <main className={styles.main}>
        <aside>
          <Icon 
            as={BsFillHeartFill} 
            color={isFavourite >= 0  ? 'red' : ''} 
            w={8} 
            h={8} 
            className={isFavourite >= 0  ? styles.favItem : styles.buttonFavourites} 
            onClick={handleFavourites} 
            title="Agregar a favoritos"
          />
        </aside>

        <section className={styles.containerImage}>
          <img src={mainImage} alt={mainImage} className={styles.main_image} />
        </section>

        <section className={styles.containerDescription}>
          <h3>{details.stock > 5 ? `${details.stock} unidades` : `¡Últimas ${details.stock} unidades!`}</h3>
          <h1>{details.name}</h1>
          <p>{details.description}</p>
          <div className={styles.containerTallas}>
            <p className={styles.tallas}>Tallas:</p>
            <article className={styles.botonesTallas}>
              <button 
                className={tallaSeleccionada === 'S' ? styles.tallaSeleccionada : ''}
                onClick={() => handleTallaClick('S')}>S</button>
              <button 
                className={tallaSeleccionada === 'M' ? styles.tallaSeleccionada : ''}
                onClick={() => handleTallaClick('M')}>M</button>
              <button 
                className={tallaSeleccionada === 'G' ? styles.tallaSeleccionada : ''}
                onClick={() => handleTallaClick('G')}>G</button>
            </article>
          </div>

          <div className={styles.containerPrice}>
            <h2>${details.price}</h2>
            <span>${Math.round(details.price + 20)}.99</span>
          </div>

          <div className={styles.containerButton}>
            <button onClick={handleCart}>
              <Icon 
                as={BsFillCartPlusFill} 
                w={8} 
                h={8} 
              />
              <span>Añadir al carrito</span>
            </button>
          </div>
        </section>
      </main>
      <aside>
        <OtrosArticulos details={details} />
      </aside>
    </div>

  </section>
 )
}