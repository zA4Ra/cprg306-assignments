type NewItemProps = {
  name: string;
  nameError: string;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  quantity: number;
  setQuantity: (value: number) => void;
  category: string;
  setCategory: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function NewItem({
  name,
  nameError,
  handleNameChange,
  quantity,
  setQuantity,
  category,
  setCategory,
  handleSubmit,
}: NewItemProps) {
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "black",
        color: "hotpink",
        border: "2px solid hotpink",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        minWidth: "250px",
      }}
    >
      <div>
        <label>Name:</label>
        <input
          value={name}
          onChange={handleNameChange}
          style={{
            background: "black",
            color: "hotpink",
            border: "1px solid hotpink",
          }}
        />
        {nameError && (
          <p style={{ color: "red", margin: 0 }}>{nameError}</p>
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
          style={{
            background: "black",
            color: "hotpink",
            border: "1px solid hotpink",
          }}
        />
      </div>

      <div>
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            background: "black",
            color: "hotpink",
            border: "1px solid hotpink",
          }}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="snacks">Snacks</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        style={{
          background: "black",
          color: "hotpink",
          border: "1px solid hotpink",
          padding: "6px",
          cursor: "pointer",
        }}
      >
        Add Item
      </button>
    </form>
  );
}
