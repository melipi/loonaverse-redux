import React from 'react';

const Card = ({ name, color, animal, img }) => {
    return (
        <div className='tc dib br3 pa3 ma2 dim bw2 shadow-5'>
            <img
                className='memberPhotos' 
                src={`${img}`} 
                alt={`kpop girl group loona member ${name}`}
            />
            <div>
                <h2>{name}</h2>
                <p>{color}</p>
                <p>{animal}</p>
            </div>
        </div>
    );
}

export default Card;