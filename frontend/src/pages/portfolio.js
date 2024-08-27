import React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import LinkCard from '../components/LinkCard'
import {realisationData} from '../Data/realisationData'
import Project from '../components/Project'
import './portfolio.css'

function Portfolio() {
    return (
        <>
            <Menu />
            <main className='portfolio_page'>
                <section className="portfolio_links">
                <div className='portfolio_title' >    
                    <h2>RÉALISATIONS</h2>
                    <p>Pendant la période de formation, j’ai participé à divers projets, résolu de nombreux problèmes et appris à écrire un code efficace axé sur l’utilisateur. Découvrez mes projets réalisés.</p>
                </div>
                <div className='linkCards'>
                    {realisationData.map(card => (
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
                    { realisationData.map (project => (
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

export default Portfolio