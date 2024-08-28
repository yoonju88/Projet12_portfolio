import YoonjuCV from '../images/pages/cv-yoonju.jpg'
import download from '../images/icons/download.svg'

function SectionItem({ imageSrc, imageAlt, title, description, buttonName, name, overlaySrc }) {
    return (
        <>
            <div className='presentation_container'>
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={YoonjuCV} download className='button'>
                    {buttonName}
                <img src= {download} alt="download icon"/>
                </a>       
            </div>
            <div className='presentation_img'>
                 <img src={imageSrc} alt={imageAlt} className='profile_img'  />
            </div>
          
        </>
    )
}

export default SectionItem
