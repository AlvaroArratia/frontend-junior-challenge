import React, { useState, useRef, useEffect } from 'react'
import { usePostTodoMutation } from 'store/todosApi/todosApi'
import toast, { Toaster } from 'react-hot-toast';
import './style.scss'

const AddTodoForm = () => {
    const refNewTodo = useRef(null)
    const [createTodo, { isLoading, isError, status }] = usePostTodoMutation()
    const [currentTodo, setCurrentTodo] = useState('');

    const notifyAddSucces = () => toast('Added successfully!', {
        icon: '👏',
    });

    const notifyError = () => toast.error('Error to add new to-do. Try again');

    useEffect(() => {

        if (status === 'rejected' || isError === true)
            notifyError()

        if (status === 'fulfilled' && isError === false) {
            refNewTodo.current.value = ''
            setCurrentTodo('')
            notifyAddSucces();
        }

    }, [status])

    const handleAddTodo = (e) => {
        e.preventDefault()
        try {

            const nwTodo = {
                id: crypto.randomUUID(),
                label: refNewTodo.current.value,
                checked: false
            }
            createTodo(nwTodo)
        } catch (e) { notifyError() }

    }

    const handleChange = (event) => {
        setCurrentTodo(event.target.value)
    }

    return (
        <div className='add-todo-container'>
            <form className='form-container' onSubmit={handleAddTodo}>
                <input
                    required type={'text'}
                    className='form-container__input'
                    placeholder='task: drink 1 water bottle...'
                    ref={refNewTodo}
                    onChange={handleChange}
                    value={currentTodo}
                />
                <input
                    type={'submit'}
                    placeholder='tarea'
                    value={'Add Todo'}
                    className='btn'
                    disabled={!!!currentTodo}
                />
            </form>
        </div >
    )
}

export default AddTodoForm
