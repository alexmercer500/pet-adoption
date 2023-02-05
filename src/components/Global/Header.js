import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
// import User from '../Modules/main/user/User'
import iconSet from './icon'
import SignIn from '../Modules/AuthPage/SignIn'
import SignUp from '../Modules/AuthPage/SignUp'
import './header.css'

const Header = () => {
    const [logUser, setLogUser] = useState(false)
    const [logType, setLogType] = useState('')
    const subMenuRef = useRef()
    const mainMenuRef = useRef()

    const signInPopUp = ()=> {
        setLogUser(true)
        setLogType('sign-in')
        console.log('working')
    }
    const signUpPopUp = ()=> {
        setLogUser(true)
        setLogType('sign-up')
    }
    const subMenuToggle = () => { subMenuRef.current.classList.toggle('toggle') }
    const menuToggle = () => {
        mainMenuRef.current.classList.toggle('active')
        subMenuRef.current.classList.remove('toggle')
    }
    const menuCLose = () => { mainMenuRef.current.classList.remove('active') }
    return (
        <>
            <header className='header-component flex justify-between z-10 px-4 py-4'>
                <Link to='/'> <div className='logo sm:text-center flex items-center text-xl'>
                    <img className='w-10 mr-2' src={iconSet.logo} alt='logo of page' />
                    <span className='mr-1'> Pet </span> Store</div>
                </Link>
                <nav className='nav-bar bg-white z-30' ref={mainMenuRef}>
                    <ul className='nav-list text-3xl sm:text-2xl my-20 ' >
                        <Link to='/'> <li onClick={menuCLose}>Home</li></Link>
                        <li className='submenu-list'><span onClick={subMenuToggle}> Your Pet</span>
                            <ul className='sub-menu px-4 py-2 text-2xl bg-slate-500 sm:py-0 sm:px-0' ref={subMenuRef}>
                                <Link to='Dogs'>
                                    <li onClick={menuCLose}> <img src={iconSet.dogPic} alt='animal log' /> Dogs</li>
                                </Link>
                                <Link to='Cats'>
                                    <li onClick={menuCLose}> <img src={iconSet.catPic} alt='animal log' /> Cats</li>
                                </Link>
                                <Link to='Birds'>
                                    <li onClick={menuCLose}> <img src={iconSet.birdPic} alt='animal log' /> Birds</li>
                                </Link>
                                <Link to='Exotic'>
                                    <li onClick={menuCLose}> <img src={iconSet.exoticPic} alt='animal log' /> Exotic Animal</li>
                                </Link>
                            </ul>
                        </li>
                        <Link to='Blog'>
                            <li onClick={menuCLose}>Blog</li>
                        </Link>
                        <Link to='About'>
                            <li onClick={menuCLose}>About Me</li>
                        </Link>
                    </ul>
                    <div className='user-login text-center sm:text-right '>
                        <button className='mx-2' onClick={signInPopUp}>Login</button>
                        <button className='mx-2' onClick={signUpPopUp}>Sign Up</button>
                    </div>
                    {/* <User/> */}
                </nav>
                <div className='nav-toggle z-30 md:hidden' onClick={menuToggle}>
                    <img className='w-10 h-full' src={iconSet.navMenu} alt='nav-toogle' />
                </div>
            </header>
            {logUser && logType === 'sign-in' ? <SignIn logMethod={{setLogUser, setLogType}} /> :
                logUser && logType === 'sign-up' ? <SignUp logMethod={{setLogUser, setLogType}}/> : null}
        </>
    )
}

export default Header