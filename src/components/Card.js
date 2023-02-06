import React from "react";
import cardStyle from '../assets/style/cardStyle.css';


const Card = ({ meal }) => {
  return (
    <div className="mealCard">
      {/* food name */}
      <h2>{meal.strMeal}</h2>
      {/* food origin */}
      <p className="originFoodStyle"><span>Origin:</span> {meal.strArea}</p>
      {/* food photo */}
      <img src={meal.strMealThumb} alt={"photo" + meal} />
      {/* recipe description */}
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default Card;
