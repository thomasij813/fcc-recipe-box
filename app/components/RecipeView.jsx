import React from 'react'

require('../public/stylesheets/recipe-view.scss')

function NoRecipeMessage(props) {
  return <h1>Click New Recipe to add a recipe.</h1>
}

function IngredientList(props) {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>
      })}
    </ul>
  )
}

function Recipe(props) {
  return (
    <div>
      <h1>{props.recipe.title}</h1>
      <IngredientList ingredients={props.recipe.ingredients} />
      <div className="prewrap">{props.recipe.text}</div>
    </div>
  )
}

function RecipeView(props) {
  if (props.recipe) {
    return (
      <div className="wrapper">
        <Recipe recipe={props.recipe} />
        <button onClick={props.handleEditClick}>Edit</button>
        <button onClick={props.handleDeleteClick}>Delete</button>
      </div>
    )
  } else {
    return <NoRecipeMessage />
  }
}

export default RecipeView
