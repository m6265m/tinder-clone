import React, {useState} from 'react';
import {Avatar} from "@material-ui/core";
import './ChatScreen.css'

function ChatScreen(props) {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Elon Musk',
            image: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455',
            message: "What is up dude?"
        },
        {
            name: 'Elon Musk',
            image: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455',
            message: "hru?"
        },
        {
            message: 'im fine dude!'
        }

    ])

    const handleSend = (e) => {
        e.preventDefault()

        setMessages([...messages, {message: input}])
        setInput('')
    }
    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>You matched with Elon on 10/2/2020</p>
            {messages.map((messages) => (
                messages.name ? (
                    <div className='chatScreen__messages'>
                        <Avatar className='chatScreen__image' src={messages.image} alt={messages.name}/>
                        <p className='chatScreen__text'>{messages.message}</p>
                    </div>
                ) : (
                    <div className='chatScreen__messages'>
                        <p className='chatScreen__textUser'>{messages.message}</p>
                    </div>
                )

            ))}

            <form className='chatScreen__input'>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className='chatScreen__inputField'
                    placeholder='Type a message...'/>
                <button type='submit' className='chatScreen__button' onClick={handleSend}>SEND</button>
            </form>
        </div>
    );
}

export default ChatScreen;