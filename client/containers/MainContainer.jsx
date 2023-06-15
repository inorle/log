import React from 'react';
import TopContainer from './TopContainer.jsx'
import RedDisplay from '../components/RedDisplay.jsx'
import { useState } from 'react';


const MainContainer = () => {
    //DEFINE DELETE ALL SET
    const [newBook, newBookSet] = useState([])
    const [deleteAll, deleteAllSet] = useState('false')
    return (
        <div> <TopContainer deleteAll={deleteAll}  deleteAllSet={deleteAllSet} newBookSet = {newBookSet} /> 
            <RedDisplay deleteAll={deleteAll} newBook={newBook} newBookSet = {newBookSet} />
        </div>
    )
}


export default MainContainer