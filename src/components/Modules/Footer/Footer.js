import React from 'react'
import './footer.css'
import logo from '../../Icon assets/animal-footstep.svg'
import facebook from '../../Icon assets/Social/facebook.svg'
import instagram from '../../Icon assets/Social/instagram.svg'
import pintrest from '../../Icon assets/Social/pintrest.svg'
import reddit from '../../Icon assets/Social/reddit.svg'
import youtube from '../../Icon assets/Social/youtube.svg'

const Footer = () => {
    return (
        <div className='footer-section '>
            <section className='text-center lg:flex'>
                <div className='down-logo'>
                    <h1 className='logo sm:text-center w-fit m-auto lg:w-full flex items-center text-xl file'>
                        <img className='w-10 mr-2' src={logo} alt='logo-image of page' />
                        <span className='mr-1'> Pet </span> Store
                    </h1>
                    <p className='hidden lg:block sm:text-left mt-4 font-semibold '>&#169; 2022 All Right Reserved and Owned by Creater of site</p>
                </div>
                <div className='footer-link w-fit mx-auto flex text-left'>
                    <ul>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Privacy and Policy</li>
                        <li>Shelter Location</li>
                    </ul>
                    <ul>
                        <li>Guidelines</li>
                        <li>Sitemap</li>
                        <li>veterinary</li>
                        <li>Animal Food</li>
                    </ul>
                </div>
                <div className='social-media flex gap-4 my-4'>
                    <img src={facebook} alt='Facebook' />
                    <img src={instagram} alt='instagram' />
                    <img src={reddit} alt='reddit' />
                    <img src={pintrest} alt='pinterest' />
                    <img src={youtube} alt='youtube' />
                </div>

            </section>
        </div>
    )
}

export default Footer