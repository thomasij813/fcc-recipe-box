import React from 'react'

let style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '125px',
  marginLeft: '10px',
  width: '100%'
}

function NoRecipeMessage(props) {
  return <h1>Click New Recipe to add a recipe.</h1>
}

function RecipeView(props) {
  if (props.recipe) {
    return (
      <div style={style}>
        <p>{props.recipe.text}</p>
        <button onClick={props.handleEditClick}>Edit</button>
        <button onClick={props.handleDeleteClick}>Delete</button>
      </div>
    )
  } else {
    return <NoRecipeMessage />
  }
}

export default RecipeView
