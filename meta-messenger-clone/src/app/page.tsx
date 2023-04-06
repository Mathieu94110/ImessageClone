import React from "react";
import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";

function HomePage() {
  return (
    <main>
      <MessageList />
      <ChatInput />
    </main>
  );
}

export default HomePage;
