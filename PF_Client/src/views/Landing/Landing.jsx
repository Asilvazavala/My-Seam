import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styles from './Landing.module.css'
import BackgroundVideo from "../../assets/images/NewMySeam.mp4"
import { getUserByEmail, getUsers } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { getProducts } from '../../redux/actions';

export const Landing = () => {
  const dispatch = useDispatch();
  const {isAuthenticated, user}= useAuth0();
  
  const products = useSelector((state) => state.products);

  if (isAuthenticated){
    // console.log("Entro a este condicional");
    const post={
      name:user.name,
      email: user.email,
      username: user.nickname,
      image: user.picture
    }
   axios.post("/users", post);
  //  console.log(post);
   if(user["https://example.com/roles"] && user["https://example.com/roles"].includes("admin")){
    alert("Welcome Admin!");
   }
   dispatch(getUserByEmail(user.email));
  }

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, [])

  return (
    <div className={styles.containerLanding}>
      <video className={styles.landingVideo} autoPlay muted id="background-video">
        <source src={BackgroundVideo} type="video/mp4" />
      </video>

      <Link to='/home'>
        <button className={styles.buttonToHome} onClick={()=>dispatch(getUsers())}>Ir Inicio</button>
      </Link>
    </div>
  )
}
