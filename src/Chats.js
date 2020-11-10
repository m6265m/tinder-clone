import React from 'react';
import ChatRow from "./ChatRow";

function Chats() {
    return (
        <div className="chats">
            <ChatRow
            name="Jeff Bezos"
            message="Hey! how are you?"
            timestamp="35 minutes ago"
            profilePicture="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"/>
            <ChatRow
                name="Elon Musk"
                message="Hey! how are you?"
                timestamp="35 minutes ago"
                profilePicture="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"/>
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