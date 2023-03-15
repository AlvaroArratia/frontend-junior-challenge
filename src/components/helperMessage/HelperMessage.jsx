import React from 'react'
import './style.scss'
/**
 * type --- info
 * type --- error
 * type --- success
 */
const HelperMessage = ({ text, typeColor = 'info', actionModal }) => {
    return (
        <div className={`helper-container ${typeColor}`}>
            <div className='helper-container__text'>
                <span>
                    {text}
                </span>
            </div>
            {
                actionModal && <>
                    <div className='helper-container__action-modal'>
                        <div className='action-modal_button'>
                            {actionModal}
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default HelperMessage