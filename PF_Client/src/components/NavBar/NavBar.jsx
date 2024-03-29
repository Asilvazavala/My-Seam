import React, { useEffect, useState } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import styles from './NavBar.module.css';
import Logo from '../../assets/images/logo_MySeam_full.png';
import LogoMobile from '../../assets/images/Ico_Seam-30x30.png';
import { SearchBar } from './SearchBar/SearchBar';
import { Cart } from '../Cart/Cart';
// Chakra
import { FaMoon, FaSun } from "react-icons/fa";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
// Auth0
import LoginButton from '../Auth0/Logiin/LoginButton';
import LogoutButton from '../Auth0/Logout/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { getUserByEmail } from '../../redux/actions';

export const NavBar = () => {
  // Cambiar el tema entre oscuro/claro
  const { toggleColorMode, colorMode } = useColorMode();
  const currentTheme = useColorMode().colorMode;
  const dispatch = useDispatch();

  // Info de Auth0
  const { isAuthenticated, user } = useAuth0();  

  useEffect(() => {
    isAuthenticated &&
    dispatch(getUserByEmail(user?.email));
  }, [dispatch]);

  // Estado para mostar elementos de acuerdo al max-width de la pantalla
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 1200);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

    const scrollToCategories = () => {
      const categoriesElement = document.getElementById('categories');
      setTimeout(() => {
        categoriesElement.scrollIntoView({ behavior: 'smooth' });
      }, 2500)
    };

  return (
    <div className={styles.main}>
      {/* NavBar */}
      <nav
        className="navbar navbar-expand-xl bg-body-tertiary w-100"
        data-bs-theme={currentTheme === "dark" ? "dark" : "light"}
      >
      <section className="container-fluid">
        {/* Logo */}
        <NavLink to={"/home"}>
          <img className={styles.imgLogo} src={window.innerWidth < 1200 ? LogoMobile : Logo} alt="Logo My Seam" />
        </NavLink>

        {window.innerWidth < 1200 && <SearchBar />}
        {isSmallScreen && <Cart />}

        <button
          className={`${styles.menuMobile} navbar-toggler`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

          {/* Vender */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" title="Publicar producto">
              <NavLink className="nav-link active" to="/create">Vender</NavLink>
            </li>

            {/* Categorías */}
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/service">
                    Servicios
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" smooth to="/home#categories">
                    Productos
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/promotions">
                    Ofertas
                  </NavLink>
                </li>
              </ul>
            </li>

          {/* Mi perfil */}
            <li
              className={
                isAuthenticated ? "nav-item dropdown" : styles.hideMiPerfil
              }
            >
              <NavLink
                className="nav-link dropdown-toggle active"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {isAuthenticated ? (
                  <>
                    <Avatar
                      size="xs"
                      name={user.name}
                      src={user.picture}
                      marginLeft="10px"
                      marginRight="10px"
                    />
                    <u className={styles.userName}> {user.name}</u>
                  </>
                ) : (
                  ""
                )}
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/profile">
                    Mi Perfil
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/favourites">
                    Mis favoritos
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
            
          {window.innerWidth > 1200 && <SearchBar />}

            <IconButton
              title= "Cambiar tema"
              rounded= "full"
              onClick={toggleColorMode}
              className={styles.buttonTheme}
              icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
            />

            {!isSmallScreen && <Cart />}

            {isAuthenticated ? (
              <>
                <LogoutButton />
              </>
            ) : (
              <LoginButton />
            )}
          </div>
        </section>
      </nav>
    </div>
  );
};







 