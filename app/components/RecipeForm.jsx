import React from 'react'

require('../public/stylesheets/recipe-form.scss')

class IngredientList extends React.Component {

  handleAddClick(e) {
    e.preventDefault();
    this.props.onAddIngredient()
  }

  handleDeleteClick(e) {
    e.preventDefault();
    let index = parseInt(e.target.attributes.id.value)
    this.props.onDeleteIngredient(index);
  }

  handleInputChange(e) {
    let index = parseInt(e.target.attributes.id.value)
    let value = e.target.value;
    this.props.onIngredientChange(index, value);
  }

  render() {
    var inputList = this.props.ingredients.map((ingredient, index) => {
      return (
        <div key={index} className='ingredient'>
          <input
            id={index}
            type="text"
            className='ingredient'
            onChange={this.handleInputChange.bind(this)}
            value={ingredient}/>
          <a href="#" id={index} onClick={this.handleDeleteClick.bind(this)}>Delete</a>
        </div>
    )
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

class RecipeForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onFormSubmit}>
        <h3>Recipe Name</h3>
        <input type="text" placeholder="Title" onChange={this.props.onRecipeTitleChange} value={this.props.recipe.title}/>
        <IngredientList
          ingredients={this.props.recipe.ingredients}
          onAddIngredient={this.props.onAddIngredient}
          onDeleteIngredient={this.props.onDeleteIngredient}
          onIngredientChange={this.props.onIngredientChange}/>
        <h3>Instructions</h3>
        <textarea placeholder="Recipe Text" value={this.props.recipe.text} onChange={this.props.onRecipeTextChange}/>
        <button type="submit">Add Recipe</button>
      </form>
    )
  }
}

export default RecipeForm
