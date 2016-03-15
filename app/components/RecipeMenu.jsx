import React from 'react'

require('../public/stylesheets/recipe-menu.scss')

class RecipeMenu extends React.Component {
  render() {
    let recipeList = this.props.recipes.map((recipe, index) => {
      return (
        <li key={index}>{recipe.title}</li>
      )
    });
    return (
      <div>
        <h1>Recipes</h1>
        <ul>
          {recipeList}
        </ul>
        <button>New Recipe</button>
      </div>
    )
  }
}

export default RecipeMenu
