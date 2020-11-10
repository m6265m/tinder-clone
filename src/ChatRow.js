import React from 'react';
import { Avatar } from '@material-ui/core';
import './Chats.css'
import {Link } from "react-router-dom";


function ChatRow(props) {
    return (
        <Link to={`/chats/${props.name}`}>
        <div className='chatRow'>
            <Avatar className='chat__image' src={props.profilePicture} alt={props.name}/>
            <div className='chat__details'>
                <h2>{props.name}</h2>
                <p>{props.message}</p>
            </div>
            <p className='chat__timestamp'>{props.timestamp}</p>
        </div>
        </Link>
    );
}

export default ChatRow;