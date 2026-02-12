"use client";

import { useState } from "react";
import NewItem from "./new-item";

export default function Page() {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNameTouched(true); // mark touched on submit

    if (!name || name.trim().length < 2) {
      return; // error will now show
    }

    alert(`Added ${quantity} x ${name} (${category})`);
    setName("");
    setNameTouched(false);
  };

  return (
    <main className="flex justify-center pt-10">
      <NewItem
        name={name}
        setName={setName}
        nameTouched={nameTouched}
        setNameTouched={setNameTouched}
        quantity={quantity}
        setQuantity={setQuantity}
        category={category}
        setCategory={setCategory}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

