import React from 'react'

class RecipeView extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.recipe.text}</p>
      </div>
    )
  }
}

export default RecipeView
