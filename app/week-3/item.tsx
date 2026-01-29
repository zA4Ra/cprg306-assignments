import React from 'react';

interface ItemProps {
  name: string;
  quantity: number;
  category: string;
}

const Item: React.FC<ItemProps> = ({ name, quantity, category }) => {
  return (
    <div className="bg-black text-white p-4 border border-white rounded-md mb-4 font-sans">
      <h3 className="text-lg font-medium mb-1">{name}</h3>
      <p className="text-sm">Quantity: {quantity}</p>
      <p className="text-sm">Category: {category}</p>
    </div>
  );
};

export default Item;