import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  // the useState declared at the start is an empty array
  const [mealsData, setMealsData] = useState([]);
  // the useState declared at the start is an empty string
  const [inputSearch, setInputSearch] = useState("");
  // use axios to recover the data I need and is played only when i call it with my inputSearch
  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch
      )
      .then((res) => setMealsData(res.data.meals));
  }, [inputSearch]);

  return (
    <div className="appContainer">
      <h1>React Fake Coocking App</h1>
      {/* notre input a un event listener qui fait en sort que on puisse toucher et modifier notre state */}
      <input
        type="text"
        placeholder="type the name of a food"
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <div className="mealsContainer">
        {mealsData &&
          mealsData
            .slice(0, 24)
            .map((meal) => <Card key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};

export default App;
