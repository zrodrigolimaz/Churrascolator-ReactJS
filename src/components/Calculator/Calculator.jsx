import React, { useState } from "react";

const Calculator = ({ handleCalculate }) => {
  const [guests, setGuests] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCalculate(guests, selectedItems);
  };

  const handleItemChange = (e) => {
    const item = e.target.value;
    if (e.target.checked) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="guests">Número de convidados:</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <h3>Itens do churrasco:</h3>
      <label>
        <input type="checkbox" value="Picanha" onChange={handleItemChange} />
        Picanha
      </label>
      <label>
        <input type="checkbox" value="Cerveja" onChange={handleItemChange} />
        Cerveja
      </label>
      <label>
        <input type="checkbox" value="Salada" onChange={handleItemChange} />
        Salada
      </label>
      <button type="submit">Calcular</button>
    </form>
  );
};

export default Calculator;
