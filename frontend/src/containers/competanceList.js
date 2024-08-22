import React, {useState} from 'react'
import { competenceData } from '../Data/competenceData'
import CompetenceItem from '../components/CompetenceItem'
import {filterButtons}  from '../Data/competenceData'

function CompetenceList() {
    const [filter, setFilter] = useState('All')
    const filteredItems = filter === 'All' ? competenceData : competenceData.filter(item => item.category === filter)
    return (
        <>
            <ul className="filter_buttons">
                {filterButtons.map(button => (
                <li 
                    key={button.id}
                    className={`button ${filter === button.name ? 'active' : ''}`}
                    onClick={()=> setFilter(button.name)} >
                {button.name}
                </li>
                ))}
            </ul>
            <div className='icons_container'>
                {filteredItems.map(item => (
                    <CompetenceItem
                        key={item.id}
                        image={item.image}
                        alt={item.alt}
                        name={item.name}
                        category={item.category}
                    />
                ))}
            </div>
        </>
    )
}

export default CompetenceList

