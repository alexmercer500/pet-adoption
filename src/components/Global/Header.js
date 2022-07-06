import { useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Icon assets/animal-footstep.svg'
import userPic from '../Icon assets/animal.svg'
import navMenu from '../Icon assets/cat (1).svg'
import dogPic from '../Icon assets/dog (1).svg'
import catPic from '../Icon assets/cat (2).svg'
import birdPic from '../Icon assets/bird.svg'
import ExoticPic from '../Icon assets/ferret.svg'
import './header.css'

const Header = () => {

    const subMenuRef = useRef()
    const mainMenuRef = useRef()

    const subMenuToggle = () => { subMenuRef.current.classList.toggle('toggle') }
    const menuToggle = () => { mainMenuRef.current.classList.toggle('active') }
    return (
        <div className='header-component flex justify-between z-10 px-4 py-4'>
            <Link to='/'> <h1 className='logo sm:text-center flex items-center text-xl'>
                <img className='w-10 mr-2' src={logo} alt='logo-image of page' />
                <span className='mr-1'> Pet </span> Store</h1></Link>
            <nav className='nav-bar bg-white' ref={mainMenuRef}>
                <ul className='nav-list text-3xl sm:text-2xl my-20 ' >
                    <Link to='/'> <li>Home</li></Link>
                    <li className='submenu-list'><span onClick={subMenuToggle}> Your Pet</span>
                        <ul className='sub-menu px-4 py-2 text-2xl bg-slate-500 sm:py-0 sm:px-0' ref={subMenuRef}>
                            <Link to='Dogs'>  <li> <img src={dogPic} alt='animal log' /> Dogs</li></Link>
                            <Link to='Cats'> <li> <img src={catPic} alt='animal log' /> Cats</li></Link>
                            <Link to='Birds'> <li> <img src={birdPic} alt='animal log' /> Birds</li></Link>
                            <Link to='Exotic'> <li> <img src={ExoticPic} alt='animal log' /> Exotic Animal</li></Link>
                        </ul>
                    </li>
                    <Link to='Blog'> <li>Blog</li></Link>
                    <Link to='About'> <li>About Me</li></Link>
                </ul>
                <div className='user-login text-center  sm:text-right '>
                    <button className='mx-2'>Login</button>
                    <button className='mx-2'>Sign Up</button>
                </div>
                <div className='user-info'>
                    <img className='w-20 hidden' src={userPic} alt='user-info' />
                </div>
            </nav>
            <div className='nav-toogle z-20' onClick={menuToggle}>
                <img className='w-10 h-full' src={navMenu} alt='nav-toogle' />
            </div>
        </div>
    )
}

export default Header