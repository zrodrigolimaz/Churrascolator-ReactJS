import React, { useState } from "react";

const Form = ({ handleSubmit }) => {
  const [guests, setGuests] = useState("");
  const [meats, setMeats] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [sides, setSides] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit({ guests, meats, drinks, sides });
  };

  const handleCheckboxChange = (e, setter) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setter((prev) =>
      isChecked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="guests">Número de convidados:</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <h3>Carnes:</h3>
      <label>
        <input
          type="checkbox"
          value="Picanha"
          onChange={(e) => handleCheckboxChange(e, setMeats)}
        />
        Picanha
      </label>

      <h3>Bebidas:</h3>
      <label>
        <input
          type="checkbox"
          value="Cerveja"
          onChange={(e) => handleCheckboxChange(e, setDrinks)}
        />
        Cerveja
      </label>

      <h3>Acompanhamentos:</h3>
      <label>
        <input
          type="checkbox"
          value="Arroz"
          onChange={(e) => handleCheckboxChange(e, setSides)}
        />
        Arroz
      </label>

      <button type="submit">Calcular</button>
    </form>
  );
};

export default Form;
