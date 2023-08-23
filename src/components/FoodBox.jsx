import { Card, Col, Button, Row } from "antd";

function FoodBox(props) {

    const { name, image, calories, servings, id } = props.food
    let factor = calories * servings



    return (

        <Col className="foodList">

            {/* {props.length === 0&& display mess}
            {!props.length === 0 && display all} 
            
            I know this is what you want... but I'm too tired to think 😔*/}


            <Card name={name} style={{ width: 230, height: 300, margin: 10 }}>
                <img src={image} height={60} alt="food" />
                <h4>{name}</h4>
                <p>Calories {calories}</p>
                <p>Servings {servings}</p>
                <p>Total Calories: <b>{factor}</b> kcal</p>
                <Button type="primary" onClick={() => props.removeFood(id)}> Delete </Button>
            </Card>
        </Col>
    )
}

export default FoodBox