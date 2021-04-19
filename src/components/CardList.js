import React from 'react';
import Card from './Card';

const CardList = ( { members }) => {
    return (
        <div>
           {
               members.map( (_user, i) => {
                return (
                    <Card 
                      key={members[i].id} 
                      img={members[i].img} 
                      name={members[i].name} 
                      color={members[i].color} 
                      animal={members[i].animal}
                    />
                );
            })
           }
        </div>
    );
}

export default CardList;