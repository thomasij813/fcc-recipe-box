import React from 'react';

import RecipeForm from '../components/RecipeForm'

class RecipeFormContainer extends React.Component {

  onFormSubmit(e) {
    e.preventDefault()
    // e.target.ingredient returns a NodeList. NodeLists are array-like, and do
    // allow for things like, map, forEach, reduce, etc. The line below converts
    // a NodeList to an actual array.
    let ingredientList = [].slice.call(e.target.ingredient)
    let ingredients = ingredientList.map((ingredient) => {
       return ingredient.value
     }).filter((ingredient) => {
       return ingredient !== ''
     })
    let newRecipe = {
      title: e.target.title.value,
      text: e.target.text.value,
      ingredients: ingredients
    }
    this.props.addRecipe(newRecipe, this.props.recipeIndex);
  }

  render() {
    return <RecipeForm onFormSubmit={this.onFormSubmit.bind(this)} recipe={this.props.recipe}/>
  }
}

export default RecipeFormContainer
