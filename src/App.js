import React, { useState, useEffect } from 'react';
import './App.css';
import foodsData from './components/foods.json';
import FoodList from './components/FoodList';
import SearchBar from './components/SearchBar';

function App() {
  const [foodList, setFoodList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFoodList(foodsData);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFoodList = foodList.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Pronutrition </h1>
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      </header>
      <div className="container">
        <FoodList foods={filteredFoodList} />
      </div>
    </div>
  );
}

export default App;