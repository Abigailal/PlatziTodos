import React from "react";
import { RiTodoLine } from 'react-icons/ri';

function EmptyTodo (){
    return [
        <div className="pt-5 text-center">
            <RiTodoLine className="icon-empty"/>
            <h2>Oh, you've got nothing</h2>
            <p>Use button to add new task</p>
        </div>
        
    ];
};

export {EmptyTodo};