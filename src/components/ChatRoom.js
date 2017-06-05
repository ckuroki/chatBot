import React from 'react';
import MessageInput from './MessageInput';
import moment from 'moment';

/*
ChatRoom renderer component, display a list of messages
*/
const ChatRoom = (props) => {
  const {messages}= props;
  let list=[];

  if (messages && messages.length>0)  {
    list= messages.map( (el,ix)=>{
      let fromNow=moment(el.created_at).fromNow();
      return ( <li key={`message_${ix}`} className="flex items-center lh-copy pa3 ph0-l bb b--black-10"> 
        <div className="pl3 flex-auto">
          <span className="f6 db black-70">{el.user}</span>
          <span className="f4 b db black-70">{el.content}</span>
          <span className="f6 db black-70">{fromNow}</span>
        </div>
       </li>);
        });
  } else {
    list= (<li key={0} className="flex items-center lh-copy pa3 ph0-1 b-black-10">No messages yet.</li>); 
  }
    return (
        <div>
          <ul className="list pl0 mt0 measure center">
            {list}
          </ul>
          <MessageInput actions={props.actions} currentUser={props.currentUser}/>
        </div>
    );
}

export default ChatRoom;

