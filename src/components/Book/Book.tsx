import React from 'react';
import { withRouter } from 'react-router';

const Book = ({ book, history }: any) => {
    return(
        <div style={{width: '90%', border: '2px solid #77F5B0', margin:'20px auto 20px', borderRadius: '10px'}}>
            <a
                href="" 
                onClick={() => history.push("/detail/" + book.id)} 
            >
                <img 
                    src={book.image} 
                    alt={book.name} 
                    width="100px" 
                    height="150px" 
                    style={{display: 'inline-block', padding: '1%'}} 
                />
            </a>
            <span style={{display: 'inline-block', margin: '0 5% 0 ', position: 'absolute'}}>
                <a 
                    href="" 
                    onClick={() => history.push("/detail/" + book.id)}
                    style={{textDecoration: 'none', color: 'black'}}
                >
                    <h3>{book.name}</h3>
                </a>
                <h5>{book.author}</h5>
                <h5>{book.publisher}</h5>
            </span>
        </div>
    );
}
export default withRouter(Book);