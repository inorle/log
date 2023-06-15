import React, { useEffect, useState } from 'react';

const DeleteComponent = ({link, newBookSet}) => {
    const Delete = () => {
        //has to be post request to the backend and send the imagelink
        fetch('/deleteBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ thumbnail: link }),
        })
            .then((res) => newBookSet(res))
            .catch(error => console.log(error));
        }
    return (
        <button class= "DeleteButton" onClick={Delete}> x </button>
    )
}



export default DeleteComponent;