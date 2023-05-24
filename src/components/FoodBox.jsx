


function FoodBox(props) {

// const handleDelete= (index) => {

//   const cloneFood = JSON.parse(JSON.stringify(foodsArr))
//   cloneFood()

// }


  return (

   <card className="foodCard">

    <h2>{props.food.name}</h2>

    <img src={props.food.image} width="150"/>
    
    <p>Calories: {props.food.calories}</p>
    <p>Servings: {props.food.servings}</p>
    <p>Total Calories: {props.food.calories * props.food.servings} kcal</p>
<button type="primary"> Delete </button>
{/* <button type="primary" onClick={ () => handleDelete(index)}> Delete </button> */}
   </card>


  )
}

export default FoodBox