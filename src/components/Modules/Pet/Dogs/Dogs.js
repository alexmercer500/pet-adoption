import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './dogs.css'
import allData from '../../../Global/Data'
import Searchbox from '../../main/searchbox/Searchbox'
import searchFilter from '../../../utils/context/searchFunction'
const Dogs = () => {

    const [dogData] = useState(allData.dogs)
    const { data } = useContext(searchFilter)

    const Navigate = useNavigate()
    return (
        <div>
            <Searchbox />
            <section className='canine-section grid md:grid-cols-2 px-4 lg:grid-cols-3 gap-4 mx-auto p-5'>
                {dogData.filter((dDog) =>
                    dDog.name.toLowerCase().includes(data)
                ).map(dog =>
                    <div className='canine-cards rounded-md p-2' key={dog.id}>
                        <div className='max-h-64 overflow-hidden rounded-t-md'>
                            <img src={dog.photo} alt={dog.name} /></div>
                        <div>
                            <p>Name: {dog.name}</p>
                            <p>Age: {dog.age}</p>
                            <p>Gender: {dog.gender}</p>
                        </div>
                        <div>
                            <button className='mt-5 w-fit'
                                onClick={() => Navigate('/petinfo',{state:dog})}
                            >Get More Info</button>
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}

export default Dogs