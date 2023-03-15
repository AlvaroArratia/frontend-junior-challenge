import React from 'react'
import { BsEraserFill } from "react-icons/bs";

const DeleteAll = ({ handleDeleteAll }) => {
    return (
        <BsEraserFill onClick={handleDeleteAll} title='Delete all todos' className='btn-nav btn-delete_all' />
    )
}

export default DeleteAll