import React from 'react';
import "../App.css";

const UserCard = props => {
    console.log("This is props: ", props)
    return (
        <div className="card">
        <img className="prof-pic" 
        src={props.avatar} 
        alt="profile picture"/>
        <p>Secret Identity:<br />{props.login}</p>
        </div>
    )
}

export default UserCard;

// <p>Cover: {props.name}</p>
// <p>Location: {props.location}</p>
// <p>Mission Statement: {props.bio}</p>