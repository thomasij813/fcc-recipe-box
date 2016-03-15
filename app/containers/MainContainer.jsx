import React from 'react'

import RecipeViewContainer from './RecipeViewContainer'
import RecipeMenuContainer from './RecipeMenuContainer'

require('../public/stylesheets/main-container.scss')

class MainContainer extends React.Component {
  constructor() {
    super()
    this.state ={
      recipes: [
        {title: 'Recipe 1', active: true, text: 'This is Recipe 1', id: 0},
        {title: 'Recipe 2', active: false, text: 'This is Recipe 2', id: 1},
        {title: 'Recipe 3', active: false, text: 'This is Recipe 3', id: 2},
        {title: 'Recipe 4', active: false, text: 'This is Recipe 4', id: 3}
      ],
      view: 'recipe'
    }
    this.counter = 3
  }

  findActiveRecipe(recipes) {
    var activeRecipe = recipes.filter((recipe) => {
      return recipe.active;
    });
    return activeRecipe[0];
  }

  addRecipe(recipe) {
    console.log('addRecipe called!')
    recipe.id = this.counter + 1
    recipe.active = false;
    this.counter++
    this.setState({
      recipes: [...this.state.recipes, recipe],
      view: 'recipe'
    })
    console.log(this.counter);
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
          recipes={this.state.recipes} />
        <RecipeViewContainer
          recipe={this.findActiveRecipe(this.state.recipes)}
          addRecipe={this.addRecipe.bind(this)}
          view={this.state.view} />
      </div>
    )
  }
}

export default MainContainer
