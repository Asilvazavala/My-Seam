import React, { useState, useEffect } from 'react'
import styles from './Categories.module.css'
import { Paginado } from '../Paginado/Paginado'
import { CardProducts } from '../../components/Card/CardProducts/CardProducts'
import { useDispatch, useSelector } from 'react-redux';
import { filterByPrice, getProducts, filterByCategory, filterByGender, filterByRange } from '../../redux/actions';
// Chakra
import { Button, Input } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

export const Categories = () => {
  // Categoría que se muestra en pantalla
  const [category, setCategory] = useState('Todos')
  // Estado para actualizar la página actual
  const [currentPage, setCurrentPage] = useState(1);
  // Estado de los productos que se muestran por página
  const [productsPerPage, setProductsPerPage] = useState(12);
  // Estado para actualizar el rango de precios
  const [currentPriceMin, setCurrentPriceMin] = useState('')
  const [currentPriceMax, setCurrentPriceMax] = useState('')

  // Ejecución de las actions 
  const dispatch = useDispatch()

  // Me traigo los estados del reducer 
  let products = useSelector((state) => state.products);
  const users = useSelector((state) => state.users);

  // Filtrar los usuarios activos
  const activeUsers = users.filter((user) => user.isActive);
  // Delimitar el índice de los productos a paginar
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  function handleFilterByPrice(e){
    // e.preventDefault()
    dispatch(filterByPrice(e.target.value)) 
    setCategory(e.target.value)
    setCurrentPage(1)
  }

  const handleFilterByCategory = (e) => {
    const category = e.target.value;
    dispatch(filterByCategory(category));
    setCurrentPage(1)
    setCategory(e.target.value)
    const categories = document.getElementById('categories');
    categories.scrollIntoView({ behavior: 'smooth' });
};

  const handleFilterByGender = (e) => {
    const gender = e.target.value;
    dispatch(filterByGender(gender));
    setCurrentPage(1)
    setCategory(e.target.value)
    const categories = document.getElementById('categories');
    categories.scrollIntoView({ behavior: 'smooth' });
};

  // Mostrar todos los productos
  const handleAll = (e) => {
    e.preventDefault();
    dispatch(getProducts())
    setCategory(currentProducts.length)
    setCurrentPage(1)
  }

  const handleChangePriceMin = (e) => {
    setCurrentPriceMin(e.target.value)
  }

  const handleChangePriceMax = (e) => {
    setCurrentPriceMax(e.target.value)
  }

  function handleFilterByRange(e){
    e.preventDefault()
    dispatch(filterByRange(currentPriceMin, currentPriceMax)) 
    setCurrentPriceMin('')
    setCurrentPriceMax('')
    setCategory(currentProducts.length)
    setCurrentPage(1)
  }

  // Ejecuto en automático la action para obtener la info de la DB y actualizar las card
  useEffect(() => {
    if (currentProducts.length === 0) {
      dispatch(getProducts());
    }
  }, [])

  return (
    <div className={currentProducts.length > 0 ? '' : styles.hide}>
      <div id='categories' className={styles.containerMain}>
        
        <div className={styles.containerCategories}>
        <h2>Filtros</h2>
          <h1 className={styles.currentCategory}>{category !== 'Todos' && products.length} {category !== 'Todos' && 'Resultados'}</h1>
          <Button value='Todos' onClick={(e) => handleAll(e)} className={styles.buttonCategorieTodos} colorScheme='orange'>Todos</Button>
                    
          <h4>Precio</h4>
          <Button value='Hasta $50' onClick={(e) => handleFilterByPrice(e)} className={styles.buttonCategorie} colorScheme='orange'>Hasta $50</Button>
          <Button value='$50 a $100' onClick={(e) => handleFilterByPrice(e)} className={styles.buttonCategorie} colorScheme='orange'> $50 a $100</Button>
          <Button value='Mas de $100' onClick={(e) => handleFilterByPrice(e)} className={styles.buttonCategorie} colorScheme='orange'>Más $100</Button> 
          
          <div>
            <Input variant='unstyled' className={styles.inputPrice1} size='xs' placeholder='Mínimo' value={currentPriceMin} onChange={(e) => handleChangePriceMin(e)}></Input>
            <Input variant='unstyled' className={styles.inputPrice2} size='xs' placeholder='Máximo' value={currentPriceMax} onChange={(e) => handleChangePriceMax(e)}></Input>
            <ArrowForwardIcon className={styles.buttonPrice} onClick={(e) => handleFilterByRange(e)}/>
          </div>

          <h4>Prenda</h4>
          <Button value='Todos' onClick={(e) => handleAll(e)} className={styles.buttonCategorie} colorScheme='orange'>Todos</Button>
          <Button value='Blusas' onClick={(e) => handleFilterByCategory(e)} className={styles.buttonCategorie} colorScheme='orange'>Blusas</Button>
          <Button value='Vestidos' onClick={(e) => handleFilterByCategory(e)} className={styles.buttonCategorie} colorScheme='orange'>Vestidos</Button>
          <Button value='Faldas' onClick={(e) => handleFilterByCategory(e)} className={styles.buttonCategorie} colorScheme='orange'>Faldas</Button>
          <Button value='Pantalones' onClick={(e) => handleFilterByCategory(e)} className={styles.buttonCategorie} colorScheme='orange'>Pantalones</Button>
          <Button value='Camisas' onClick={(e) => handleFilterByCategory(e)} className={styles.buttonCategorie} colorScheme='orange'>Camisas</Button>
          <Button value='Sweaters' onClick={(e) => handleFilterByCategory(e)} className={styles.buttonCategorie} colorScheme='orange'>Sudaderas</Button>

          <h4>Género</h4>
          <Button value='Todos' onClick={(e) => handleAll(e)} className={styles.buttonCategorie} colorScheme='orange'>Todos</Button>
          <Button value='Hombre' onClick={(e) => handleFilterByGender(e)} className={styles.buttonCategorie} colorScheme='orange'>Hombre</Button>
          <Button value='Mujer' onClick={(e) => handleFilterByGender(e)} className={styles.buttonCategorie} colorScheme='orange'>Mujer</Button>
          <Button value='Niño' onClick={(e) => handleFilterByGender(e)} className={styles.buttonCategorie} colorScheme='orange'>Niño</Button>
          <Button value='Niña' onClick={(e) => handleFilterByGender(e)} className={styles.buttonCategorie} colorScheme='orange'>Niña</Button>
        </div>

        {/* Cards */}
        <ul className={styles.cardContainer}>
        {
        currentProducts.length > 0 ? 
        currentProducts.map((el) => {
        
         const user = activeUsers.find((user) => user.id === el.userid);
         if (user) { 
            return (
              <CardProducts 
                id = {el.id} 
                key = {el.id}
                image = {el.image}
                name = {el.name} 
                price = {el.price}
                description = {el.description}
              />
            )
         } else {
            return null;
         }
      }) 
      : <span className={styles.loader}></span>
      }
        </ul>
      </div>
      <Paginado
        totalProducts={products.length}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}
