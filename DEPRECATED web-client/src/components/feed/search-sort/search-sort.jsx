import Search from './search';
import SortIcon from './sort/sort-icon';
import './search-sort.css';

const SearchSort = () => {
    return (
        <div className="search-sort-container">
            <Search />
            <SortIcon />   
        </div>
    )
}

export default SearchSort;