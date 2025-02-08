import { useEffect, useState } from "react";
interface Recipes {
    name: string;
  ingredients: string[];
   
}

function RecipeList() {
    const [Recipes,setRecipes] = useState<Recipes[]>([]);
    const fetchRecipes = async () => {
        const response = await fetch(" https://dummyjson.com/recipes");
        const data = await response.json();
        setRecipes(data.recipes);
    };
    useEffect(() => {
        fetchRecipes();
    }, []);
    return (
        <div className="container">
            <h2>Recipe List</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
      {Recipes.map((product,index) => (
        <div key={index}>
            <h5 className="card-title">{product.name}</h5>
            <h6 className="card-text">{product.ingredients}</h6>
          

           
            </div>
        ))}
        </div>
        </div>
    );

}
 export default RecipeList;