import React from 'react'
import gitHub from '../images/icons/gitHub.png'

function Project({ title, image, alt, description, icons, href, className, idName }) {
    return (
        <article className={className} id={idName}>
            <div className="project_img_container">
                <a href={href} className='project_img'>
                    <img src={image} alt={alt} loading='lazy'/>
                    <span className="overlay"></span>
                </a>
                <div className='project_icons'>
                    {icons.map((icon)=> (
                        <img key={icon.alt} src={icon.src} alt={icon.alt} loading='lazy'/>
                    ))}
                </div>
            </div>
            <div className="project_txt_container">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={href} className='button btnv2' target="_blank" rel="noreferrer">
                    Voir mon code 
                    <img src={gitHub} alt="icon code"/>
                </a>
            </div>
        </article>
    )
}
export default Project
