import React from "react";
import {useLocalStorage} from './useLocalStorage.js'


const TodoContext = React.createContext();

function TodoProvider (props) {
    const [mostrarComponente, setMostrarComponente] = React.useState(false);

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    //TodoSearch
    const [searchValue, setSearchValue] = React.useState('');
    //Modal
    const [openModal, setOpenModal] = React.useState(false);
    //Perfil
    const [openEdit, setOpenEdit] = React.useState(false);
    const [avatar, setAvatar] = React.useState('');
    //TodoCounter
    const completedTodos = todos.filter(todo => !!todo.completed).length; //Para el todoCounter, cuantos tenemos y cuandos nos faltan por completar
    //!! es para validar si es afirmativo, ! falso !! verdadero, filtramos los que estan completados.
    const totalTodos = todos.length;
    //Guardamos el total de todos los todos creados.

    //TodoSearch
    //Filtrado para buscar el todo que quiero
    let searchedTodos = [];//Valor donde se guardaran los datos buscados

    if (!searchValue.length >= 1) { //Si el valor que busco no es mayor o igual que uno (no hay coincidencias)
        searchedTodos = todos; //Muestra todos los todos existentes
    } else { //En cambio si encuentra una o mas coincidencias
        searchedTodos = todos.filter(todo => { //
            const todoText = todo.text.toLowerCase(); //Primero transformamos los todos existentes a minusculas
            const searchText = searchValue.toLowerCase(); //Transformamos el texto de la busqueda en minusculas
            return todoText.includes(searchText); //Guardamos en el arreglo los todos filtrados que coinciden
        });
    }

    //ModalADDTodo
    const addTodo = (text) => {
        if(!todos.find(todo => todo.text === text)) {
            const newTodos = [...todos];
            newTodos.push({
                completed: false,
                text,
            })
            saveTodos(newTodos);
        }
    }


    //TodoItem
    //Metodo para marcar TODOS como completados
    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        //Encontrar el index, la posición del todo y asi poder cambiar lo que queremos (va la condicion del todo que buscamos)
        //Creamos una nueva lista de estado de los todos creados por el usuario
        const newTodos = [...todos]; //Clonando y creando nueva lista de todos
        //Ya que tengamos la posicion que queremos le cambiamos el estado
        newTodos[todoIndex].completed = !todos[todoIndex].completed;
        //Actualizamos nuestro estado
        saveTodos(newTodos); //ReRender de todos
    };

//Metodo para eliminar TODOS
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);
        //Le decimos desde donde queremos eliminar que es en este caso mi posicion y hasta donde que es 1 porque solo sera ese todo
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
            mostrarComponente,
            setMostrarComponente,
            openEdit,
            setOpenEdit,
            setAvatar,
            avatar,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };

/*
provider:
    //Envolver a toda nuestra aplicación, es decir
    //Tendra por dentro a todos los compomentes dentro de los componentes que sean 
    //Donde llamemos al consumidor del contexto
*/