import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { members } from '../members';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            members: members,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })       
    }

    render () {
        const { members, searchField } = this.state;
        const filteredMembers = members.filter(member => {
            return member.name.toLowerCase().includes(searchField.toLowerCase());
        }) 
        return !members.length ?
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <img className='logo' src='./img/loona-logo.png' alt='loona logo' />
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList members={filteredMembers} />
                    </Scroll>
                </div>
            );
    }
}

export default App;