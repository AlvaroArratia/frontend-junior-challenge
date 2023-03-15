import React from 'react'

const RefreshButton = ({ onClick, value = 'Refresh' }) => {
    return (
        <input
            type={'button'}
            value={value}
            className='btn'
            onClick={() => onClick()} >
        </input>
    )
}

export default RefreshButton