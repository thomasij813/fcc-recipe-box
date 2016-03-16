import React from 'react';

import RecipeView from '../components/RecipeView'
import RecipeFormContainer from './RecipeFormContainer'

class RecipeViewContainer extends React.Component {
  handleDelete(e) {
    e.preventDefault()
    this.props.deleteRecipe(this.props.recipeIndex)
  }

  handleEdit(e) {
    e.preventDefault()
    this.props.setView('edit')
  }

  render() {
    if (this.props.view === 'recipe') {
      return <RecipeView
        recipe={this.props.recipe}
        handleEditClick={this.handleEdit.bind(this)}
        handleDeleteClick={this.handleDelete.bind(this)}/>
    }

    if (this.props.view === 'edit') {
      return <RecipeFormContainer
        addRecipe={this.props.addRecipe}
        recipe={this.props.recipe}
        recipeIndex={this.props.recipeIndex}/>
    }

    if (this.props.view === 'form') {
      return <RecipeFormContainer
        addRecipe={this.props.addRecipe}
        recipe={{title: 'Your Recipe', text: 'Your recipe\'s instructions', ingredients: ['']}}/>
    }

  }
}

export default RecipeViewContainer
