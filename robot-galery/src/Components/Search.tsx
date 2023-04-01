import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = ({onSearchChange}:any)=>{
    return(
        <>
        <div className="search-bar">
              
            <label htmlFor="search" className='search-label'>
                <div className='faContainer'>
                   <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </div>
                <input type="text" id="search" onChange={onSearchChange}></input>
            </label>
        </div>
        </>
    )
}
export default Search