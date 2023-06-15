import { useEffect, useState } from "react";
import React from "react";
import ImageComponent from "./ImageComponent.jsx";

const RedDisplay = ({newBook, newBookSet, deleteAll}) => {
    const [images, setImage] = useState([]);
    // console.log(images);
    useEffect(() => {
        fetch('/library')
        .then(result => result.json())
        .then(data => {
            const newArray = [];
            for (let i in data) {
                if (!newArray.includes(data[i]['thumbnail'])) {
                    newArray.push(<ImageComponent image={data[i]['thumbnail']} newBookSet= {newBookSet} deleteAll={deleteAll} />);
                }
            }
            setImage(newArray);
        })
        .catch(err => console.log(err));
    }, [newBook]); 
    useEffect(() => {
        console.log('SHOULD BE DELETING ALL');
        fetch('/library')
        .then(result => result.json())
        .then(data => {
            const newArray = [];
            for (let i in data) {
                if (!newArray.includes(data[i]['thumbnail'])) {
                    newArray.push(<ImageComponent image={data[i]['thumbnail']} newBookSet= {newBookSet} deleteAll={deleteAll} />);
                }
            }
            setImage(newArray);
        })
        .catch(err => console.log(err));
    }, [deleteAll]);
    return (
        <div>
            <div className="RedDisplay">
                {images}
            </div >
 
        </div>
    )
}
export default RedDisplay;