import "./presentation.css"
//import Sectionitem from '../components/SectionItem'
import profileImage from '../images/pages/yoonju.webp'
import CompetenceList from '../containers/competanceList'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import YoonjuCV from '../images/pages/cv-yoonju.jpg'
import download from '../images/icons/download.png'

function Presentation() {
    return (
        <>
            <Menu />
            <main className="presentation_page">
                <div>
                    <section id="presentation" className='presentation'>
                    <div className='presentation_container'>
                        <h2>JE SUIS...</h2>
                        <p>Avec plusieurs années d'expérience dans le design graphique, mon intérêt dans ce domaine m'a conduit à étudier l'intégration web en utilisant des programmations créatives et innovantes. Aujourd'hui, je vous présente mes réalisations en tant que développeuse web.</p>
                        <a href={YoonjuCV} download className='button btnv2'>
                            Télécharger mon CV
                            <img src= {download} alt="download icon" className="icon"/>
                        </a>       
                    </div>
                    <div className='presentation_img'>
                        <img src= {profileImage} alt="My profile" className='profile_img'  />
                    </div>
                    </section>
                    {/* <section id="realisations" className='realisations'>
                    <Sectionitem
                        imageSrc={realisationImage}
                        imageAlt="Two notebook on the desk"
                        overlaySrc={overlayImage}
                        title="RÉALISATIONS"
                        description="Pendant la période de formation, j’ai participé à divers projets, résolu de nombreux problèmes et appris à écrire un code efficace axé sur l’utilisateur. Découvrez mes projets réalisés."
                        buttonName="En savoir plus"
                        name="realisations"
                    />
                </section> */}
                    <section id="competences">
                        <div className="competences_txt">
                            <h2>COMPÉTENCES</h2>
                            <p className="competence_description">J’ai acquis des compétences en développement front-end, ainsi qu’une maîtrise de Node.js pour la communication avec le serveur. Concernant les logiciel, j’ai de l’experience avec les outils Adobe.</p>
                        </div>
                        <CompetenceList />
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Presentation