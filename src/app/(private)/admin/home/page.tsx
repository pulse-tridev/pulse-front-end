"use client";
import CoreConfirmDialog from "@core/components/CoreDialog/CoreDialogSubmit";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

const HomePage = () => {
  console.log("re-render home page");

  const [count, setCount] = useState<number>(1);
  const [user, setUser] = useState({ name: "John", age: 20 });
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleChangeUser = () => {
    // Gera nova referência para disparar re-render apenas quando a idade muda
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };

  const toggleDialogState = () => {
    setDialogOpen((prev) => !prev);
  };

  const handleSubmit = () => {
    console.log("Dialog submitted");
    setDialogOpen(false);
  };

  return (
    <div>
      <h1>homepage</h1>
      <button onClick={handleCount}>count</button>
      <h1>{count}</h1>

      <button onClick={handleChangeUser}>Change user</button>

      <button onClick={toggleDialogState}>open dialog</button>

      <CoreConfirmDialog
        title={"Use Google's location service?"}
        description={
          "Let Google help apps determine location. This means sending anonymouslocation data to Google, even when no apps are running."
        }
        isOpen={dialogOpen}
        onClose={toggleDialogState}
        onSubmit={handleSubmit}
      />

      <ViewUser user={user} />
    </div>
  );
};

interface ChildrenComponentProps {
  user: {
    name: string;
    age: number;
  };
}

// Memoização para evitar re-render quando `user` não mudar de referência
const ViewUser = React.memo(({ user }: ChildrenComponentProps) => {
  console.log("re-render children component");

  const { name, age } = user;

  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
    </div>
  );
});

export default HomePage;
