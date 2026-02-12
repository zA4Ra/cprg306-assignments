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
    <div className="pl-4 py-1">
      <span className="capitalize">{item.name}</span>
      {item.quantity ? `, ${item.quantity}` : ""}
    </div>
  );
};

export default Item;