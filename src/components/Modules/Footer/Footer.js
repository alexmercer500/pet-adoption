import './footer.css'
import iconSet from '../../Global/icon'
const Footer = () => {

    return (
        <div className='footer-section '>
            <section className='text-center lg:flex'>
                <div className='down-logo'>
                    <h1 className='logo sm:text-center w-fit m-auto lg:w-full flex items-center text-xl file'>
                        <img className='w-10 mr-2' src={iconSet.logo} alt='logo of page' />
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
                    <img src={iconSet.facebook} alt='Facebook' />
                    <img src={iconSet.instagram} alt='instagram' />
                    <img src={iconSet.reddit} alt='reddit' />
                    <img src={iconSet.pintrest} alt='pinterest' />
                    <img src={iconSet.youtube} alt='youtube' />
                </div>
                {/* <div className='hidden'>
                    <a className='top-link w-10 sm:w-16 cursor-pointer fixed bottom-10  right-1 z-20' href='#'><img src={upArrow} alt='go to top of page' />
                        <span className='text-sm invisible ease-linear '>Go to Top</span></a>
                </div> */}
            </section>
        </div>
    )
}

export default Footer