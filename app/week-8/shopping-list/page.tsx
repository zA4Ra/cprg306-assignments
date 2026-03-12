"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemData from "./itemdata.json";

type Item = {
  id: string;
  name: string;
  quantity: number;
  category: string;
};

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) {
      router.push("/week-8"); 
    }
  }, [user, router]);


  useEffect(() => {
    setItems(itemData as Item[]);
  }, []);

  const handleAddItem = (newItem: Item) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item: Item) => {
    let cleanedName = item.name.split(",")[0].trim();
    cleanedName = cleanedName.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g,
      ""
    );
    setSelectedItemName(cleanedName);
  };

  if (!user) return null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <div className="flex gap-10 justify-center items-start max-w-5xl w-full">
        <div className="w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}