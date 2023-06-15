import { useEffect, useState } from "react";
import React from "react";
import ImageComponent from "./ImageComponent.jsx";

const RedDisplay = () => {
    const [images, setImage] = useState([])
    console.log(images);
    const FetchRead = () => {
        fetch('/library')
        .then(result => result.json())
            .then(data => {
                const newArray = [...images];
                for (let i in data) {
                    if (!newArray.includes(data[i]['thumbnail'])) {
                        newArray.push(data[i]['thumbnail']);
                    }
                }
                setImage(newArray);
            })
        .catch(err => console.log(err));
    }
    const array = [];
    for (let i in images) {
        array.push(<ImageComponent image={images[i]} />);
    }

    return (
        <div>
            books you have read:
            <button onClick={FetchRead}> Read </button>
            <button > To Read </button>
            <div className="RedDisplay">
                {array}
            </div >
 
        </div>
    )
}
export default RedDisplay;