import React from "react";
import {GetAvatar} from './GetAvatar';

function PerfilForm({setOpenEdit,avatar,setAvatar}) {
    const updateAvatar = (avatar) => {setAvatar(avatar);};
    const onCancel = () => {setOpenEdit(false);}


    const onSubmit = (event) => {
        event.preventDefault();//Metodo que ayuda a no recargar la pagina al enviar el submit
        //if(newNameValue.length <= 0)return; //Si no escribio nada
        //editData(newNameValue); //Manda el nuevo valor del task creado
        setOpenEdit(false); //Cierra el modal
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="Image-Profile pt-5 px-4">
                <GetAvatar avatar={avatar} updateAvatar={updateAvatar}/>
            </div>
            <div className="Data-Profile text-center pt-4">
            <input
                className="text-center"
                placeholder="New Name"
            />
                
                <p className='fs-6'>23 yrs - Puebla</p>
            </div>
        <div className="d-flex justify-content-center align-items-center pt-2 pb-5">
            <button
            className="btn btn-secondary"
            type="button"
            onClick={onCancel}>
                Cancel
            </button>
            <button
            className="ms-4 btn btn-success"
            type="submit">
                Accept
            </button>
        </div>
        </form>
        
    );
}

export { PerfilForm };