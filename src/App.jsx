import { useState } from "react";
import "./App.css";

const ColorSelect = () => {
  const [color, setColor] = useState("");

  const colorSelectHandler = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <label htmlFor="colorSelect">Select a color: </label>
      <select id="colorSelect" onChange={colorSelectHandler}>
        <option value="Red">Red</option>
        <option value="Yellow">Yellow</option>
        <option value="Green">Green</option>
      </select>
      <p>{color && `Color Selected: ${color}`}</p>
    </div>
  );
};

const DaySelect = () => {
  const [day, selectDay] = useState("");

  const daySelectHandler = (event) => {
    selectDay(event.target.value);
  };
  return (
    <div>
      <label htmlFor="days">Select a Day: </label>
      <select id="days" onChange={daySelectHandler}>
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Saturday">Saturday</option>
      </select>
      <p>
        {day && (day === "Sunday" || day === "Saturday"
          ? `${day} is a weekend.`
          : `${day} is a weekday.`)}
      </p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <ColorSelect />
      <DaySelect />
    </main>
  );
}
