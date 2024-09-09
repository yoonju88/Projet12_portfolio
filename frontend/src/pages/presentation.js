import "./presentation.css"
import profileImage from '../images/pages/yoonju.webp'
import profileImage_mobile from '../images/pages/yoonju_mobile.webp'
import CompetenceList from '../containers/competanceList'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import YoonjuCV from '../images/pages/cv-yoonju.jpg'
import download from '../images/icons/download.png'
import ServiceItem from '../components/ServiceItem'
import {serviceData} from '../Data/serviceData'

function Presentation() {
    return (
        <>
            <Menu />
            <main className="presentation_page">
                <section id="presentation" className='presentation'>
                    <div className='presentation_container'>
                        <h1>JE SUIS...</h1>
                        <p>Avec plusieurs années d'expérience dans le design graphique, mon intérêt dans ce domaine m'a conduit à étudier l'intégration web en utilisant des programmations créatives et innovantes. Aujourd'hui, je vous présente mes réalisations en tant que développeuse web.</p>
                        <a href={YoonjuCV} download className='button btnv2'>
                            Télécharger mon CV
                            <img src= {download} alt="download icon"/>
                        </a>       
                    </div>
                    <div className='presentation_img'>
                        <img 
                            src= {profileImage} 
                            alt="My profile" 
                            srcSet={`${profileImage_mobile} 700w, ${profileImage} 1200w`} 
                            sizes="(max-width: 768px) 768px, 1200px" 
                        />
                    </div>
                </section>
                <section id="competences" className="competences">
                    <div className="competences_txt">
                        <h2>COMPÉTENCES</h2>
                        <p className="section_description">
                        J’ai acquis des compétences en développement front-end et en communication avec les serveurs au cours de ma formation. J’utilise divers outils de développement pour réaliser un travail professionnel et fluide. En utilisant les logiciels Adobe, j'optimise le design et les projets front-end.
                        </p>
                    </div>
                    <CompetenceList />
                </section>
                <section className="services">
                    <h2>MES SERVICES</h2>
                    <p className="section_description">
                        Je vous propose des services de développement web sur mesure et adaptés précisément à vos besoins spécifiques pour garantir des solutions efficaces.
                    </p>
                    <ul>
                    {serviceData.map(item => (
                         <ServiceItem
                            key={item.id}
                            icon={item.icon}
                            iconAlt={item.alt}
                            title={item.title}
                            description={item.description}
                         />
                    ))}
                    </ul>                     
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Presentation