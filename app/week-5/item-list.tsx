import React, { useState } from "react";
import Item from "./item";
import items from "./items.json";

type SortOption = "name" | "category" | "grouped";

const ItemList = () => {
  const [sortBy, setSortBy] = useState<SortOption>("name");

  // Sorted items (flat)
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  // Grouped items by category
  const groupedItems = items.reduce((acc: Record<string, typeof items>, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof items>);

  // Sort items within each category alphabetically by name
  Object.keys(groupedItems).forEach((cat) => {
    groupedItems[cat].sort((a, b) => a.name.localeCompare(b.name));
  });

  return (
    <div>
      {/* Sort Buttons */}
      <div className="mb-4 space-x-2">
        <button
          className={`px-3 py-1 rounded ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>

        <button
          className={`px-3 py-1 rounded ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>

        <button
          className={`px-3 py-1 rounded ${
            sortBy === "grouped" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
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
              <div key={category} className="mb-4">
                <h2 className="font-bold capitalize">{category}</h2>
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