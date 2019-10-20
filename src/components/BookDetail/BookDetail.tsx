import React from 'react';

import '../../styles/pages/detail.less';

const books = require('../../data/books.json');

const BookDetail = ({ match }: any) => {
    const selectedBook = books.find((book: any) => book.id.toString() === match.params.id);
    
    if(selectedBook){
        return(
            <div className="detail-wrapper">
                <img src={selectedBook.image} alt={selectedBook.name} width="250" height="400" style={{padding: "5%"}}/>
                <div style={{width: "50%", padding: '5%'}}>
                    <h3>{selectedBook.name}</h3>
                    <h4>{selectedBook.author}</h4>
                    <h5>{selectedBook.publisher}</h5>
                    <p>{selectedBook.summary}</p>
                    <p>Kategori: {selectedBook.category}</p>
                    <p>Sayfa sayısı: {selectedBook.pageNumber}</p>
                    <p>Yayım tarihi: {selectedBook.date}</p>
                </div>
            </div>
        );
    }
    else return null;
};
export default BookDetail;