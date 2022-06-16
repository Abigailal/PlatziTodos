import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const { searchValue, setSearchValue, mostrarComponente,loading } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      {mostrarComponente && <input
      className={`TodoSearch mt-3 px-3 ${mostrarComponente ? "show-element" : null}`}
      placeholder="Search task"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
      />}
    </>
  );
}

export { TodoSearch };


/**
 * MANEJO DE ESTADOS

useState tiene dos elementos:
El valor (quien seria value)
La funcion que cambia el valor (quien seria setValue)
En useState es siempre necesario definir un valor como parametro.
Puede ser un string, array, booleano o número
 *
 */
