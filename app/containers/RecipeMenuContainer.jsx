import React from 'react'

import RecipeMenu from '../components/RecipeMenu'

require('../public/stylesheets/recipe-menu.scss')

class RecipeMenuContainer extends React.Component {
  handleClick(index) {
    this.props.setActiveRecipe(index);
  }
  render() {
    return (
      <RecipeMenu
        recipes={this.props.recipes}
        setView={this.props.setView}
        handleClick={this.handleClick.bind(this)} />
    )
  }
}

export default RecipeMenuContainer
