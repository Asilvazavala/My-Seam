import React,{useEffect, useState} from "react";
import styles from "./ItemDetail.module.css";
import { Icon } from '@chakra-ui/react'
import { BsFillCartPlusFill, BsFillHeartFill } from "react-icons/bs";
import { useFunctions } from '../../../hooks/useFunctions';
import { addFavourite } from '../../../redux/actions';
import { useAuth0 } from "@auth0/auth0-react";

export default function ItemDetail({ image, details }) {
  const { useSelector, dispatch } = useFunctions();
  const { isAuthenticated } = useAuth0();

  const favourites = useSelector(state => state.favourites);

  const indexProduct = favourites.findIndex(el => el.id == details.id)

  const [mainImage, setMainImage] = useState()
  const [tallaSeleccionada, setTallaSeleccionada] = useState(null);  

  const handleTallaClick = (talla) => {
    setTallaSeleccionada(talla);
  };

  useEffect(()=>{
      setMainImage(image[0])
  }, [image])

 return (
  <section className={styles.wrapper}>

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

    <main className={styles.main}>
      <aside>
        { isAuthenticated &&
          <Icon 
          as={BsFillHeartFill} 
          color={indexProduct >= 0  ? 'red' : ''} 
          w={8} 
          h={8} 
          className={indexProduct >= 0  ? styles.favItem : styles.buttonFavourites} 
          onClick={() => dispatch(addFavourite(details))} 
          title="Agregar a favoritos"
        />
        }
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
          <a href="https://antonio-silva-portfolio.onrender.com/" target="_blank" link="noopener noreferer">
            <Icon 
              as={BsFillCartPlusFill} 
              w={8} 
              h={8} 
              className={styles.buttonCart} 
              // onClick={handleCart} 
              title="Agregar al carrito"/>
            <span>Añadir al carrito</span>
          </a>
        </div>
      </section>
    </main>
  </section>
 )
}