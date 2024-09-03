import PropTypes from "prop-types"
import closeIcon from '../images/icons/close.png'
import React/*, {useEffect}*/ from 'react'
//import attention from '../images/icons/attention.png'

function Modal ({message, image, alt, onClick, remarque}) {

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget){
            onClick()
        }
    }
    /*useEffect(() => {
        const timer = setTimeout (() => {
        onClick();
       }, 3000)
        return () => clearTimeout(timer)
    }, [onClick])*/

    return (
        <div className="modal_overlay" onClick={handleOverlayClick}>
            <div className='modal_container' onClick={e=> e.stopPropagation()}>
                <span className="modal_close_icon">
                    <img src={closeIcon} alt="close" onClick={onClick}/>
                </span>
                <div className="modal_content">
                    <span className="modal_icon" >
                        <img src={image} alt={alt}/>
                    </span>
                    <p>{message}</p>
                    {/* <div className="remark_msg">
                        <img src ={attention} alt="remarque icon"/>
                        <p>{remarque}</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

Modal.prototype ={
    onClick :PropTypes.func.isRequired,
    message :PropTypes.string,
}

export default Modal