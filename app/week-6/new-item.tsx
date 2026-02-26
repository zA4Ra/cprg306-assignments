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
        <option className="text-black">Produce</option>
        <option className="text-black">Dairy</option>
        <option className="text-black">Bakery</option>
        <option className="text-black">Meat</option>
        <option className="text-black">Canned Goods</option>
        <option className="text-black">Dry Goods</option>
        <option className="text-black">Household</option>
      </select>

      <button className="bg-teal-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
};

export default NewItem;