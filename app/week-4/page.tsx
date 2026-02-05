"use client";

import { useState } from "react";
import NewItem from "./new-item";

export default function Page() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Validate while typing
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    if (value.trim().length === 0) {
      setNameError("Name is required.");
    } else if (value.trim().length < 2) {
      setNameError("Name must be at least 2 characters.");
    } else {
      setNameError("");
    }
  };

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
  );
}
