"use client";

import { useState } from "react";
import NewItem from "../week-6/new-item";
import ItemList from "../week-6/item-list";
import itemsData from "../week-6/items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (newItem: any) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };
  return ( 
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}