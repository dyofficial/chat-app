import React from 'react';
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return <ChatEngine height="100vh" projectID="4c0e7056-3510-4e64-8fa2-2bc0f54f8151" userName="dyofficial" userSecret="123123" renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} />;
};

export default App;
