import React from 'react'

require('../public/stylesheets/recipe-view.scss')

function NoRecipeMessage(props) {
  return <h1>Click New Recipe to add a recipe.</h1>
}

function IngredientList(props) {
  return (
    <div>
      <h3>Ingredients:</h3>
      <ul>
        {props.ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>
        })}
      </ul>
    </div>
  )
}

function Instructions(props) {
  return (
    <div>
      <h3>Instructions:</h3>
      <div className="prewrap">{props.children}</div>
    </div>
  )
}

function Recipe(props) {
  return (
    <div>
      <h1 className='recipe-title'>{props.recipe.title}</h1>
      <IngredientList ingredients={props.recipe.ingredients} />
      <Instructions>{props.recipe.text}</Instructions>
    </div>
  )
}

function RecipeView(props) {
  if (props.recipe) {
    return (
      <div className="wrapper">
        <Recipe recipe={props.recipe} />
        <div className="recipe-buttons">
          <a href="#" onClick={props.handleEditClick} className="button edit">Edit</a>
          <a href="#" onClick={props.handleDeleteClick} className="button delete">Delete</a>
        </div>
      </div>
    )
  } else {
    return <NoRecipeMessage />
  }
}

export default RecipeView
