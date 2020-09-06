import React, { useEffect , useState } from 'react';
import Pusher from "pusher-js";
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import axios from "./axios";

function App() {

const [messages, setMessages] = useState([]);

  useEffect(() => {
axios.get("/messages/sync").then((response) => {
  setMessages(response.data);
});
  },[])

useEffect(() =>{
  const pusher = new Pusher('fe8a59e6fc7ee04d48e9', {
    cluster: 'eu'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (newMessage) => {
   
    setMessages([...messages,newMessage])
  });

  return () => {
    channel.unbind_all();
    channel.unsubscribe();
  };

}, [messages]);

console.log(messages);
  return (
    <div className="App">
      <div className="App__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>

    </div>
  );
}

export default App;
