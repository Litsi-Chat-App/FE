import React from 'react';
import io from 'socket.io-client';

function ChatRoom(props) {
  const socket = io('http://localhost:4000', {
    query: {
      room: props.match.params.roomname,
      hasFoundCall: false,
    },
  });
  socket.on('joined', () => {
    console.log('Joined Room');
  });
  return (
    <div>
      <p>ChatRoom {props.match.params.roomname}</p>
    </div>
  );
}

export default ChatRoom;
