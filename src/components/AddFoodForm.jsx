import { useState } from "react"

function AddFoodForm(props) {


const [ nameInput, setName ] = useState("")
const [ caloriesInput, setCalories ] = useState("")
const [ imageInput, setImage ] = useState("")
const [ servingsInput, setServings ] = useState("")

const handleName = (event) =>{
    let value = event.target.value 
    setName(value)
}

const handleCalories = (event) => setCalories(event.target.value)
const handleImage = (event) => setImage(event.target.value)
const handleServings = (event) => setServings(event.target.value)


const handleForSubmit = (event) => {
    event.preventDefault()

const newFood = {
    name: nameInput,
    calories: caloriesInput,
    image: imageInput,
    servings: servingsInput
}
props.addFood(newFood)

}

  return (

    <div>
    <h3>Add Food Entry</h3>

    <form onSubmit={handleForSubmit}>
      

      <label>Name</label>
      <input type="text" name="name" onChange={handleName} value={nameInput} />
<br />
      <label>Calories</label>
      <input type="number" name="calories" onChange={handleCalories} value={caloriesInput} />
<br />      
      <label>Image</label>
      
      <input type="text" name="image" onChange={handleImage} value={imageInput} />
<br />      
      <label>Servings</label>
      <input type="number" name="serbings" onChange={handleServings} value={servingsInput} />
<br />
      <button type="submit">Create</button>
    </form>
  
    
    
    
    
    </div>
  )
}

export default AddFoodForm