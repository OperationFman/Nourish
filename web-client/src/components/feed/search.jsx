import React from "react";
import './feed.css';


const Search = () => {
    return (
        <form   action="" 
                method="get">
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search blog posts</span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="🔍"
                    name="s" 
                />
    </form>)
}

export default Search;