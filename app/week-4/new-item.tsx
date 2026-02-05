"use client";

interface NewItemProps {
  name: string;
  setName: (value: string) => void;
  nameTouched: boolean;
  setNameTouched: (value: boolean) => void;
  quantity: number;
  setQuantity: (value: number) => void;
  category: string;
  setCategory: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  submitError: string;
}

export default function NewItem({
  name,
  setName,
  nameTouched,
  setNameTouched,
  quantity,
  setQuantity,
  category,
  setCategory,
  handleSubmit,
  submitError,
}: NewItemProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block font-medium">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setNameTouched(true)}
          required
          className={`border p-2 w-full rounded 
            ${!name && nameTouched ? "border-red-500" : "border-gray-300"}`}
        />
        {!name && nameTouched && (
          <p className="text-red-500 text-sm mt-1">Name is required.</p>
        )}
      </div>

      {/* Quantity Field */}
      <div>
        <label htmlFor="quantity" className="block font-medium">Quantity:</label>
        <input
          id="quantity"
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
          className="border p-2 w-full rounded border-gray-300"
        />
      </div>

      {/* Category Field */}
      <div>
        <label htmlFor="category" className="block font-medium">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 w-full rounded border-gray-300"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Error Message */}
      {submitError && <p className="text-red-500 text-sm">{submitError}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!name || quantity < 1}
        className="bg-blue-500 text-white px-4 py-2 rounded 
                   disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Add Item
      </button>
    </form>
  );
}
