import React from "react";

export const Greetings = () => {
  const greeting = "Hello World";
  console.log(`Api base: ${process.env.API_BASE}`);

  return (
    <h1>{greeting}</h1>
  );
};