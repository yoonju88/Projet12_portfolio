import React from "react";
import {Link} from 'react-router-dom'

function LinkCard ({image, alt, title, linkTo}){
    const handleClick = () => {
        window.location.hash =linkTo;
    } 

   return (
    <Link to={`#{linkTo}`} onClick= {handleClick}>  
        <article className="linkCard_container">   
            <div className="linkCard_img">            
                <img src={image} alt={alt}/>
                <span className="linkCard_overlay"></span>
            </div>
            <p className="linkCard_name">{title}</p> 
        </article>
     </Link>
   )
}

export default LinkCard