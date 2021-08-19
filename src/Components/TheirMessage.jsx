import React from 'react';

const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (  
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                />
            )}
            {message?.attachments?.length > 0 // Greater than zero means there is an image.
                ?   (
                        <img 
                            src={message.attachments[0].file}
                            alt="message-attachment"
                            className="message-image"
                            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                        />
                ) : (
                    // MyMessage on right, TheirMessage on left.
                    <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }} >
                        {message.text}
                    </div>
                )
            }
        </div>
    );
}
 
export default TheirMessage;