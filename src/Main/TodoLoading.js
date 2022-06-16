import React from "react";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function TodoLoading (){
    return (
        <li className="TodoItem-loading d-flex justify-content-center align-items-center mt-4">
                <AiOutlineLoading3Quarters className="icon-loading"/>
                <h2 className="ms-3 fs-5">Loading...</h2>
        </li>
        
    );
};

export {TodoLoading};