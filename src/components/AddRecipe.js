import {useState, useRef} from "react"; 

const AddRecipe = ({recipes}) => {
    const [prevRecipes, setRecipes] = useState(recipes);
    const inputNameRef = useRef();
    const inputIngredientRef = useRef();
    const inputRatingRef = useRef();


    const handleAddRecipe = () => {
        const name = inputNameRef.current.value;
        const ingredients = inputIngredientRef.current.value;
        const rating = inputRatingRef.current.value;
        console.log(name);
        console.log(ingredients);
        console.log(rating);
        setRecipes(prevRecipes => [...prevRecipes, {cakeName: name, ingredients: ingredients, rating: rating}])
        console.log(recipes);
        
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