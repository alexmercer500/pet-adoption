import { useState } from 'react'
import './dogs.css'
import allData from '../../../Global/Data'
import Searchbox from '../../main/searchbox/Searchbox'

const Dogs = () => {

    const [dogData] = useState(allData.dogs)

    return (
        <div>
            <Searchbox />
            <section className='canine-section grid md:grid-cols-2 px-4 lg:grid-cols-3 gap-4 mx-auto p-5'>

                {dogData.map(dog => {
                    return <div className='canine-cards rounded-md p-2' key={dog.id}>
                        <div className='max-h-64 overflow-hidden rounded-t-md'>
                            <img src={dog.photo} alt={dog.name} /></div>
                        <div>
                            <p>Name: {dog.name}</p>
                            <p>Age: {dog.age}</p>
                            <p>Gender: {dog.gender}</p>
                        </div>
                        <div>
                            <button className='mt-5 w-fit'>Get More Info</button>
                        </div>
                    </div>
                })}
            </section>
        </div>
    )
}

export default Dogs