import React from 'react';

const Users = ({name}) => {
    return (
        <div className='user-card'>
           <h2>Name: {name}</h2> 
           <h3>Location: Pune</h3>
           <h4>Contact: jamdarharshal@gmail.com</h4>
        </div>
    );
}

export default Users;
