
import React from 'react';


const BookCreator = () => {
    // const [book, updateBook] = setState();
    const SendData = (object) => {
        console.log('THE OBJECT', object);
        const newBody = JSON.stringify({"thisString": 2});
        fetch('http://localhost:3000/addBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: newBody,
            mode: 'no-cors'
        }
        )
            .then(res => console.log('RESULT', res))
            .catch(error => console.log(error));
    }
    const getData = (key) => {
        const url = 'https://www.googleapis.com/books/v1/volumes/'+key+'?key=AIzaSyDXhGcVM6su0efQc-Lu398M64Ud1JtNOQA'
        fetch(url, { method: 'GET' })
            .then((response) => response.json())
            .then(data => SendData({ authors: data.volumeInfo.authors[0], title: data.volumeInfo.title, thumbnail: data.volumeInfo.imageLinks.large }))
            .catch((err) => {
                console.log(err.message);
              });
    }
    const OnChange = () => {
        const bookTitle = "normal+people"
        const url = 'https://www.googleapis.com/books/v1/volumes?q=' + bookTitle + '&key=AIzaSyDXhGcVM6su0efQc-Lu398M64Ud1JtNOQA';
        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((Data) => getData(Data.items[0].id))
            .catch((err) => {
                console.log(err.message);
              });
    }

    return(
        <div id="SearchandButtons">
            <label>
                Book Title : <input name='Title'/>
            </label>
            <label>
                Author : <input name='Author'/>
            </label>
            <button onClick={OnChange}> Add Book </button>
        </div>
    )
};

export default BookCreator;