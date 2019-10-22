import React from 'react';

interface IArguments{
    placeholder: string
    onChange: any
}

const SearchBox = ({ placeholder, onChange }: IArguments) => {
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