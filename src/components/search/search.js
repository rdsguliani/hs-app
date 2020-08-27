import React, {useState} from 'react';
import './search.css'
const Search = (props) => {
    const [searchInput, setSearchInput] = useState('');

    return (
        <form  onSubmit={(event) => props.searchHandler(event, searchInput)}>
             <input type="text" placeholder="Search Items by Name" 
                    value={searchInput} 
                    onChange={e => setSearchInput(e.target.value)}
                    className="searchForm">
             </input>
             <input type="submit" value="search" ></input>
        </form>
       
    )

}


export default Search;