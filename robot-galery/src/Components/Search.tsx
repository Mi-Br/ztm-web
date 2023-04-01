import './Search.css'


const Search = ({onSearchChange}:any)=>{
    return(
        <>
        <div className="search-bar">
            <label htmlFor="search" className='search-label'>
                <input type="text" id="search" onChange={onSearchChange}></input>
            </label>
        </div>
        </>
    )
}
export default Search