import styles from './OtrosArticulos.module.css'
import { NavLink } from 'react-router-dom'
import { useFunctions } from '../../../hooks/useFunctions'
import { useEffect } from 'react'
import { getProductById, getSimilarProducts } from '../../../redux/actions'

export const OtrosArticulos = ({ details }) => {
  const { goTop, useSelector, dispatch } = useFunctions();

  const similarProducts = useSelector(state => state.similarProducts);
  
  function handleClick(id) {
    dispatch(getProductById(id))
  }

  useEffect(() => {
    dispatch(getSimilarProducts(details))
  }, [details])

  return (
    <main>
      <section className={styles.rightMenu}>
        <h2>Productos relacionados</h2>
        {
          similarProducts.length > 0
            ? similarProducts.slice(0,3).map(el => {
              return (
                <ul key={el.id}>
                  <NavLink style={{ textDecoration: 'none' }} to={`/ProductDetail/${el.id}`}>
                    <li className={styles.rightMenuItem} onClick={() => handleClick(el.id)}>
                      <img src={el.image} alt={el.name} onClick={goTop} />
                      <div className={styles.rightMenuItemText}>
                        <span>${el.price}</span>
                        <h3 onClick={goTop}>{el.name}</h3>
                      </div>
                    </li>
                  </NavLink>
                </ul>
              )
            })
            : null
        }
      </section>
    </main>
  )
}
