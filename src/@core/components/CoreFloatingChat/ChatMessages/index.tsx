"use client";

import { Box, Typography, styled } from "@mui/material";
import { useChatContext } from "../context/useChatContext";

const MessageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  flex: 1,
  overflowY: "auto",
  maxHeight: 300,
  background: theme.palette.background.default,
}));

const MessageBubble = styled(Box)<{ sender: "user" | "bot" }>(
  ({ theme, sender }) => ({
    maxWidth: "80%",
    marginBottom: theme.spacing(1),
    alignSelf: sender === "user" ? "flex-end" : "flex-start",
    backgroundColor:
      sender === "user" ? theme.palette.primary.main : theme.palette.grey[300],
    color:
      sender === "user"
        ? theme.palette.primary.contrastText
        : theme.palette.text.primary,
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(2),
    transition: "all 0.3s ease",
  })
);

export const ChatMessages = () => {
  const { messages } = useChatContext();

  return (
    <MessageContainer display="flex" flexDirection="column">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} sender={msg.sender}>
          <Typography variant="body2">{msg.content}</Typography>
        </MessageBubble>
      ))}
    </MessageContainer>
  );
};
