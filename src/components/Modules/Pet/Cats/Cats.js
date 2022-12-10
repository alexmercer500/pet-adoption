import { useState, useContext } from 'react'
import '../Dogs/dogs.css'
import './cats.css'
import allData from '../../../Global/Data'
import Searchbox from '../../main/searchbox/Searchbox'
import searchFilter from '../../../utils/context/searchFunction'

const Cats = () => {

    const [catData] = useState(allData.cats)

    const { data } = useContext(searchFilter)

    return (
        <div>
            <Searchbox />
            <section className='canine-section grid md:grid-cols-2 px-4 lg:grid-cols-3 gap-4 mx-auto p-5'>
                {catData.filter((cData) =>
                    cData.name.toLowerCase().includes(data)
                    // console.log(cData.name.includes(data), cData.name);
                ).map(cat =>
                    <div className='canine-cards p-2 rounded-md relative' key={cat.id}>
                        <div className='max-h-64 overflow-hidden rounded-t-md'>
                            <img src={cat.photo} alt={cat.name} />
                        </div>
                        <div>
                            <h1>Name: {cat.name}</h1>
                            <h2>Age: {cat.age}</h2>
                            <h2>Gender: {cat.gender}</h2>
                        </div>
                        <div>
                            <button className='w-fit'>Get More Info</button>
                        </div>
                    </div>
                )
                }
                {/* {catData.map(cat => {
                    return <div className='canine-cards p-2 rounded-md relative' key={cat.id}>
                        <div className='max-h-64 overflow-hidden rounded-t-md'>
                            <img src={cat.photo} alt={cat.name} />
                        </div>
                        <div>
                            <h1>Name: {cat.name}</h1>
                            <h2>Age: {cat.age}</h2>
                            <h2>Gender: {cat.gender}</h2>
                        </div>
                        <div>
                            <button className='w-fit'>Get More Info</button>
                        </div>
                    </div>
                })} */}
            </section>
        </div>
    )
}

export default Cats