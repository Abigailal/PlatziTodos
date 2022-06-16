import React from 'react';
import { FiEdit2 } from 'react-icons/fi';


function EditButtonProfile(props) {
    const onClickButton = () => {
        props.setOpenEdit(prevState => !prevState);
      };

    return (
        <button type='button'
        className="Perfil-button  
        d-flex justify-content-center align-items-center"
        onClick={onClickButton}>
        <FiEdit2 />
        </button>
    );
}

export { EditButtonProfile };
