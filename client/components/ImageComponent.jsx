import React, { useEffect, useState } from 'react';
import DeleteComponent from './DeleteComponent.jsx'

const ImageComponent = (props) => {
    return (
        <div>
        <DeleteComponent link={props.image} newBookSet= {props.newBookSet} className="DeleteButton" />
        <img src={props.image} className='BookImage' /> 

        </div>
    )
}

export default ImageComponent;