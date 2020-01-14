import React from 'react';

const UserCard = props => {
    console.log("This is props: ", props)
    return (
        <div>
        <p>{props.login}</p>
        </div>
    )
}

export default UserCard;