import React, { useEffect, useState } from 'react';
import DeleteComponent from './DeleteComponent.jsx'

const ImageComponent = (props) => {
    console.log('PROPS', props.deleteAll);
    const [deletedON, deletedONSet] = useState([]);
    useEffect(() => {
        console.log('THIS IS', props.deleteAll);
        if (props.deleteAll == 'true') {
            deletedONSet(<DeleteComponent link={props.image} newBookSet={props.newBookSet} className="DeleteButton" />)
        }
        else deletedONSet('')
    }, [props.deleteAll]);
    return (
        <div>
        {deletedON} 
        <img src={props.image} className='BookImage' /> 

        </div>
    )
}

export default ImageComponent;