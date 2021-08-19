import React from 'react';

const MyMessage = ({ message }) => {

    if (message?.attachments?.length > 0) { // Greater than zero means there is an image.
        return (
            // Can add profile image capability by putting this in src=
            <img 
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right' }}
            />
        );
    }
    return (  
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50'}}>
            {message.text}
        </div>
    );
}
 
export default MyMessage;