import React from 'react'

require('../public/stylesheets/recipe-form.scss')

class IngredientList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: this.props.ingredients
    }
  }

  handleAddClick(e) {
    e.preventDefault();
    this.setState({
      ingredients: [...this.state.ingredients, '']
    })
  }

  handleDeleteClick(e) {
    e.preventDefault();
    let index = parseInt(e.target.attributes.id.value)
    let newIngredients = [
      ...this.state.ingredients.slice(0, index),
      ...this.state.ingredients.slice(index + 1)
    ]
    this.setState({
      ingredients: newIngredients
    })
  }

  handleInputChange(e) {
    let index = parseInt(e.target.attributes.id.value)
    let value = e.target.value;
    let newIngredients = [
      ...this.state.ingredients.slice(0, index),
      value,
      ...this.state.ingredients.slice(index + 1)
    ]
    this.setState({
      ingredients: newIngredients
    })
  }

  render() {
    var inputList = this.state.ingredients.map((ingredient, index) => {
      return (
        <div key={index} className='ingredient'>
          <input
            id={index}
            type="text"
            className='ingredient'
            onChange={this.handleInputChange.bind(this)}
            value={ingredient}
            name={'ingredient'}/>
          <a href="#" id={index} onClick={this.handleDeleteClick.bind(this)} className='delete-ingredient'>Delete</a>
        </div>
    )
    })

    return (
      <div className='ingredient-list' name='ingredient-list'>
        <h3>Ingredients:</h3>
        {inputList}
        <a href='#' onClick={this.handleAddClick.bind(this)} className="add-ingredient">Add Ingredient</a>
      </div>
    )
  }
}

class RecipeForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onFormSubmit}>
        <h3>Recipe Name:</h3>
        <input name="title" type="text" placeholder="Title" defaultValue={this.props.recipe.title}/>
        <IngredientList ingredients={this.props.recipe.ingredients}/>
        <h3>Instructions:</h3>
        <textarea name="text" placeholder="Recipe Text" defaultValue={this.props.recipe.text} />
        <button type="submit">Add Recipe</button>
      </form>
    )
  }
}

export default RecipeForm
