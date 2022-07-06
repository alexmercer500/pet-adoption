import { useState } from 'react'
import './dogs.css'
import allData from '../../../Global/Data'

const Dogs = () => {

    const [dogData] = useState(allData.dogs)

    return (
        <div className='canine-section '>
            {dogData.map(dog => {
                return <section className='canine-cards p-2 rounded-md' key={dog.id}>
                    <img src={dog.photo} alt={dog.name} />
                    <div className=''>
                        <h1>Name: {dog.name}</h1>
                        <h2>Age: {dog.age}</h2>
                        <h2>Gender: {dog.gender}</h2>
                        {/* <h2>Description: {dog.description}</h2> */}
                        <button className=''>Get More Info</button>
                    </div>
                </section>
            })}
        </div>
    )
}

export default Dogs