import Search from './search';
import Sort from './sort';
import './search-sort.css';

const SearchSort = () => {
    return (
        <div className="temp-search-sort-container">
            <Search />
            <Sort />   
        </div>
    )
}

export default SearchSort;