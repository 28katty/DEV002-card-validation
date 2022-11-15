const validator = {
//el metodo isvalid, le damos una funcion con su propio parametro
  isValid: function (creditCardNumber) {
    //para dar vuelta a un string se tiene que convertir en array
    //se crea una variable que sea igual al parametro que transformaremos a un array gracias al split
    //la funcion split hace que tenga espacio entre caracteres
    let arrayNumber = creditCardNumber.split("");
    console.log("nuevo array"+arrayNumber);
    //darle vuelta al array con reverse
    let arrayInvert = arrayNumber.reverse();
    console.log("array invertido"+arrayInvert);
    //convertir de string a entero
    const entero = arrayInvert.map((String) =>{
      return parseInt(String)
    })
    console.log(entero);
    //buscar las posiciones pares y multiplicarlas
    let pares = entero.map((element, index) =>{
      if ((index +1) %2 ===0){
        return element *2
      }else{
        return element
      }
    });
    console.log(pares);
    //sumar lo multiplicado
    let sumaNumber = pares.map((element, index) =>{
      if ((index + 1) % 2 === 0) {
        let suma = 0;
        do {
          suma = suma + (element %10);
          element = Math.floor(element / 10);
        }while
        (element > 0)
        return suma
      }else{
        return element
      }
    });
    console.log(sumaNumber);
    //sumar pares e impares
    let sumaTotal = sumaNumber.reduce((a,b) => {
      return a + b;
    });
    console.log(sumaTotal);
    //validar
    if(sumaTotal % 10 ===0){
      return true
    }else{
      return false
    }

  },


//aqui se ocultaran los primeros números dejando solo los 4 ultimos digitos

/*function maskify(input){
  return input.replace(/.(?=.{4})/g, "#");
}*/

/*maskify: (input) => {
  console.log(input);
  return input.replace(/.(?=.{4})/g, "#");

}*/


  maskify: (creditCardNumber) => {
    console.log("maskify"+creditCardNumber);
    //cantidad de numeros tarjeta
    // variable.length ? cantidad de numeros
    // console.log(creditCardNumber.length)
    if (creditCardNumber.length < 20){
      //return creditCardNumber;

    const ultimosCaracteres = creditCardNumber.substr(-4);
    console.log(ultimosCaracteres);
    const primerosCaracteres = creditCardNumber.substr(0, 0);
    console.log(primerosCaracteres);
    const mascaraCaracteres = creditCardNumber.substr(0, creditCardNumber.length - 4).replace(/\d/g, "#");
    console.log(mascaraCaracteres);
    return `${primerosCaracteres}${mascaraCaracteres}${ultimosCaracteres}`;
    //console.log("mascara final" +`${primerosCaracteres}${mascaraCaracteres}${ultimosCaracteres}`);
    }
  }

};

export default validator;
