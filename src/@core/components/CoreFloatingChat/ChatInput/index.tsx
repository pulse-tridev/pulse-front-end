"use client";

import { Box, IconButton, InputBase, Paper, styled } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useChatContext } from "../context/useChatContext";

const ChatInputContainer = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export const ChatInput = () => {
  const { sendMessage } = useChatContext();
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      sendMessage(text);
      setText("");
    }
  };

  return (
    <ChatInputContainer>
      <InputBase
        placeholder="Digite sua mensagem..."
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <IconButton color="primary" onClick={handleSend}>
        <SendIcon />
      </IconButton>
    </ChatInputContainer>
  );
};
