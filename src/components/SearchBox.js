import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pb3'>
            <input 
                className='tc pa3 ba bg-lightest-blue'
                type='search' 
                placeholder='search members by name'
                onChange={searchChange} 
            />
        </div>
    );
}

export default SearchBox;