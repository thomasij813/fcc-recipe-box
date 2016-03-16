import React from 'react'

let style = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0 25px',
    width: '100%'
  },
  recipe: {
    flexGrow: 1
  },
  button: {
    marginTop: '10px'
  },
  preWrap: {
    whiteSpace: 'pre-wrap'
  }
}

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
    <div style={style.recipe}>
      <h1>{props.recipe.title}</h1>
      <IngredientList ingredients={props.recipe.ingredients} />
      <div style={style.preWrap}>{props.recipe.text}</div>
    </div>
  )
}

function RecipeView(props) {
  if (props.recipe) {
    return (
      <div style={style.wrapper}>
        <Recipe recipe={props.recipe} />
        <button onClick={props.handleEditClick} style={style.button}>Edit</button>
        <button onClick={props.handleDeleteClick} style={style.button}>Delete</button>
      </div>
    )
  } else {
    return <NoRecipeMessage />
  }
}

export default RecipeView
