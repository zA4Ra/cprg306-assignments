import React from "react";
import ItemList from "./item-list";

const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-900 p-6 font-sans">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
};

export default Page;
