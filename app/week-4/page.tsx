"use client";

import { useState } from "react";
import NewItem from "./new-item";

export default function Page() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [submitError, setSubmitError] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const item = { name, quantity, category };
    console.log(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
    setSubmitError("");
  };

  return (
    <main>
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
        submitError={submitError}
      />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          
        </div>
        <div>
          <label htmlFor="quantity">Quantity: </label>
          <input
            id="quantity"
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category: </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
  <button type="submit">Add Item</button>
</form>
    </main>
  );
}
