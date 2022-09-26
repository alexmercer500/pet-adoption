import { useState } from 'react'
import '../Dogs/dogs.css'
import './cats.css'
import allData from '../../../Global/Data'
import Searchbox from '../../main/searchbox/Searchbox'

const Cats = () => {

    const [catData] = useState(allData.cats)

    return (
        <div>
        <Searchbox/>   
        <div className='canine-section'>
            {catData.map(cat => {
                return <section className='canine-cards p-2 rounded-md' key={cat.id}>
                    <img src={cat.photo} alt={cat.name} />
                    <div className=''>
                        <h1>Name: {cat.name}</h1>
                        <h2>Age: {cat.age}</h2>
                        <h2>Gender: {cat.gender}</h2>
                        {/* <h2>Description: {cat.description}</h2> */}
                        <button>Get More Info</button>
                    </div>
                </section>
            })}
        </div>
        </div>
    )
}

export default Cats