import React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import LinkCard from '../components/LinkCard'
import {worksData} from '../Data/worksData'
import Project from '../components/Project'
import './works.css'

function Works() {
    return (
        <>
            <Menu />
            <main className='works_page'>
                <section className="works_links">
                <div className='works_title' >    
                    <h1>RÉALISATIONS</h1>
                    <p>J’ai participé à divers projets, résolu de nombreux problèmes et appris à écrire un code efficace axé sur l’utilisateur. Découvrez mes projets réalisés.</p>
                </div>
                <div className='linkCards'>
                    {worksData.map(card => (
                        <LinkCard
                            key = {card.id}
                            image ={card.linkCover}
                            alt ={card.linkCoverAlt}
                            title={card.name}
                            linkTo={card.linkTo}
                        />
                    ))}
                </div>
                </section>
                <section className ="realisations">
                    { worksData.map (project => (
                        <Project
                        key={project.name}
                        title={project.name}
                        image={project.image}
                        alt={project.imageAlt}
                        description={project.description}
                        icons={project.icons}
                        href={project.codeLink}
                        className={project.array}
                        idName={project.linkTo}
                        />
                    ))}
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Works