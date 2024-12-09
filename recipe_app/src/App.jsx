import './App.css';
import recipes from './recipes.json';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function App() {
  const [cat,setCat]=useState("Default");

  const filteredRecipe= (cat === "Default")?recipes:recipes.filter((recipe)=> recipe.category === cat);

  return (
    <div className="App">
     <h1>Recipe App</h1>
      <select 
      name="category" 
      id="category" 
      value={cat}
      onChange={(e)=>setCat(e.target.value)}>
        <option value="Default">Select</option>
        <option value="veg">Veg</option>
        <option value="nonveg">Non-Veg</option>
      </select>
     <div className='recipes'>
        {filteredRecipe.map((recipe,index)=>(
          <div className='recipe'  key={index}>
            <h2>{recipe.recipe_name}</h2>
            <div className='container01'>
              <p>{recipe.category}</p>
              <p>{recipe.time}</p>
            </div>
           <Link to={`/${recipe.recipe_id}`} className='link'>Step By Step</Link>
          </div>
        ))}
     </div>
    </div>
  );
}

export default App;
