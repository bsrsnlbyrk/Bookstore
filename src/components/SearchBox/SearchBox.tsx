import React from 'react';

const SearchBox = ({ placeholder, onChange }: any) => {
    return(
        <input 
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            className="searchbox"
        />
    );
};
export default SearchBox;