import React from 'react'
import './adoption.css'
import dogPic3 from '../../Dogs/Dogs/dog3.jpg'
import catPic3 from '../../Dogs/Cats/cat11.jpg'
import dogSVG from '../../Icon assets/dog.svg'
import catSVG from '../../Icon assets/catSVG.svg'

const Adoption = () => {
    return (
        <div className='adoption-guide my-20 text-center'>
            <section>
                <img className='pet-show' src={dogPic3} alt='the good boy' />
                <div className='about-pet'>
                    <img src={dogSVG} alt='the good boy SVG' />
                    <article>
                        <h1 className='text-2xl mt-20 '>Dog Adoption Articles</h1>
                        <p className='mt-4'>Learn about our Policy Regarding adoption for your Dog</p>
                    </article>
                </div>
                <h2 className='mt-4 text-xl font-semibold text-white py-4'>Learn More</h2>
            </section>
            <section>
                <img className='pet-show' src={catPic3} alt='Meow Muscles' />
                <div className='about-pet'>
                    <img src={catSVG} alt='Meow Muscles SVG' />
                    <article>
                        <h1 className='text-2xl mt-20'>Cat Adoption Articles</h1>
                        <p className='mt-4'>Learn about our Policy Regarding adoption for your Cat</p>
                    </article>
                </div>
                <h2 className='mt-4 text-xl font-semibold text-white py-4'>Learn More</h2>
            </section>
        </div>
    )
}

export default Adoption