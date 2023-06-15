import { useEffect, useState } from "react";
import React from "react";
import ImageComponent from "./ImageComponent.jsx";

const RedDisplay = ({newBook}) => {
    const [images, setImage] = useState([])
    console.log(images);
    useEffect(() => {
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
    }, [newBook]);      
    const array = [];
    for (let i in images) {
        array.push(<ImageComponent image={images[i]} />);
    }

    return (
        <div>
            <div className="RedDisplay">
                {array}
            </div >
 
        </div>
    )
}
export default RedDisplay;