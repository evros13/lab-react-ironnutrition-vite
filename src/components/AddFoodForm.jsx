import { Divider, Input, Button } from "antd";
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

        <form className="form">
            <Divider>Add a new food item</Divider>

            <label>Name</label>
            <Input
                type="text"
                name="name"
                onChange={(event) => setName(event.target.value)}
                value={name}
            />

            <label>Image</label>
            <Input
                type="text"
                name="image"
                onChange={(event) => setImage(event.target.value)}
                value={image}
            />

            <label>Calories</label>
            <Input
                type="number"
                name="calories"
                onChange={(event) => setCalories(event.target.value)}
                value={calories}
            />

            <label>Servings</label>
            <Input
                type="number"
                name="servings"
                onChange={(event) => setServings(event.target.value)}
                checked={servings}
            />
           
            <Button onClick={(event) => submitForm(event)} type="primary submit">Create</Button>
        </form>




    )
}

export default AddFoodForm