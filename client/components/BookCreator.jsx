
import React, { useEffect, useState }  from 'react';


const BookCreator = () => {
    const [book, setBook] = useState('');
    const SendData = (object) => {
        console.log('THE OBJECT', object);
        // const newBody = JSON.stringify({thisString: 2});
        fetch('/addBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object),
        }
        )
            .then(res => console.log('RESULT', res))
            .catch(error => console.log(error));
    };
    const getData = (key) => {
        const url = 'https://www.googleapis.com/books/v1/volumes/'+key+'?key=AIzaSyDXhGcVM6su0efQc-Lu398M64Ud1JtNOQA'
        fetch(url, { method: 'GET' })
            .then((response) => response.json())
            .then(data => SendData({ authors: data.volumeInfo.authors[0], title: data.volumeInfo.title, thumbnail: data.volumeInfo.imageLinks.large }))
            .catch((err) => {
                console.log(err.message);
              });
    }
    const RemoveSpaces = (string) => {
        let newString = '';
        for (let i in string) {
            if (string[i] != ' ') {
                newString += string[i];
            }
            else {
                newString+= '+'
            }
        }
        return newString;
    }
    const OnChange = () => {
        const title = RemoveSpaces(book);
        const url = 'https://www.googleapis.com/books/v1/volumes?q=' + title + '&key=AIzaSyDXhGcVM6su0efQc-Lu398M64Ud1JtNOQA';
        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((Data) => getData(Data.items[0].id))
            .catch((err) => {
                console.log(err.message);
              });
    }
    const AddedText = (e) => {
        setBook(e.target.value);
    }

    return(
        <div id="SearchandButtons">
            <label>
                Book Title : <input onChange={AddedText} name='Title'/>
            </label>
            <button onClick={OnChange}> Add Book </button>
        </div>
    )
};

export default BookCreator;