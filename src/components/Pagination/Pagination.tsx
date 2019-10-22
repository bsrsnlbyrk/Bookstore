import React from 'react';

interface IArguments{
    length: number
    number: number
    setBooks: any
}

const Pagination = ({length, number, setBooks}: IArguments) => {
    let pageNumber;
    let buttons = [] as Array<Object>;
    
    if(length % number === 0){
        pageNumber = length/number;
    }
    else pageNumber = Math.ceil(length/number);
    
    
    for(let i=0; i<pageNumber; i++){
        buttons[i] = <button onClick={() => setBooks(i*number)} key={i} className="pagination-button">{i + 1}</button>;
    }

    return(
        <div className="pages">
            {buttons.map((button: any) => (button))}
        </div>
    )
}
export default Pagination;