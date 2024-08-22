import React from 'react'
import "./home.css"
import Sectionitem from '../components/SectionItem'
import profileImage from '../images/pages/homepage/yoonju.webp'
import realisationImage from '../images/pages/homepage/realisation_img.webp'
import overlayImage from '../images/pages/homepage/bg_code.webp'

function HomePage() {
    return (
        <div>
            <section id="presentation" className='presentation'>
                <Sectionitem 
                    imageSrc={profileImage}
                    imageAlt="Yoonju profile"
                    title="JE SUIS..."
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

                <p>ici applique les listes des icons</p>
            </section>
            <section id="contact">
                <h2>CONTACT</h2>
                <p>Contenu de la section CONTACT...</p>
            </section>
        </div>
    )
}

export default HomePage