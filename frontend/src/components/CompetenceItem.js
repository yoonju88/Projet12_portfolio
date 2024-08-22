import React from 'react'

function CompetenceItem ({image, alt, name, category}) {
    return (
        <div className='item_container'>
            <img src={image} alt={alt}/>
            <h3>{name}</h3>
        </div>
    )
}

export default CompetenceItem