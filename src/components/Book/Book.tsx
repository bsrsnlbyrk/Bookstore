import React from 'react';
import { withRouter } from 'react-router';

const Book = ({ book, history }: any) => {
    return(
        <div className="book">
            <a
                href="" 
                onClick={() => history.push("/detail/" + book.id)} 
            >
                <img 
                    src={book.image} 
                    alt={book.name} 
                    width="100px" 
                    height="150px" 
                />
            </a>
            <span className="info">
                <a 
                    href="" 
                    onClick={() => history.push("/detail/" + book.id)}
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