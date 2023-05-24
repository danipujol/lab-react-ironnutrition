
import { useState } from 'react';
import './App.css';

import foods from "./foods.json";

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search'


function App() {

const [foodsArr, setFoodsArr] = useState(foods)

const addFood = (newFood) => {
  const clone = JSON.parse(JSON.stringify(foods))
  clone.push(newFood)
  setFoodsArr(clone)
  setFilteredFood(clone)
 }

const [filteredFoods, setFilteredFood] = useState([])

 const searchFood = (search) => {


  let filteredArr = foods.filter((eachFood) => {
    if(eachFood.name.includes(search)){
     return true //agrega el elemento
      }else {
        return false //no agregues el elemento
      }
    })
    
    setFilteredFood(filteredArr)

 }

  return (
    <div className="App">
    
    <AddFoodForm addFood={addFood}/>


    {foodsArr.map((eachFood) => (

   <div key={eachFood.Id}>

   <Search searchFood={searchFood}/>

   <FoodBox food={eachFood}/>

     {/* <p> {eachFood.name} </p>

      <img src={eachFood.image} width={150} /> */}

   </div>



      ))}

 



    </div>
  );
}

export default App;
