import React from 'react'
import { competenceData } from '../Data/competenceData'
import CompetenceItem from '../components/CompetenceItem'

function CompetenceList() {
    return (
        <div className="">
            <ul className="filterButton_container">
                <li className='button'>All</li>
                <li className='button'>Front-end</li>
                <li className='button'>Back-end</li>
                <li className='button'>Outils</li>
                <li className='button'>Graphique</li>
            </ul>
            <div className='icons_container'>
                {competenceData.map(item => (
                    <CompetenceItem
                        key={item.id}
                        image={item.image}
                        alt={item.alt}
                        name={item.name}
                        category={item.category}
                    />
                ))}
            </div>
        </div>
    )
}

export default CompetenceList

