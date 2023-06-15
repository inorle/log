import React, { useEffect, useState } from 'react';

const ImageComponent = (props) => {
    return(
        <img src={props.image} className='BookImage'/> 
    )
}

export default ImageComponent;