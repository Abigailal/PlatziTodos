import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { TodoContext } from '../TodoContext';



function TodoSearchButton() {

  const {setMostrarComponente, mostrarComponente} = React.useContext(TodoContext);
    
    return [
      <button
        className="TodoSearchButton
                  d-flex justify-content-center align-items-center"
        type='button'
        onClick={() => setMostrarComponente(!mostrarComponente)}
      >
        <BsSearch />
      </button>,
    ];
}

export { TodoSearchButton };