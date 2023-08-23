import foodsJson from "./../foods.json";
import { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

function FoodList() {

  const [foods, setFoods] = useState(foodsJson)
  const [foodsFound, setfoodsFound] = useState(foodsJson)


  function removeFood(foodId) {

    const removedFoodArray = foods.filter((foodToDelete) => {
      return foodToDelete.id !== foodId
    })

    setFoods(removedFoodArray)
  }


  function addFood(foodToAdd) {
    const addedFoodArray = [foodToAdd, ...foods]

    setFoods(addedFoodArray)
  }

  
  function searchForFood(str) {

    let searchedFoods;

    if (str === "") {
      searchedFoods = foodsFound;
    } else {
      searchedFoods = foodsFound.filter((food) => {
        return food.name.match(str)
      });
    }

    setFoods(searchedFoods)
  }


  return (


    <div className="container">
      <Search searchForFood={searchForFood} />
      <AddFoodForm addFood={addFood} />
      {foods.map((food) => {
        return (
          <FoodBox key={food.id} food={food} removeFood={removeFood} />
        )
      })}
    </div>
  );
}

export default FoodList;