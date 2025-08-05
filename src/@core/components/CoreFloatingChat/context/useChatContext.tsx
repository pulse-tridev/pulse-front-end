"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Message {
  id: number;
  sender: "user" | "bot";
  content: string;
}

interface ChatContextType {
  messages: Message[];
  sendMessage: (text: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (text: string) => {
    const userMsg = { id: Date.now(), sender: "user", content: text };
    const botMsg = {
      id: Date.now() + 1,
      sender: "bot",
      content: `Echo: ${text}`,
    };

    setMessages((prev: any) => [...prev, userMsg]);

    setTimeout(() => {
      setMessages((prev: any) => [...prev, botMsg]);
    }, 800);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context)
    throw new Error("useChatContext must be used within ChatProvider");
  return context;
};
