import "./presentation.css"
import profileImage from '../images/pages/yoonju.webp'
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
                        <h2>JE SUIS...</h2>
                        <p>Avec plusieurs années d'expérience dans le design graphique, mon intérêt dans ce domaine m'a conduit à étudier l'intégration web en utilisant des programmations créatives et innovantes. Aujourd'hui, je vous présente mes réalisations en tant que développeuse web.</p>
                        <a href={YoonjuCV} download className='button btnv2'>
                            Télécharger mon CV
                            <img src= {download} alt="download icon"/>
                        </a>       
                    </div>
                    <div className='presentation_img'>
                        <img src= {profileImage} alt="My profile" className='profile_img'  />
                    </div>
                </section>
                <section id="competences">
                    <div className="competences_txt">
                        <h2>COMPÉTENCES</h2>
                        <p className="competence_description">J’ai acquis des compétences en développement front-end, ainsi qu’une maîtrise de Node.js pour la communication avec le serveur. Concernant les logiciel, j’ai de l’experience avec les outils Adobe.</p>
                    </div>
                    <CompetenceList />
                </section>
                <section className="services">
                    <h2>MES SERVICES</h2>
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