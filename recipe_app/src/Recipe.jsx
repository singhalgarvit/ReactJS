import { useParams } from "react-router-dom";
import recipes from './recipes.json';

function Recipe(){
    const {recipe_id}=useParams();
    return(
        recipes
        .filter((recipe)=>recipe.recipe_id == recipe_id)
        .map((value,index)=>(
            <div className="recipePage" key={index}>
                <h1>{value.recipe_name}</h1>
                <p>Time: {value.time} </p>
                <p>Category: {value.category} </p>
                <p>Ingredients: {value.ingredients}</p>
                <p>Step By Step : {value.steps}</p>
            </div>
        ))
        
    )
}
export default Recipe;