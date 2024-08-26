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
                <section className="portfolio_title">
                <h2>RÉALISATIONS</h2>
                <div className='linkCards'>
                    {realisationData.map(card => (
                        <LinkCard
                            key = {card.id}
                            image ={card.linkCover}
                            alt ={card.linkCoverAlt}
                            title={card.name}
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
                        />
                    ))}
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Portfolio