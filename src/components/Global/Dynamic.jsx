import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import searchFilter from '../utils/context/searchFunction';
import Main from '../Modules/main/Main';
import Dogs from '../Modules/Pet/Dogs/Dogs';
import Cats from '../Modules/Pet/Cats/Cats';
import Birds from '../Modules/Pet/Birds/Birds';
import Exotic from '../Modules/Pet/Exotic/Exotic';
import Blogs from '../Modules/Blogs/Blogs'
import About from '../Modules/About/About'
import PetInfo from '../Modules/Pet/PetInfo/PetInfo';

const Dynamic = () => {

  const [data, setdata] = useState("")
  function searchPara(searchData) {
    setdata(searchData)
  }

  return (
    <div className='mx-auto'>
      <searchFilter.Provider value={{ searchPara, data }}>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/Dogs' element={<Dogs />} />
          <Route exact path='/Cats' element={<Cats />} />
          <Route exact path='/Birds' element={<Birds />} />
          <Route exact path='/Exotic' element={<Exotic />} />
          <Route exact path='/Blog' element={<Blogs />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/petinfo' element={<PetInfo />} />
        </Routes>
      </searchFilter.Provider>
    </div>
  )
}

export default Dynamic