const Recipe = ({recipe}) => {
    
    return(
        <div className="recipe-card">
            <h3>{recipe.cakeName}</h3>
            <p>Ingredients:</p>
            <ul>
                {recipe.ingredients.map((ingredient) => <li>{ingredient}</li>)}
            </ul>
            <p>Rating: {recipe.rating}</p>
            <hr/>
        </div>
    )
}

export default Recipe;