import React from 'react';

import RecipeCreationForm from '../components/RecipeCreationForm'

class RecipeCreationFormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: {
        title: '',
        text: '',
      }
    }
  }

  onRecipeTitleChange(e) {
    let newRecipe = Object.assign({}, this.state.recipe, {
      title: e.target.value
    })
    this.setState({
      recipe: newRecipe
    })
  }

  onRecipeTextChange(e) {
    let newRecipe = Object.assign({}, this.state.recipe, {
      text: e.target.value
    })
    this.setState({
      recipe: newRecipe
    })
  }

  onFormSubmit(e) {
    e.preventDefault()
    console.log('onFormSubmit called!')
    let newRecipe = this.state.recipe;
    this.props.addRecipe(newRecipe);
  }

  render() {
    return <RecipeCreationForm
      onFormSubmit={this.onFormSubmit.bind(this)}
      onRecipeTitleChange={this.onRecipeTitleChange.bind(this)}
      onRecipeTextChange={this.onRecipeTextChange.bind(this)}/>
  }
}

export default RecipeCreationFormContainer
