import React from 'react';

import RecipeCreationForm from '../components/RecipeCreationForm'

class RecipeCreationFormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      recipe: props.recipe,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      recipe: nextProps.recipe
    })
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

  onAddIngredient() {
    let newRecipe = Object.assign({}, this.state.recipe, {ingredients: [...this.state.recipe.ingredients, '']})
    this.setState({
      recipe: newRecipe
    })
  }

  onDeleteIngredient(ingredientIndex) {
    let newIngredients = [
      ...this.state.recipe.ingredients.slice(0, ingredientIndex),
      ...this.state.recipe.ingredients.slice(ingredientIndex + 1)
    ]
    let newRecipe = Object.assign({}, this.state.recipe, {ingredients: newIngredients})
    this.setState({
      recipe: newRecipe
    })
  }

  onIngredientChange(index, value) {
    let ingredients = this.state.recipe.ingredients
    ingredients[index] = value;
    let newRecipe = Object.assign({}, this.state.recipe, {ingredients: ingredients})
    this.setState({
      recipe: newRecipe
    })
  }

  onFormSubmit(e) {
    e.preventDefault()
    let newRecipe = this.state.recipe;
    this.props.addRecipe(newRecipe, this.props.recipeIndex);
  }

  render() {
    return <RecipeCreationForm
      onFormSubmit={this.onFormSubmit.bind(this)}
      onRecipeTitleChange={this.onRecipeTitleChange.bind(this)}
      onRecipeTextChange={this.onRecipeTextChange.bind(this)}
      onAddIngredient={this.onAddIngredient.bind(this)}
      onDeleteIngredient={this.onDeleteIngredient.bind(this)}
      onIngredientChange={this.onIngredientChange.bind(this)}
      recipe={this.state.recipe} />
  }
}

export default RecipeCreationFormContainer
