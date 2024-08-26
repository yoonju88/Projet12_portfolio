import React from 'react'

function CompetenceItem ({image, alt, name, category}) {
    return (
        <div className='item_container'>
            <img src={image} alt={alt} className='item_image'/>
            <p>{name}</p>
        </div>
    )
}

export default CompetenceItem