import React from "react";

function LinkCard ({image, alt, title}){
   return (
    <article className="linkCard_container">
        <div className="linkCard_img">            
            <img src={image} alt={alt}/>
            <span className="linkCard_overlay"></span>
        </div>
        <p className="linkCard_name">{title}</p> 
     </article>

   )
}

export default LinkCard