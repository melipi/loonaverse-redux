import React from 'react';
import Card from './Card';

const CardList = ( { cardInfo }) => {
    return (
        <div className='flex'>
            <div className='flex flex-wrap justify-around'>
            {
                cardInfo.map( (_user, i) => {
                    return (
                        <Card 
                        key={cardInfo[i].id} 
                        img={cardInfo[i].img} 
                        name={cardInfo[i].name} 
                        color={cardInfo[i].color} 
                        animal={cardInfo[i].animal}
                        />
                    );
                })
            }
            </div>
        </div>
    );
}

export default CardList;