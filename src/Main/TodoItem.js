import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { AiFillCheckCircle } from "react-icons/ai";

function TodoItem(props) {

  return (
    <li className="TodoItem d-flex justify-content-center align-items-center mt-4">
      <AiFillCheckCircle
        className={`Icon Icon-check
          d-flex justify-content-center align-items-center
          ${props.completed && 'Icon-check--active'}`} //Si props cambia de estado a completado, entonces se agrega una nueva class a afile
        onClick={props.onComplete}
      />

      <p className={`TodoItem-p my-3 ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>

      <BsTrash
        className="Icon-delete
          d-flex justify-content-center align-items-center"
        onClick={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };

//{props.text} Estamos llamando a la propiedad text