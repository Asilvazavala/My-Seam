import styles from './Slider.module.css';
import { SliderItem } from './SliderItem';
import { useState } from 'react';
import { CardProducts } from '../Card/CardProducts/CardProducts';

export const Slider = ({ currentProducts, activeUsers }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleArrowClick = (direction) => {
    const container = document.querySelector(`.${styles.slider}`);
    const scrollAmount = 200;
    const newPosition = direction === 'right' 
      ? scrollPosition + scrollAmount 
      : scrollPosition - scrollAmount;

    container.scrollLeft = newPosition;
    setScrollPosition(newPosition);    
  };  
  
  return (
    <main className={styles.container}>
      <i className={`${styles.leftArrow} bx bxs-chevron-left-square ${scrollPosition < 50
        ? styles.disabled
        : ''}`}
        onClick={() => handleArrowClick('left')}
      ></i>        
      <i className={`${styles.rightArrow} bx bxs-chevron-right-square ${scrollPosition >= 600 
        ? styles.disabled
        : ''}`}
        onClick={() => handleArrowClick('right')}
      ></i>
      <section className={styles.slider}>
        {currentProducts.length > 0 ? (
            currentProducts.map((product) => {
              const user = activeUsers.find((user) => user.id === product.userid);

              if (user) {
                return (
                  <article className={styles.card}>

                    id={product.id}
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                  </article>
                );
              }
              return null;
            })
          ) : (
            <p>null</p>
          )}
      </section>
    </main>
  )
}
