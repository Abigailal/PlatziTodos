import React from 'react';
import { IoMdAdd } from 'react-icons/io';

function CreateTodoButton(props) {

  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button className="CreateTodoButton fw-bold
    d-flex justify-content-center align-items-center"
    onClick={onClickButton}//Evento (Todo lo que empiece por ON ayudara a recibir el evento)
    >
      <IoMdAdd/>
    </button>
  );
}

export { CreateTodoButton };


/*
MANEJO DE EVENTOS

Cualquier evento recibe sí o sí una función, es decir,
debemos mandarle sí o sí una función para que React internamente
pueda ejecutarla en cuanto dicho eventop ocurre.

El asunto, es que tiene que ser sí o sí una función que React
pueda ejecutar, por eso no podemos mandar directamente un console.log()
ni un alert(), porque aunque ambos son funciones, nosotros estamos
ejecutándolas directamente al ponerles los paréntesis, pero nosotros
no debemos ejecutarlas, nosotros solo debemos mandarlas y ya React
se encargará de ejecutarlas.

Es por eso que mandamos arrow functions, porque estas son funciones
que React puede ejecutar cuando quiera, y pues dentro de esas arrow
functions está el código que queremos ejecutar cuando el evento suceda.

Nota como mandamos la función sin paréntesis, esto es porque en
el momento en el que le ponemos paréntesis seríamos nosotros quienes
ejecutan la función, pero recuerda que nosotros no debemos ejecutar
la función, sino React es quien tiene que ejecutarla. ¿Por qué?
Pues porque si la ejecutamos nosotros, esta se va a ejecutar
justo en el momento que esa línea de código sea leída por nuestra
computadora, y nosotros no queremos eso, nosotros queremos que
nuestra función se ejecute únicamente cuando el evento suceda,
por eso la mandamos sin paréntesis, para que React pueda
ejecutarla cuando dicho evento ocurra 😄
*/