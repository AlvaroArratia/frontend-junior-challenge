import React from 'react'
import './style.scss'
const SpinLoader = ({ loading }) => {
    return <>
        {
            loading && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        }
    </>
}

export default SpinLoader