import React, {useState} from 'react'

function ServiceItem ({icon, iconAlt, title, description}) {
    const [isOpened, setIsOpened] = useState(false)
    const handleCollapse =(e) => {
        setIsOpened(!isOpened)
    }
    return (
        <li onClick={handleCollapse} className={`${isOpened? 'opened' : ''} "serviceItem"`} >
                <div className="serviceIcon_container">
                    <img src={icon} alt={iconAlt} />
                </div>
                <div className="service_txt_container">
                    <h4>{title}</h4>
                    {isOpened && (
                        <p>{description}</p>
                    )}
                </div>
        </li>
    )
}

export default ServiceItem