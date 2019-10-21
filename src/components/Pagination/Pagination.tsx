import React from 'react';

const Pagination = ({length, number, setBooks}: any) => {
    let pageNumber;
    let buttons = [];
    
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