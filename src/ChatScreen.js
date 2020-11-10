import React, {useState} from 'react';

function ChatScreen(props) {
    const [messages,setMessages]=useState([
        {
            name:'Elon Musk',
            image:'',
            message:"What is up dude?"
        },
        {
            name:'Elon Musk',
            image:'',
            message:"hru?"
        },
        {
            message:'im fine dude!'
        }

    ])
    return (
        <div className='chatScreen'>
            <p>You matched with Elon on 10/2/2020</p>
            {messages.map((messages)=> (
                <div>
                    <p>{messages.message}</p>
                </div>
            ))}
        </div>
    );
}

export default ChatScreen;