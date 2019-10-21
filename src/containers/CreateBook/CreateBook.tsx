import React from 'react';

import Form from '../../components/Form/Form';

const books = require('../../data/books.json');

class CreateBook extends React.Component{
    handleFormSubmit = (e: any) => {
        e.preventDefault();
        const object = e.target.elements;
        const values = {} as any;
        for(const element in object){
            if(object[element].localName==='input'){
                values[object[element].name] = object[element].value;
            }
        } 
        books.push(values);
    }
    
    render(){

        const inputs = [
            {
                "name": "name",
                "type": "text",
                "placeholder": "Kitap Adı"
            },
            {
                "name": "author",
                "type": "text",
                "placeholder": "Yazar Adı"
            },
            {
                "name": "publisher",
                "type": "text",
                "placeholder": "Yayınevi"
            },
            {
                "name": "date",
                "type": "date",
                "placeholder": "Yayım Tarihi"
            },
            {
                "name": "pageNumber",
                "type": "number",
                "placeholder": "Sayfa Sayısı"
            },
            {
                "name": "category",
                "type": "text",
                "placeholder": "Kategori"
            },
            {
                "name": "summary",
                "type": "textarea",
                "placeholder": "Özet Bilgi"
            },
            {
                "name": "image",
                "type": "text",
                "placeholder": "Kapak Görseli Linki"
            },
        ]
        return(
            <div>
                <Form 
                    method="post" 
                    onSubmit={this.handleFormSubmit} 
                    inputs={inputs}
                    
                />
                
            </div>
        );
    }
}
export default CreateBook;