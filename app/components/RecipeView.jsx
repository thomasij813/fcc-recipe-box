import React from 'react'

let style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '125px',
  marginLeft: '10px'
}

function NoRecipeMessage(props) {
  return <h1>Click New Recipe to add a recipe.</h1>
}

class RecipeView extends React.Component {
  handleDelete(e) {
    e.preventDefault()
    this.props.deleteRecipe(this.props.recipeIndex)
  }

  render() {
    if (this.props.recipe) {
      return (
        <div style={style}>
          <p>{this.props.recipe.text}</p>
          <button onClick={this.props.setView.bind(null, 'edit')}>Edit</button>
          <button onClick={this.handleDelete.bind(this)}>Delete</button>
        </div>
      )
    } else {
      return <NoRecipeMessage />
    }
  }
}

export default RecipeView
