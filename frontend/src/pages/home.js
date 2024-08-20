import React from 'react'
import { Link} from 'react-router-dom'

function HomePage() {
    return (
        <div>
            <section id="presentation">
                <h2>JE SUIS...</h2>
                <Link to="/realisations"> voir mes réalisations</Link>
            </section>
            <section id="competences">
                <h2>COMPÉTENCES</h2>
                <p>Contenu de la section COMPÉTENCES...</p>
            </section>
            <section id="contact">
                <h2>CONTACT</h2>
                <p>Contenu de la section CONTACT...</p>
            </section>
        </div>
    )
}

export default HomePage