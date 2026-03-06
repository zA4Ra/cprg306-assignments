"use client";

import React, { useState } from "react";
import Item from "./item";

type ItemType = {
  id: string;
  name: string;
  quantity: number;
  category: string;
};

type ItemListProps = {
  items: ItemType[];
  onItemSelect: (item: ItemType) => void;
};

const ItemList = ({ items, onItemSelect }: ItemListProps) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) =>
    sortBy === "name"
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category)
  );

  return (
    <div>
      {/* Sorting Buttons */}
      <div className="mb-4">
        <button
          className="mr-2 px-3 py-1 bg-blue-500 text-white rounded"
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>

        <button
          className="px-3 py-1 bg-green-500 text-white rounded"
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>

      {/* Item List */}
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onSelect={() => onItemSelect(item)}
        />
      ))}
    </div>
  );
};

export default ItemList;