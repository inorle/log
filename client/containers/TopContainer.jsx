import React from 'react';
import BookCreator from '../components/BookCreator.jsx'

const TopContainer = ({deleteAllSet, deleteAll, newBookSet}) => {
    return (<div>
        <BookCreator deleteAllSet={deleteAllSet} deleteAll={deleteAll} newBookSet={newBookSet}/>
    </div>)
}

export default TopContainer;