import React from 'react'
import { RiDeleteBin2Fill } from "react-icons/ri";

const DeleteCheckeds = ({ handleDelete }) => {

    return (
        <RiDeleteBin2Fill onClick={handleDelete} title='Delete all todo checkeds' className='btn-nav btn-delete_marked' />
    )
}

export default DeleteCheckeds