import React from 'react'
import {Link} from 'react-router-dom'

function Project({ title, image, alt, description, icons, href, className }) {

    return (
        <article className={className}>
            <div className="project_img_container">
                <div className='project_img'>
                    <img src={''} alt={alt}/>
                </div>
                <div className='project_icons'>
                    {icons.map((icon)=> (
                        <img key={icon.alt} src={icon.src} alt={icon.alt}/>
                    ))}
                </div>
            </div>
            <div className="project_txt_container">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={href} className='button'>Voir mon code</Link>
            </div>
        </article>
    )
}

export default Project