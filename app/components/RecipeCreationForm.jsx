import React from 'react'

require('../public/stylesheets/recipe-creation-form.scss')

class IngredientList extends React.Component {

  handleAddClick(e) {
    e.preventDefault();
    this.props.onAddIngredient()
  }

  handleInputClick(e) {
    let index = parseInt(e.target.attributes.id.value)
    let value = e.target.value;
    this.props.onIngredientChange(index, value);
  }

  render() {
    var inputList = this.props.ingredients.map((ingredient, index) => {
      return <input
        id={index}
        key={index}
        type="text"
        className='ingredient'
        onChange={this.handleInputClick.bind(this)}/>
    })

    return (
      <div className='ingredient-list'>
        <h3>Ingredients</h3>
        {inputList}
        <a href='#' onClick={this.handleAddClick.bind(this)}>Add Ingredient</a>
      </div>
    )
  }
}

class RecipeCreationForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onFormSubmit}>
        <h3>Recipe Name</h3>
        <input type="text" placeholder="Title" onChange={this.props.onRecipeTitleChange}/>
        <IngredientList
          ingredients={this.props.recipe.ingredients}
          onAddIngredient={this.props.onAddIngredient}
          onIngredientChange={this.props.onIngredientChange}/>
        <h3>Instructions</h3>
        <textarea placeholder="Recipe Text" onChange={this.props.onRecipeTextChange}/>
        <button type="submit">Add Recipe</button>
      </form>
    )
  }
}

export default RecipeCreationForm
