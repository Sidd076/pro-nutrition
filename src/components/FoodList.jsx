import React, { useState } from 'react';
import FoodBox from './FoodBox';

const FoodList = ({ foods }) => {
  const [selectedFoods, setSelectedFoods] = useState([]);

  const handleAddFood = (food) => {
    setSelectedFoods([...selectedFoods, food]);
  };

  const handleRemoveFood = (index) => {
    setSelectedFoods([
      ...selectedFoods.slice(0, index),
      ...selectedFoods.slice(index + 1),
    ]);
  };

  const calculateTotalCalories = () => {
    return selectedFoods.reduce(
      (total, food) => total + food.calories * food.quantity,
      0
    );
  };

  return (
    <div className="columns">
      <div className="column">
        {foods.map((food, index) => (
          <FoodBox key={index} food={food} onAdd={handleAddFood} />
        ))}
      </div>
      <div className="column content">
        <h2 className="subtitle">Today's foods</h2>
        <ul>
          {selectedFoods.map((food, index) => (
            <li key={index}>
              {food.quantity} {food.name} = {food.calories * food.quantity} cal
              <button className="delete" onClick={() => handleRemoveFood(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <strong>Total: {calculateTotalCalories()} cal</strong>
      </div>
    </div>
  );
};

export default FoodList;