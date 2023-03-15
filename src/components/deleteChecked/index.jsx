import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { store } from 'store/store'
import { useDeleteTodoMutation } from 'store/todosApi/todosApi'
import { getChekedTodos } from 'utils/serialization'
import DeleteAll from './deleteAll'
import DeleteCheckeds from './deleteCheckeds'
import './style.scss'

const FloatMenu = () => {
    const listTodo = useSelector(store => store.todoListStore).listTodos
    const [deleteTodoX, { isLoading, status, isError, error }] = useDeleteTodoMutation()
    const notifyAddSucces = (txt) => toast(txt, {
        icon: '👏',
    });

    const notifyError = (txt) => toast.error(txt);

    if (status === 'rejected')
        notifyError('Error. sorry this feature is BETA')


    const handleDeleteChecked = (all) => {
        const checkedsTodo = all ? getChekedTodos(listTodo) : listTodo
        if (checkedsTodo?.length > 0) {
            try {
                checkedsTodo.map(async (todoX) => {
                    await deleteTodoX(todoX.id).unwrap()
                })

            } catch (e) {
                notifyError('Error. sorry this feature is BETA')
            }
        }
    }

    const handleDeleteAll = () => {
        handleDeleteChecked(false)
    }



    return (
        <div className='float-container'>
            {(!isLoading && listTodo.length > 0) && <>
                <DeleteCheckeds
                    handleDelete={() => handleDeleteChecked()}
                />
                <DeleteAll handleDeleteAll={() => handleDeleteAll()} />
            </>}
        </div>
    )
}

export default FloatMenu