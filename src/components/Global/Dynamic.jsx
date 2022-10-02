import { Routes, Route } from 'react-router-dom'
import Main from '../Modules/main/Main';
import Dogs from '../Modules/Pet/Dogs/Dogs';
import Cats from '../Modules/Pet/Cats/Cats';
import Birds from '../Modules/Pet/Birds/Birds';
import Exotic from '../Modules/Pet/Exotic/Exotic';
import Blogs from '../Modules/Blogs/Blogs'
import About from '../Modules/About/About'

const Dynamic = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/Dogs' element={<Dogs />} />
        <Route exact path='/Cats' element={<Cats />} />
        <Route exact path='/Birds' element={<Birds />} />
        <Route exact path='/Exotic' element={<Exotic />} />
        <Route exact path='/Blog' element={<Blogs />} />
        <Route exact path='/About' element={<About />} />
      </Routes>
    </div>
  )
}

export default Dynamic