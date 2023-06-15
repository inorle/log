import React from 'react';
import TopContainer from './TopContainer.jsx'
import RedDisplay from '../components/RedDisplay.jsx'
import { useState } from 'react';


const MainContainer = () => {
    const [newBook, newBookSet] = useState([])
    return (
        <div> <TopContainer newBookSet = {newBookSet} /> 
            <RedDisplay newBook={newBook} />
        </div>
    )
}


export default MainContainer