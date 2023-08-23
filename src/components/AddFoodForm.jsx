import { useState } from "react";

function AddFoodForm(props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);


    function resetForm() {
        setName("")
        setImage("")
        setCalories(0)
        setServings(0)
    }

    function submitForm(event) {
        event.preventDefault()

        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }

        props.addFood(newFood)
        resetForm()

    }


    return (

        <div className="addFood">
            <h2>Add a new food item</h2>
            <form action="">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                />
                <label>Image</label>
                <input
                    type="text"
                    name="image"
                    onChange={(event) => setImage(event.target.value)}
                    value={image}
                />
                <label>Calories</label>
                <input
                    type="number"
                    name="calories"
                    onChange={(event) => setCalories(event.target.value)}
                    value={calories}
                />
                <label>Servings</label>
                <input
                    type="number"
                    name="servings"
                    onChange={(event) => setServings(event.target.value)}
                    checked={servings}
                />
                <button onClick={(event) => submitForm(event)} type="submit">Create</button>
            </form>
        </div>
    )
}

export default AddFoodForm