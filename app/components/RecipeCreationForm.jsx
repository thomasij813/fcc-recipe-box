import React from 'react'

require('../public/stylesheets/recipe-creation-form.scss')

class RecipeCreationForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onFormSubmit}>
        <input type="text" placeholder="Title" onChange={this.props.onRecipeTitleChange}/>
        <textarea placeholder="Recipe Text" onChange={this.props.onRecipeTextChange}/>
        <button type="submit">Add Recipe</button>
      </form>
    )
  }
}

export default RecipeCreationForm
