import axios from 'https://cdn.skypack.dev/axios';
import Book from './book.js';

export default class GoogleService {

    search(term) {
        return new Promise((resolve, reject) => {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}`)
            .then(response => {
                let booksResult = []
                response.data.items.forEach(book => {
                    book = book.volumeInfo;
                    let bookObj = new Book();
                    bookObj.title = book.title;
                    bookObj.authors = book.authors;
                    bookObj.publishedDate = book.publishedDate;
                    if (book.imageLinks) {
                        bookObj.thumbnail = book.imageLinks.smallThumbnail;
                    }
                    booksResult.push(bookObj);
                });
                resolve(booksResult);
            }, err => {
                reject(err);
            });
        });
    }
}