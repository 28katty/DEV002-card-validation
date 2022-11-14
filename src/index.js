import validator from './validator.js';
//variable donde guardamos la informacion del input, igual al index que es el document,
//luego traemos al elemento a traves de su ID
const inputNumber = document.getElementById("numero1");

//variable donde validamos el boton
const buttomValidar = document.getElementById("btnValidar");
//crear escucha activa al boton, agregamos evento si escuchas "click",
//aplicar funcion para el evento,guardar el valor en una variable igual al valor del input
buttomValidar.addEventListener("click",function(){
  const numberCard = inputNumber.value;

  const tarjMasc = validator.maskify(numberCard);
  validator.isValid(numberCard);
  console.log("resultado tarjmasc ", tarjMasc);
  console.log(numberCard);

  //dentro del objeto validator llamamos a uno de los metodos, en este caso isvalid con su parametro que queremos

})


//console.log(validator.maskify())
