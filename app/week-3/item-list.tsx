import React from 'react';
import Item from './item';
interface ItemData {
  name: string;
  quantity: number;
  category: string;
}

const ItemList: React.FC = () => {
  const items: ItemData[] = [
    { name: "milk, 4 L 🥛", quantity: 1, category: "Dairy" },
    { name: "bread 🍞", quantity: 2, category: "Bakery" },
    { name: "eggs, dozen 🥚", quantity: 2, category: "Dairy" },
    { name: "bananas 🍌", quantity: 6, category: "Produce" },
    { name: "broccoli 🥦", quantity: 3, category: "Produce" },
    { name: "chicken breasts, 1 kg 🍗", quantity: 1, category: "Meat" },
    { name: "pasta sauce 🥫", quantity: 3, category: "Canned Goods" },
    { name: "spaghetti, 454 g 🍝", quantity: 2, category: "Canned Goods" },
  ];

  return (
    <ul className="list-none p-0">
      {items.map((item, index) => (
        <Item 
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
};

export default ItemList;