import React, {useState} from 'react'

function ServiceItem ({icon, iconAlt, title, description}) {
    const [isOpened, setIsOpened] = useState(false)
    const handleCollapse =(e) => {
        setIsOpened(!isOpened)
    }
    return (
        <li onClick={handleCollapse} className={`${isOpened? 'opened' : ''} serviceItem`} >
                <div className="serviceItem_title">
                    <div className="serviceIcon_container">
                        <img src={icon} alt={iconAlt} />
                    </div> 
                    <h4>{title}</h4>
                </div>           
                {isOpened && (
                    <div className={`description_box ${isOpened ? 'visible' : 'hidden'}`}>
                    <p>{description}</p>
                    </div>
                )}
        </li>
    )
}

export default ServiceItem