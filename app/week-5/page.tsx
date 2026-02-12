import React from "react";
import ItemList from "./item-list";

const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white p-6 font-sans">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
};

export default Page;