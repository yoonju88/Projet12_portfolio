import "./presentation.css"
import Sectionitem from '../components/SectionItem'
import profileImage from '../images/pages/yoonju.webp'
import realisationImage from '../images/pages/realisation_img.webp'
import overlayImage from '../images/pages/bg_code.webp'
import CompetenceList from '../containers/competanceList'
import Menu from '../components/Menu'

function Presentation() {
    return (
        <main className="presentation_page">
            <Menu/>
        <div>
            <section id="presentation" className='presentation'>
                <Sectionitem 
                    imageSrc={profileImage}
                    imageAlt="Yoonju profile"
                    title="PRÉSENTATION"
                    description="Avec plusieurs années d'expérience dans le design graphique, mon intérêt dans ce domaine m'a conduit à étudier l'intégration web en utilisant des programmations créatives et innovantes. Aujourd'hui, je vous présente mes réalisations en tant que développeuse web."
                    buttonName="Voir mon CV"
                    name="presentation"
                />
            </section>
            <section id="realisations" className='realisations'>
                <Sectionitem
                    imageSrc={realisationImage}
                    imageAlt="Two notebook on the desk"
                    overlaySrc ={overlayImage}
                    title="RÉALISATIONS"
                    description="Pendant la période de formation, j’ai participé à divers projets, résolu de nombreux problèmes et appris à écrire un code efficace axé sur l’utilisateur. Découvrez mes projets réalisés."
                    buttonName="En savoir plus"
                    name="realisations"
                />
            </section>
            <section id="competences">
                <h2>COMPÉTENCES</h2>
                <p>J’ai acquis des compétences en développement front-end, ainsi qu’une maîtrise de Node.js pour la communication avec le serveur. Concernant les logiciel, j’ai de l’experience avec les outils Adobe.</p>
                 <CompetenceList />
            </section>
        </div>
        </main>
    )
}

export default Presentation