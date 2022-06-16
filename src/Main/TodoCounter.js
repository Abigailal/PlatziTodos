import React from 'react';
import { TodoContext } from '../TodoContext';


function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <h2 className="TodoCounter fs-6">Complete {completedTodos} of {totalTodos}</h2>
  );
}

export { TodoCounter };
