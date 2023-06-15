import { useEffect, useState } from "react";
import React from "react";
import ImageComponent from "./ImageComponent.jsx";

const RedDisplay = ({newBook, newBookSet}) => {
    const [images, setImage] = useState([]);
    const [imagesComponents, setImagesComponents] = useState([]);
    console.log(images);
    useEffect(() => {
        fetch('/library')
        .then(result => result.json())
        .then(data => {
            const newArray = [];
            for (let i in data) {
                if (!newArray.includes(data[i]['thumbnail'])) {
                    newArray.push(<ImageComponent image={data[i]['thumbnail']} newBookSet= {newBookSet} />);
                }
            }
            setImage(newArray);
        })
        .catch(err => console.log(err));
    }, [newBook]); 
    return (
        <div>
            <div className="RedDisplay">
                {images}
            </div >
 
        </div>
    )
}
export default RedDisplay;