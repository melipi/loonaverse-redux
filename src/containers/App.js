import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { members } from '../members';
import { setSearchField } from '../actions';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const { searchField } = useSelector((state) => state);
    const [cardInfo] = useState(members);

    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value))       
    }

    const filteredMembers = members.filter(member => 
        member.name.toLowerCase().includes(searchField.toLowerCase()))

    return !cardInfo.length ?
        <div className='vh-100 dt w-100'>
            <div className='dtc v-mid tc white ph3 ph4-l'>
            <h1 className='f6 f2-m f-subheadline-l fw6 tc'>Loading...</h1>
            </div>
        </div>
        :
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
