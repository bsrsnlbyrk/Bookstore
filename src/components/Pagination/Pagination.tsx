import React from 'react';

const Pagination = ({length, number, setBooks}: any) => {
    let pageNumber;
    let buttons = [];
    
    if(length % number === 0){
        pageNumber = length/number;
    }
    else pageNumber = Math.ceil(length/number);
    
    
    for(let i=0; i<pageNumber; i++){
        buttons[i] = <button onClick={() => setBooks(i*number)} key={i} style={{background: 'none', border: '2px solid #77F5B0', height: '30px', width: '30px', borderRadius: '5px', marginLeft: '.5%'}}>{i + 1}</button>;
    }

    return(
        <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '5%'}}>
            {buttons.map((button: any) => (button))}
        </div>
    )
}
export default Pagination;