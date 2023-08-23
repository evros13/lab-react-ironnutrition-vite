import AddFoodForm from "./AddFoodForm"

function FoodBox (props) {

    const {name, image, calories, servings, id} = props.food


    return (
    <div>
        <h2>Food items</h2>
        <p><b>{name}</b></p>
        <img src={image} />
        <p>Calories: {calories}</p>
        <p>Servings {servings}</p>
        <p><b>Total Calories: {servings} * {calories} </b> kcal</p>
        <button className="removeFood" onClick={() => props.removeFood(id)}>Delete</button>
    </div>
    )
}

export default FoodBox