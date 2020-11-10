import React from 'react';
import ChatRow from "./ChatRow";

function Chats() {
    return (
        <div className="chats">
            <ChatRow
            name="Sarah Sohail"
            message="Hey! how are you?"
            timestamp="35 minutes ago"
            profilePicture=""/>
            <ChatRow
                name="Hannah Montana"
                message="Hey! how are you?"
                timestamp="35 minutes ago"
                profilePicture=""/>
            <ChatRow
                name="Ali Sohail"
                message="Hey! how are you?"
                timestamp="35 minutes ago"
                profilePicture=""/>
            <ChatRow
                name="Saima"
                message="Hey! how are you?"
                timestamp="35 minutes ago"
                profilePicture=""/>
        </div>
    );
}

export default Chats;