import React from 'react'

require('../public/stylesheets/recipe-menu.scss')

class RecipeMenu extends React.Component {
  render() {
    let recipeList = this.props.recipes.map((recipe, index) => {
      return (
        <li key={index} onClick={this.props.handleClick.bind(null, index)}>{recipe.title}</li>
      )
    })

    return (
      <div className='recipe-menu'>
        <h1>Recipes</h1>
        <ul>
          {recipeList}
        </ul>
        <button onClick={this.props.setView.bind(null, 'form')}>New Recipe</button>
      </div>
    )
  }
}

export default RecipeMenu
