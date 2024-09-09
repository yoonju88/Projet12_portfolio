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
            setItemHeight ('max-content');
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
                className="serviceItem_container"
                style={{maxHeight: `${itemHeight}`, transition: "max-height 300ms ease-in-out"}}   
            >
                <div className ="service-title_container">
                    <div>
                        <FontAwesomeIcon icon={icon}/>
                    </div> 
                    <h4 >{title}</h4>
                </div>
                {isOpened && (
                    <div 
                        className='description_box'
                        style={{opacity: `${opacity}`, transition: "opacity 700ms ease-in-out"}}
                    >
                    {description.map(text=>(
                        <p key={text.id}>&bull; {text.text}</p>
                    ))}
                    </div>  
                )}                    
            </div>
            
        </li>
    )
}

export default ServiceItem