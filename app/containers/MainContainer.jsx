import React from 'react'

import RecipeViewContainer from './RecipeViewContainer'
import RecipeMenuContainer from './RecipeMenuContainer'

import {recipes} from '../samples/mockData'

require('../public/stylesheets/main-container.scss')

class MainContainer extends React.Component {
  constructor() {
    super()
    let localRecipes = JSON.parse(localStorage.getItem('recipes'))
    this.state = {
      recipes: localRecipes || recipes,
      view: 'recipe',
      activeRecipe: 0
    }
  }

   componentDidUpdate() {
     let recipes = JSON.stringify(this.state.recipes.slice())
     localStorage.setItem('recipes', recipes)
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

  deleteRecipe(index) {
    let newRecipes = [
      ...this.state.recipes.slice(0, index),
      ...this.state.recipes.slice(index + 1)
    ]
    console.log(index)
    this.setState({
      recipes: newRecipes
    })
    this.setActiveRecipe(0)
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
          deleteRecipe={this.deleteRecipe.bind(this)}
          view={this.state.view}
          setView={this.setView.bind(this)}
          recipeIndex={this.state.activeRecipe}/>
      </div>
    )
  }
}

export default MainContainer
