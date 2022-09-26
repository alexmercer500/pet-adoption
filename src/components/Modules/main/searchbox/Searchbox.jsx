import React from 'react'
import './searchbox.css'
const Searchbox = () => {

  const red = 'dog be'
  return (
    <div>
      <div>
        <label htmlFor="search_dog"></label>
        <div className='filter-box border-2 flex mx-4'>
          <input type="text" placeholder='search your mate' id='search_dog' className='outline-none w-100' />
          <button className='ml-auto bg-white text-black outline-none hover:outline-none'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Searchbox