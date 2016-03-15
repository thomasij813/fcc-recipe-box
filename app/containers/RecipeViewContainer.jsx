import React from 'react';

import RecipeView from '../components/RecipeView'
import RecipeCreationFormContainer from './RecipeCreationFormContainer'

class RecipeViewContainer extends React.Component {
  render() {
    if (this.props.view === 'recipe') {
      return <RecipeView recipe={this.props.recipe}/>
    }
    
    if (this.props.view === 'edit') {
      return <RecipeCreationFormContainer
        addRecipe={this.props.addRecipe}
        recipe={this.props.recipe}/>
    }

    return <RecipeCreationFormContainer
      addRecipe={this.props.addRecipe} />
  }
}

export default RecipeViewContainer
