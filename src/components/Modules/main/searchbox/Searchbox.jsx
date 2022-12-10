import { useState, useContext } from 'react'
import searchFilter from '../../../utils/context/searchFunction'
import './searchbox.css'
const Searchbox = () => {

  const [searchValue, setSearchValue] = useState("")

  const {searchPara} = useContext(searchFilter)
  function searchParameter(e) {
    setSearchValue(e.target.value)
    searchPara(e.target.value)
  }

  return (
    <div>
      <div className='max-w-sm ml-auto'>
        <label htmlFor="search_dog" className='sr-only'>Search Your Companion</label>
        <div className='filter-box border-2 flex mx-4 rounded-md'>
          <input type="text"
            placeholder='search your mate'
            value={searchValue}
            onChange={searchParameter}
            id='search_dog'
            className='outline-none w-full rounded-md' />
          <button className='ml-auto outline-none hover:outline-none'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Searchbox