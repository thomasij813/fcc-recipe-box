import React from 'react'

import RecipeMenu from '../components/RecipeMenu'

class MainContainer extends React.Component {
  constructor() {
    super()
    this.state ={
      recipes: [
        {title: 'Recipe 1', active: true},
        {title: 'Recipe 2', active: false},
        {title: 'Recipe 3', active: false},
        {title: 'Recipe 4', active: false}
      ]
    }
  }

  render() {
    return <RecipeMenu recipes={this.state.recipes} />
  }
}

export default MainContainer
