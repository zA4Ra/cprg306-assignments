type NewItemProps = {
  name: string;
  setName: (value: string) => void;
  nameTouched: boolean;
  setNameTouched: (value: boolean) => void;
  quantity: number;
  setQuantity: (value: number) => void;
  category: string;
  setCategory: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

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
}: NewItemProps) {
  const showError = nameTouched && (!name || name.trim().length < 2);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 p-6 border-2 border-pink-500 bg-black text-pink-500 min-w-[260px]"
    >
      <div>
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setNameTouched(false)} // ← clear error while typing
          onBlur={() => setNameTouched(true)}   // ← mark touched on blur
          className={`block w-full bg-black text-pink-500 border p-1
            ${showError ? "border-red-500" : "border-pink-500"}`}
        />

        {showError && (
          <p className="text-red-500 text-sm">
            {name.trim().length === 0
              ? "Name is required."
              : "Name must be at least 2 characters."}
          </p>
        )}
      </div>

      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          min="1"
          max="99"
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="bg-black text-pink-500 border border-pink-500 p-1 w-full"
        />
      </div>

      <div>
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-black text-pink-500 border border-pink-500 p-1 w-full"
        >
           <option className="text-black">Produce</option>
        <option className="text-black">Dairy</option>
        <option className="text-black">Bakery</option>
        <option className="text-black">Meat</option>
        <option className="text-black">Canned Goods</option>
        <option className="text-black">Dry Goods</option>
        <option className="text-black">Household</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={!name || name.trim().length < 2}
        className="border border-pink-500 p-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Add Item
      </button>
    </form>
  );
}


