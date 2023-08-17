import React, { useEffect, useState } from 'react';
import styles from './Card.module.css';
import { getUsers } from '../../redux/actions';
import { CardProducts } from './CardProducts/CardProducts';
import { Categories } from '../Categories/Categories';
import { useFunctions } from '../../hooks/useFunctions';
import { SLCards } from '../SkeletonLoader/SLCards';

export const Card = () => {
  const { dispatch, useSelector } = useFunctions();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);

  const allProducts = useSelector((state) => state.allProducts);
  const users = useSelector((state) => state.users);
  const activeUsers = users.filter((user) => user.isActive);

  // Delimitar el índice de los productos a paginar
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = allProducts.slice(firstProductIndex, lastProductIndex);

  const tendencias = allProducts.slice(4, 8);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <h4 className={currentProducts.length > 0 ? styles.titleSections : styles.hideCards}>Los más vendidos</h4>
      <ul className={styles.cardContainer}>
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => {
            const user = activeUsers.find((user) => user.id === product.userid);

            if (user) {
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
            }
            return null;
          })
        ) : (
          <SLCards />
        )}
      </ul>

      <h4 className={tendencias.length > 0 ? styles.titleSections : styles.hideCards}>Tendencias</h4>
      <ul className={styles.cardContainer}>
        {tendencias.length > 0 ? (
          tendencias.map((product) => {

                  const user = activeUsers.find((user) => user.id === product.userid);

              if (user) {
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
            }
          })
        ) : (
          <SLCards />
        )}
      </ul>

      <div id="categories">
        <Categories />
      </div>
    </div>
  );
};