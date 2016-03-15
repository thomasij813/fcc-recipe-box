import React from 'react'

import RecipeViewContainer from './RecipeViewContainer'
import RecipeMenuContainer from './RecipeMenuContainer'

require('../public/stylesheets/main-container.scss')

class MainContainer extends React.Component {
  constructor() {
    super()
    this.state ={
      recipes: [
        {title: 'Recipe 1', text: 'This is Recipe 1', ingredients: [1, 2, 3]},
        {title: 'Recipe 2', text: 'This is Recipe 2', ingredients: [1, 2, 3]},
        {title: 'Recipe 3', text: 'This is Recipe 3', ingredients: [1, 2, 3]},
        {title: 'Recipe 4', text: 'This is Recipe 4', ingredients: [1, 2, 3]}
      ],
      view: 'recipe',
      activeRecipe: 0
    }
  }

  getActiveRecipe() {
    return this.state.recipes[this.state.activeRecipe]
  }

  setActiveRecipe(index) {
    this.setState({
      activeRecipe: index
    })
  }

  addRecipe(recipe, index = this.state.recipes.length) {
    let newRecipes = [
      ...this.state.recipes.slice(0, index),
      recipe,
      ...this.state.recipes.slice(index + 1)
    ]
    this.setState({
      recipes: newRecipes,
    })
    this.setActiveRecipe(index)
    this.setView('recipe')
  }

  setView(view) {
    this.setState({
      view: view
    })
  }

  render() {
    return (
      <div className='main-container'>
        <RecipeMenuContainer
          setView={this.setView.bind(this)}
          setActiveRecipe={this.setActiveRecipe.bind(this)}
          recipes={this.state.recipes} />
        <RecipeViewContainer
          recipe={this.getActiveRecipe()}
          addRecipe={this.addRecipe.bind(this)}
          view={this.state.view} />
      </div>
    )
  }
}

export default MainContainer
