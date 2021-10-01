import React from 'react';

const Friend = (props) => {

    const { id, name, phone, website, address } = props.friend;

    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    };
    return (
        <div style = {friendStyle}>
            <h1>I am {name}</h1>
            <h4>Connect me {phone}</h4>
            <h5>Visit me {website}</h5>
            <p><small>I live in {address.city} city</small></p>
        </div>
    );
};

export default Friend;