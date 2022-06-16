import React from "react";
import { BiError } from 'react-icons/bi';

function TodoError ({error}){
    return (
        <div className="pt-5 text-center">
            <BiError className="icon-error"/>
            <h2>We're sorry...</h2>
            <p>An error ocurred while loading your Tasks</p>
        </div>
    );
};

export {TodoError};