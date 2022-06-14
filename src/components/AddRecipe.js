import {useState, useRef} from "react"; 

const AddRecipe = () => {
    const [recipes, setRecipes] = useState();
    const inputNameRef = useRef();
    const inputIngredientRef = useRef();
    const inputRatingRef = useRef();


    const handleAddRecipe = () => {
        const name = inputNameRef.current.value;
        const ingredients = inputIngredientRef.current.value;
        const rating = inputRatingRef.current.value;
        console.log(name);
        setRecipes(prevRecipes => [...prevRecipes, {name: name, ingredients: ingredients, rating: rating}])
    }
    
    return(
        
        <>
        <input ref={inputNameRef} placeholder="Name" type="text"></input><br/>
        <input ref={inputIngredientRef} placeholder="Ingredients" type="text"></input><br/>
        <input ref={inputRatingRef} placeholder="Rating" type="text"></input><br/>
        <button onClick={handleAddRecipe}>Submit</button>
        </>   
    )
}

export default AddRecipe;