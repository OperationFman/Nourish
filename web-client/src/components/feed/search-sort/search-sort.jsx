import Search from './search';
import Sort from './sort/sort';
import './search-sort.css';

const SearchSort = () => {
    return (
        <div className="search-sort-container">
            <Search />
            <Sort />   
        </div>
    )
}

export default SearchSort;