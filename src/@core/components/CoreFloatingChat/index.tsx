"use client";

import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Box, Card, Fade, Paper, Tooltip } from "@mui/material";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { ChatProvider } from "./context/useChatContext";

const FabContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(8),
  right: theme.spacing(6),
  zIndex: 1300,
}));

const ChatCard = styled(Card)(({ theme }) => ({
  position: "absolute",
  bottom: 70,
  right: 0,
  width: 300,
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[5],
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
}));

const FloatingButton = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  cursor: "pointer",
  backgroundColor: "#dfdfdf",
  borderRadius: "50%",

  boxSizing: "border-box",

  "&:active": {
    background: "#cacaca", // remove a borda no clique (opcional)
  },

  "$:hover": {
    transform: "scale(1.05)",
  },
}));

// backgroundImage:
//   "linear-gradient(transparent, transparent), linear-gradient(135deg, #38BDF8, #7C3AED)",
//   backgroundOrigin: "border-box",
//   backgroundClip: "padding-box, border-box",

export const CoreFloatingChat = ({ avatarImage }: { avatarImage: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <ChatProvider>
      <FabContainer>
        <Fade in={open}>
          <Box>
            {open && (
              <ChatCard>
                <ChatMessages />
                <ChatInput />
              </ChatCard>
            )}
          </Box>
        </Fade>
        <Tooltip title="Assistente Virtual" placement="top">
          <FloatingButton src={avatarImage} onClick={() => setOpen(!open)} />
        </Tooltip>
        {/* <Image src={avatarImage} alt="avatar-image" width={60} height={60} /> */}
      </FabContainer>
    </ChatProvider>
  );
};
