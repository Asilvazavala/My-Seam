export const Validation = (input) => {
  // Debe iniciar con mayúscula, puede llevar espacios
  const nameRegExp = /^[A-Z\s].*/
  // El valor debe estar entre 1 y 10000
  const numRegExp = /^([1-9]|[0-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]|10000)$/; 
  
  let err = {};

  // Validation Input CP
  if (!input.cp.length) {
    err.cp = 'Ingresa un CP válido';
  } else if (input.cp.length !== 5) {
      err.cp = 'El CP debe tener 5 dígitos';
    } 

  // Validation Input Ciudad
  if (!input.ciudad) {
    err.ciudad = 'Ingresa una ciudad válida';
    } else if (input.ciudad.length < 5) {
        err.ciudad = 'La ciudad debe tener al menos 5 carácteres';
      }

  // Validation Input calle
  if (!input.calle.length) {
    err.calle = 'Ingresa una calle válida';
  } else if (input.calle.length < 5) {
      err.calle = 'La calle debe tener al menos 5 carácteres';
    } 

  // Validation Input numero_exterior 
  if (!input.numero_exterior) {
      err.numero_exterior = 'Ingresa un número válido';
  } else if (!numRegExp.test(input.numero_exterior)) {
      err.numero_exterior = 'El número debe estar entre 1-10000';
    }
    
  // Validation Input telefono
  if (!input.telefono.length) {
    err.telefono = 'Ingresa un número válido';
  } else if (input.telefono.length !== 10) {
     err.telefono = 'El teléfono debe tener 10 dígitos';
    }
    
  return err;
};