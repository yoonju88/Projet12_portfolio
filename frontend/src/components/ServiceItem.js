import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function ServiceItem ({icon, iconAlt, title, description}) {
    const [isOpened, setIsOpened] = useState(false)
    const [itemHeight, setItemHeight] = useState('0')
    const [opacity, setOpacity] =useState('0')
    const handleCollapse =(e) => {
        setIsOpened(!isOpened)
    }
    useEffect(() => {
        if (isOpened) {
            setItemHeight ('285');
            setOpacity('1')
        } else if (!isOpened) {
            setItemHeight('0')
            setOpacity('0')
        }
    }, [isOpened])


    return (
        <li className="serviceItem" >
            <div 
                onClick={handleCollapse} 
                className="serviceItem_container serviceItem-position"
                style={{height: `${itemHeight}px`, transition: "height 0.3s ease-in-out"}}   
            >
                <div className ="service-title">
                    <div className="service_icon">
                        <FontAwesomeIcon icon={icon}/>
                    </div> 
                    <h4 >{title}</h4>
                </div>
                {isOpened && (
                    <div 
                        className='description_box'
                        style={{opacity: `${opacity}`, transition: "opacity 0.5s ease"}}
                    >
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