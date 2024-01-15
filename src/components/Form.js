import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, packed: false, id: Date.now() };
    onAddItems(newItem);

    setDescription("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What are your goals for today? 📝</h3>
      <input
        type="text"
        placeholder="Today i have to..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
