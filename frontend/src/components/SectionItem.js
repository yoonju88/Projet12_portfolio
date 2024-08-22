import { Link } from 'react-router-dom'

function SectionItem({ imageSrc, imageAlt, title, description, buttonName, name, overlaySrc }) {
    return (
        <>
            <div className={`${name === 'presentation' ? 'presentation_content' : 'realisations_content'} section_content`}>
                <h2>{title}</h2>
                <p>{description}</p>
                <Link to={`${name === 'presentation' ? '#' : '/realisations'}`} className='button'>{buttonName}</Link>
            </div>
            { name === 'presentation' ? (
                <div className='presentation_img'>
                    <img src={imageSrc} alt={imageAlt} className='profile_img'  />
                </div>
            ) : (
                <div className= 'realisations_img'>
                    <img src={imageSrc} alt={imageAlt}  className='original'/>
                    <img src={overlaySrc} alt="overlay" className='overlay' />
                    
                </div>
            )
            }
        </>
    )
}

export default SectionItem
