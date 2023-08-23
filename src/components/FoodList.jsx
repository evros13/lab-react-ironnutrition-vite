// import "./App.css";
// import foodsJson from "./foods.json";
// import { useState } from "react";
// import FoodBox from "./FoodBox";
// import AddFoodForm from "./AddFoodForm";
// import App from "./../App"

// function FoodList() {

//     const [foods, setFoods] = useState(foodsJson)
    
//       function removeFood(foodId) {
    
//         const removedFoodArray = foods.filter((foodToDelete) => {
//           return foodToDelete.id !== foodId
//         })
    
//         setFoods(removedFoodArray)
//       }
    
//       function addFood(foodToAdd) {
//         const addedFoodArray = [foodToAdd, ...foods]
    
//         setFoods(addedFoodArray)
//       }
    
//     return (
//         <div className="container">
    
//         <AddFoodForm addFood={addFood}/>
//           {foods.map((food) => {
//               return (
//                 <FoodBox key={food.id} food={food} removeFood={removeFood}/>
//               )
//             })}
//         </div>
//     )
// }

// export default FoodList