import React, { useState} from "react";
import { useSelector } from 'react-redux';
import { Checkout } from "./Checkout";
import InternalProvider from "../../hooks/ContextProvider";
// MercadoPago
import { initMercadoPago } from "@mercadopago/sdk-react";
import axios from "axios"
const VITE_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
initMercadoPago(VITE_PUBLIC_KEY)

export const MercadoPago = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 
 
  let cart = useSelector(state => state.cart);
  
  const cartItems = cart?.map(el => {
    return {
      id: el.id,
      name: el.name,
      unit_price: el.price,
      quantity: el.quantity,
      userid: el.userid
    }
  })
  
  const seller_id = cartItems[0].userid;
  
  const handleClick = () => {
    setIsLoading(true);  
    axios.post('/payment', {
      items: cartItems,
      seller_id: seller_id,
    })
      .then(response => {
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
        localStorage.removeItem("cart")
      });
  };

  return (
    <div>
      <InternalProvider context={{ preferenceId, isLoading }}>
        <main>
          <Checkout onClick={handleClick} cart={cart} isLoading={isLoading} />
        </main>
      </InternalProvider>
    </div>
  )
}
