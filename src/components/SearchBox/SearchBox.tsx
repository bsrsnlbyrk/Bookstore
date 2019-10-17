import React from 'react';

const SearchBox = ({ placeholder, onChange }: any) => {
    return(
        <input 
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            style={{ width: '80%', margin: '5% 10% 0', height: '30px', borderRadius: '5px', border: '2px solid #77F5B0'}}
        />
    );
};
export default SearchBox;