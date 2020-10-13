import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import Message from './Message'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />

            <div className="chat__messages">
                <Message />
            </div>

            <div className="chat__input">
                <AddCircleIcon fontsize="large" />
                <form>
                    <input type="text" name="" id="" placeholder="Type here..."/>
                    <button className="chat__inputButton"
                        type="submit">Send Message</button>
                </form>

                <div className="chat__inputIcons">
                    <CreditCardIcon fontSize="large"/>
                    <GifIcon fontSize="large"/>
                    <EmojiEmotionsIcon fontSize="large"/>
                </div>
            </div>
        </div>
    )
}

export default Chat
