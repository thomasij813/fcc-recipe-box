import React from 'react'

import RecipeMenu from '../components/RecipeMenu'

require('../public/stylesheets/recipe-menu.scss')

class RecipeMenuContainer extends React.Component {
  handleRecipeClick(index) {
    this.props.setActiveRecipe(index)
    this.props.setView('recipe')
  }
  render() {
    return (
      <RecipeMenu
        recipes={this.props.recipes}
        setView={this.props.setView}
        handleClick={this.handleRecipeClick.bind(this)} />
    )
  }
}

export default RecipeMenuContainer
