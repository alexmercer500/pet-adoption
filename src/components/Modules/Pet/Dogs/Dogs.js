import { useState } from 'react'
import './dogs.css'
import allData from '../../../Global/Data'
import Searchbox from '../../main/searchbox/Searchbox'

const Dogs = () => {

    const [dogData] = useState(allData.dogs)

    return (
        <div>
            <Searchbox/>    
            <div className='canine-section '>

                {dogData.map(dog => {
                    return <section className='canine-cards rounded-md' key={dog.id}>
                        <div className='p-2'><img src={dog.photo} alt={dog.name} /></div>
                        <div className='p-2'>
                            <h1>Name: {dog.name}</h1>
                            <h2>Age: {dog.age}</h2>
                            <h2>Gender: {dog.gender}</h2>
                            <button className=''>Get More Info</button>
                        </div>
                    </section>
                })}
            </div>
        </div>
    )
}

export default Dogs