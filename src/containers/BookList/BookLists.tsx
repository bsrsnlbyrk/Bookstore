import React from 'react';

import Book from '../../components/Book/Book';
import SearchBox from '../../components/SearchBox/SearchBox';
import Pagination from '../../components/Pagination/Pagination';

const books = require('../../data/books.json');

class BookList extends React.Component {
    
    state = {
        searched: books.slice(0,5)
    }

    setBooks = (index: any) => {
        this.setState({ searched: books.slice(index, index + 5) });
    }
    
    handleSearch = (e: any) => {
        if(e.target.value!==''){
            const founds = books.filter((book: any) => (
                book.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                book.author.toLowerCase().includes(e.target.value.toLowerCase()) ||
                book.publisher.toLowerCase().includes(e.target.value.toLowerCase())
            ));
            this.setState({ searched: founds });
        }
        else this.setState({ searched: books })
    }
    
    render(){
        return(
            <div style={{minHeight: 'calc(100vh - 200px)'}}>
                <SearchBox 
                    placeholder="Kitap, yazar veya yayınevi adı..." 
                    onChange= {(val: any) => this.handleSearch(val)}
                />
                {this.state.searched.map((book: any) => (
                    <Book book = {book}  key={book.id}/>
                ))}
                <Pagination 
                    currentBooks={this.state.searched}
                    length={books.length} 
                    number={5} 
                    setBooks={(index: any) => this.setBooks(index)}
                />
            </div>
        );
    }
}
export default BookList;