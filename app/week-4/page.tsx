"use client";

import { useState } from "react";
import NewItem from "./new-item";

export default function Page() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Only clears error when user fixes input
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    // If user fixes the problem, remove error
    if (value.trim().length >= 2) {
      setNameError("");
    }
  };

  // Validate only on submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.trim().length === 0) {
      setNameError("Name is required.");
      return;
    }

    if (name.trim().length < 2) {
      setNameError("Name must be at least 2 characters.");
      return;
    }

    setNameError("");
    alert(`Added ${quantity} x ${name} (${category})`);
  };

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "40px",
      }}
    >
      <NewItem
        name={name}
        nameError={nameError}
        handleNameChange={handleNameChange}
        quantity={quantity}
        setQuantity={setQuantity}
        category={category}
        setCategory={setCategory}
        handleSubmit={handleSubmit}
      />
    </main>
  )}
