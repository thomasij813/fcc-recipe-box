import React from 'react'

import RecipeMenu from '../components/RecipeMenu'

require('../public/stylesheets/recipe-menu.scss')

class RecipeMenuContainer extends React.Component {
  render() {
    return (
      <RecipeMenu
        recipes={this.props.recipes}
        setView={this.props.setView} />  
    )
  }
}

export default RecipeMenuContainer
