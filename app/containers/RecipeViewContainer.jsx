import React from 'react';

import RecipeView from '../components/RecipeView'
import RecipeCreationFormContainer from './RecipeCreationFormContainer'

class RecipeViewContainer extends React.Component {
  render() {
    if (this.props.view === 'recipe') {
      return <RecipeView
        recipe={this.props.recipe}
        recipeIndex={this.props.recipeIndex}
        setView={this.props.setView}
        deleteRecipe={this.props.deleteRecipe}/>
    }

    if (this.props.view === 'edit') {
      return <RecipeCreationFormContainer
        addRecipe={this.props.addRecipe}
        recipe={this.props.recipe}
        recipeIndex={this.props.recipeIndex}/>
    }

    if (this.props.view === 'form') {
      return <RecipeCreationFormContainer
        addRecipe={this.props.addRecipe}
        recipe={{title: '', text: '', ingredients: ['']}}/>
    }

  }
}

export default RecipeViewContainer
