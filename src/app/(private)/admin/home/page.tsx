"use client";
import React, { useState } from "react";

const HomePage = () => {
  console.log("re-render home page");

  const [count, setCount] = useState<number>(1);
  const [user, setUser] = useState({ name: "John", age: 20 });

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleChangeUser = () => {
    // Gera nova referência para disparar re-render apenas quando a idade muda
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };

  return (
    <div>
      <h1>homepage</h1>
      <button onClick={handleClick}>Click me</button>
      <h1>{count}</h1>

      <button onClick={handleChangeUser}>Change user</button>

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
