import React, { useState } from 'react';
import { NavLink, json, useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchBar.module.css';
import { searchProductByName, getProductById } from '../../../redux/actions';
import { Results } from '../Results/Results'
//Chakra
import { IconButton, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';

export const SearchBar = () => {
  // Ejecuto las funciones de las actions
  const dispatch = useDispatch();

  // Para cambiar de página/ruta
  let navigate = useNavigate();

  // Resultados de la búsqueda en la SearchBar
  const [results, setResults] = useState([]);

  // Estado del input de búsqueda
  const [search, setSearch] = useState('');

  // Deshabilitar botón "Search" si esta vacío el estado search
  const disabled = !search.length

  // Me traigo los estados del reducer 
  const allProducts = useSelector((state) => state.allProducts);
  const products = useSelector((state) => state.products);

  //capturo el endpoint
  let direccionActual = window.location.href;
  let endpoint = direccionActual.slice(-4)

  // Actualizar el estado de la búsqueda 
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  // Hacer la búsqueda de productos por nombre con el botón search
  const handleSubmit = (e) => {
    e.preventDefault();    
    endpoint === 'home' ? '' : navigate('/home')
    dispatch(searchProductByName(search));
    setSearch('');
    const categories = document.getElementById('categories');
    categories.scrollIntoView({ behavior: 'smooth' });
    // setCurrentPage(1);
  };

  // Actualizar el número de resultados encontrados
  const handleResults = (items) => {
    setResults(items);
  };

  // Hacer la búsqueda de productos por nombre con la lista de resultados
  const handleItemSelected = (item) => {  
    endpoint === 'home' ? '' : navigate('/home')
    setSearch(item)
    dispatch(searchProductByName(item))
    setSearch('');
    const categories = document.getElementById('categories');
    categories.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>
      <form className={`${styles.containerSerchBar} d-flex`} role="search" onSubmit={handleSubmit}>
        {/* Input search & Button Search */}
        <Input className={styles.inputSearch} mr={3} width='240px' placeholder='Buscar productos...' onChange={(e) => handleChange(e)} value={search} type="search" />
          <IconButton
          className={styles.buttonSearch}
          mr={3}
          rounded="full"
          icon={<SearchIcon />}
          isDisabled={disabled}
          onClick={handleSubmit}
         />
          
      </form>

      <div className={styles.conatinerResults}>
        {/* Quantity Results */}
        { search.length > 0 && <div className={styles.quantityResults}>{results.length > 5 ? 5 : results.length} results </div>}
        
        {/* Search results */}
        {allProducts &&
        <a href="#categories">
          <Results 
          allProducts={allProducts} 
          onItemSelected={handleItemSelected} 
          search={search} 
          onResultsCalculated={handleResults}
          />
        </a>
        }
      </div>
    </div>
  )
}
