import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function ServiceItem ({icon, iconAlt, title, description}) {
    const [isOpened, setIsOpened] = useState(false)
    const handleCollapse =(e) => {
        setIsOpened(!isOpened)
    }
    return (
        <li className="serviceItem" >
            <div onClick={handleCollapse} className="serviceItem_title">
                <div className="serviceIcon_container">
                    <FontAwesomeIcon icon={icon}/>
                </div> 
                <h4 >{title}</h4>
                { isOpened && (
                    <div className={`description_box ${isOpened ? 'visible' : 'hidden'}`}>
                        {description.map(text=>(
                            <p key={text.id}>{text.text}</p>
                        ))}
                    </div>
                )}                
            </div>
        </li>
    )
}

export default ServiceItem