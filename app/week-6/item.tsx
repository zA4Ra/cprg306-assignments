"use client";

import React from "react";

type ItemProps = {
  item: {
    id: string;
    name: string;
    quantity: number;
    category: string;
  };
};

const Item = ({ item }: ItemProps) => {
  return (
    <div className="border border-teal-400 rounded-lg p-3 mb-2 bg-gray-800 hover:bg-gray-700 shadow-md transition">
      <span className="capitalize font-medium text-white">{item.name}</span>
      {item.quantity ? `, ${item.quantity}` : ""}
    </div>
  );
};

export default Item;
