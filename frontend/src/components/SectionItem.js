import YoonjuCV from '../images/pages/cv-yoonju.jpg'

function SectionItem({ imageSrc, imageAlt, title, description, buttonName, name, overlaySrc }) {
    return (
        <>
            <div className='presentation_container'>
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={YoonjuCV} download className='button'>{buttonName}</a>       
            </div>
            <div className='presentation_img'>
                 <img src={imageSrc} alt={imageAlt} className='profile_img'  />
            </div>
          
        </>
    )
}

export default SectionItem
