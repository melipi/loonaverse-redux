import React, { useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { members } from '../members';
import './App.css';

function App() {
    const [cardInfo] = useState(members);
    const [searchField, setSearchField] = useState(''); 

    const onSearchChange = (event) => {
        setSearchField(event.target.value)       
    }

    const filteredMembers = members.filter(member => 
        member.name.toLowerCase().includes(searchField.toLowerCase()))

    return !cardInfo.length ?
        <h1>Loading...</h1> :
            (
                <div className='tc pa4'>
                    <img 
                        className='logo pb3' 
                        src='./img/loona-logo.png' 
                        alt='loona logo' />
                    <SearchBox searchChange={onSearchChange} />
                    <CardList cardInfo={filteredMembers} />
                </div>
            );
}

export default App;