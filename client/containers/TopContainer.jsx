import React from 'react';
import BookCreator from '../components/BookCreator.jsx'

const TopContainer = ({newBookSet}) => {
    return (<div>
        <BookCreator newBookSet={newBookSet}/>
    </div>)
}

export default TopContainer;