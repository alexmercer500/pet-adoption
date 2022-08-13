import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Global/Header';
import Footer from './components/Modules/Footer/Footer';
import Main from './components/Modules/main/Main';
import Dogs from './components/Modules/Pet/Dogs/Dogs';
import Cats from './components/Modules/Pet/Cats/Cats';
import upArrow from './components/Icon assets/SVG/up-arrow.svg'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/Dogs' element={<Dogs />} />
        <Route exact path='/Cats' element={<Cats />} />
      </Routes>
      <Footer />
      <a className='top-link w-10 sm:w-16 cursor-pointer fixed bottom-10  right-1 z-20' href='#'><img  src={upArrow} alt='go to top of page' />
        <span className='text-sm invisible ease-linear '>Go to Top</span>
      </a>
    </div>
  );
}

export default App;
