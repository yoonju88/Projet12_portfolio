import PropTypes from "prop-types"
import closeIcon from '../images/icons/close.png'


function Modal ({message, image, alt, onClick}) {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget){
            onClick()
        }
    }
    
    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className='modal_container' onClick={e=> e.stopPropagation()}>
                <img src={closeIcon} alt="close icon" onClick={onClick}/>
                <p>{message}</p>
            </div>
        </div>
    )
}

Modal.prototype ={
    onClick :PropTypes.func.isRequired,
    message :PropTypes.string,
}


export default Modal