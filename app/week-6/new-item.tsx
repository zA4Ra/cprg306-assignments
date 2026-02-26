"use client";

import { useState } from "react";

type ItemType = {
  id: string;
  name: string;
  quantity: number;
  category: string;
};

type NewItemProps = {
  onAddItem: (item: ItemType) => void;
};

const NewItem = ({ onAddItem }: NewItemProps) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newItem: ItemType = {
      id: crypto.randomUUID(),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        className="border p-2 mr-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        required
      />

      <input
        type="number"
        className="border p-2 mr-2 w-20"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min={1}
      />

      <select
        className="border p-2 mr-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
      </select>

      <button className="bg-teal-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
};

export default NewItem;