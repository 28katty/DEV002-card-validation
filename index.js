import validator from './validator.js';
//variable donde guardamos la informacion del input, igual al index que es el document,
//luego traemos al elemento a traves de su ID
let inputNumber = document.getElementById("numero1");

//variable donde validamos el boton
let buttomValidar = document.getElementById("btnValidar");
//crear escucha activa al boton, agregamos evento si escuchas "click",
//aplicar funcion para el evento,guardar el valor en una variable igual al valor del input
buttomValidar.addEventListener("click",function(){
  let numberCard = inputNumber.value;


  let tarjMasc = validator.maskify(numberCard);
  validator.isValid(numberCard);
  inputNumber.value = tarjMasc;

  if (validator.isValid(numberCard)){
    return alert("LA TARJETA ES VALIDA");
  }else{
    return alert("ERROR - TARJETA INVALIDA");
  }
  //console.log("resultado tarjmasc ", tarjMasc);
  //console.log(numberCard);

  //dentro del objeto validator llamamos a uno de los metodos, en este caso isvalid con su parametro que queremos

});

//console.log(validator.maskify())
