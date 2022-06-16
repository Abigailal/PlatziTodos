import React from 'react';

//LOGICA DE LA APLICACIÓN

//React Use Custom Hook
function useLocalStorage(itemName, initialValue) {
    //Hook
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    //Tenemos un estado por defecto, el inicial
    const [item, setItem] = React.useState(initialValue); //Cambio de estado para cuando los usuarios escriban sus Todos
    React.useEffect(()=> { //Va a contener un setTimeout que despues de 1s actualizara el dato de parsedItem
        setTimeout(() => {
            //RELACIONADO CON LOCALSTORAGE
            try{
                //LocalStorage
                const localStorageItem = localStorage.getItem('itemName');
                //Parciarlo y transformarlo con JSON.parce()
                let parsedItem;
                // Si no existe la variable es igual a undefined por ende a fals
                if (!localStorageItem){
                    localStorage.setItem('itemName', JSON.stringify([initialValue])); //No hay todos, asi que el usuario debe crear los suyos
                    parsedItem= initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem); //Si ya existe el usuario que modifico
                }
                setItem(parsedItem);//Actualiza al verdadero valor guardado en localStorage
                setLoading(false); //Todo funciono y ya no necesita volver a cargar
            } catch (error){
                setError(error);
            }
        },2000);
    }, [itemName,initialValue]);
    
    //Puente entre complete y delete que actualice y guarde el estado en localStorege
    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem('itemName', stringifiedItem);
            setItem(newItem);
        } catch(error){
            setError(error);
        }
    };
    
    return {item, saveItem, loading, error};
}

//Storage Perfil

export {useLocalStorage};