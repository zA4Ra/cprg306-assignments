"use client";

import React, { useState } from "react";
import Item from "./item";

type SortOption = "name" | "category" | "grouped";

type ItemType = {
  id: string;
  name: string;
  quantity: number;
  category: string;
};

type ItemListProps = {
  items: ItemType[];
};

const ItemList = ({ items }: ItemListProps) => {
  const [sortBy, setSortBy] = useState<SortOption>("name");

  // ✅ create copy before sorting (immutability)
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  // ✅ create grouped copy without mutating props
  const groupedItems = items.reduce<Record<string, ItemType[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  // ✅ sort each group safely
  Object.keys(groupedItems).forEach((cat) => {
    groupedItems[cat] = [...groupedItems[cat]].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  });

  return (
    <div className="border-2 border-teal-400 rounded-xl p-4 bg-gray-900 shadow-lg">
      {/* Buttons */}
      <div className="mb-6 flex space-x-3">
        <button
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            sortBy === "name"
              ? "bg-teal-500 text-white"
              : "bg-gray-700 text-gray-200 hover:bg-teal-600"
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>

        <button
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            sortBy === "category"
              ? "bg-teal-500 text-white"
              : "bg-gray-700 text-gray-200 hover:bg-teal-600"
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>

        <button
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            sortBy === "grouped"
              ? "bg-teal-500 text-white"
              : "bg-gray-700 text-gray-200 hover:bg-teal-600"
          }`}
          onClick={() => setSortBy("grouped")}
        >
          Group by Category
        </button>
      </div>

      {/* Render Items */}
      {sortBy === "grouped"
        ? Object.keys(groupedItems)
            .sort()
            .map((category) => (
              <div key={category} className="mb-6">
                <h2 className="font-bold text-lg text-teal-300 capitalize mb-2">
                  {category}
                </h2>

                {groupedItems[category].map((item) => (
                  <Item key={item.id} item={item} />
                ))}
              </div>
            ))
        : sortedItems.map((item) => <Item key={item.id} item={item} />)}
    </div>
  );
};

export default ItemList;