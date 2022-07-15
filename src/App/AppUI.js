import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../Main/TodoCounter';
import { TodoSearch } from '../Header/TodoSearch';
import { TodoList } from '../Main/TodoList';
import { TodoItem } from '../Main/TodoItem';
import { DateToday } from '../Main/DateToday';
import { CreateTodoButton } from '../Footer/CreateTodoButton';
import { TodoSearchButton } from '../Header/TodoSearchButton';
import { EditButtonProfile } from '../Header/EditButtonProfile';
import { Modal } from '../Footer/Modal';
import {TodoForm} from '../Footer/TodoForm';
import {Perfil} from '../Header/PerfilModal';
import {PerfilForm} from '../Header/PerfilForm';
import {Profile} from '../Header/Profile';
import {TodoError} from '../Main/TodoError';
import {TodoLoading} from '../Main/TodoLoading';
import {EmptyTodo} from '../Main/EmptyTodo';



function AppUI (){
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        openEdit,
        setOpenEdit,
        avatar,
        setAvatar,
    } = React.useContext(TodoContext);
    return(
        <React.Fragment>
            <header className="pb-5">
                <div className='container profile-container text-center'>
                    <div className='row'>
                        <div className='col d-flex justify-content-between align-items-center pt-2 px-3'>
                            <TodoSearchButton/>
                            <h3 className=' fs-5'>My Profile</h3>
                            {!!openEdit && (
                                <Perfil>
                                    <PerfilForm
                                        setOpenEdit={setOpenEdit}
                                        avatar = {avatar}
                                        setAvatar = {setAvatar}
                                    />
                                </Perfil>
                            )}
                            <EditButtonProfile
                                setOpenEdit={setOpenEdit}
                                openEdit={openEdit}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col d-flex justify-content-center align-items-center my-3'>
                            <div className='profile-img d-flex align-items-center justify-content-center px-1 mx-3'>
                                <Profile avatar={avatar} />
                            </div>
                            <div className='profile-text mx-3'>

                                <p className='fs-6'>23 yrs - Puebla</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col pb-4 px-5">
                            <TodoSearch/>
                        </div>
                    </div>
                </div>
            </header>
            <main>
            <div className='container tasks-container py-2 px-5'>
                    <div className='row align-items-center '>
                        <div className='col'>
                            <h2 className='fw-bold'>My Tasks</h2>
                            <DateToday/>
                        </div>
                        <div className='col-3'>
                            <TodoCounter/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col task-list'>
                            <TodoList>
                                {error && <TodoError/>}
                                {loading && <TodoLoading/>}
                                {(!loading && !searchedTodos.length) && <EmptyTodo/>}
                                {searchedTodos.map(todo => (
                                    <TodoItem
                                        key={todo.text}
                                        text={todo.text}
                                        completed={todo.completed}
                                        onComplete={() => completeTodo(todo.text)}
                                        onDelete={() => deleteTodo(todo.text)}
                                    />
                                ))}
                            </TodoList>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="pb-5">
                <div className="container text-center">
                    <div className='row'>
                        <div className='col'>
                            {!!openModal && (
                                <Modal>
                                    <TodoForm/>
                                </Modal>
                            )}
                            <CreateTodoButton
                                setOpenModal={setOpenModal}
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export {AppUI};
