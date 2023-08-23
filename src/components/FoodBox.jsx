import { Card, Col, Button, Row } from "antd";

function FoodBox (props) {

    const {name, image, calories, servings, id} = props.food


    return (
    <Col className="foodList">
        <Card name={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories {calories}</p>
        <p>Servings {servings}</p>
        <p><b>Total Calories: {calories} * {servings}</b> kcal</p>
        <Button type="primary" onClick={() => props.removeFood(id)}> Delete </Button>
        </Card>
    </Col>
    )
}

export default FoodBox