import React from 'react'

require('../public/stylesheets/recipe-menu.scss')

class RecipeMenu extends React.Component {
  handleClick() {
    this.props.setView('form');
  }

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
        <button onClick={this.handleClick.bind(this)}>New Recipe</button>
      </div>
    )
  }
}

export default RecipeMenu
