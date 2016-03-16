import React from 'react'

let style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '125px',
  marginLeft: '10px',
  width: '100%'
}

function NoRecipeMessage(props) {
  return <h1>Click New Recipe to add a recipe.</h1>
}

function RecipeView(props) {
  if (props.recipe) {
    return (
      <div style={style}>
        <p>{props.recipe.text}</p>
        <button onClick={props.handleEditClick}>Edit</button>
        <button onClick={props.handleDeleteClick}>Delete</button>
      </div>
    )
  } else {
    return <NoRecipeMessage />
  }
}

// class RecipeView extends React.Component {
//   render() {
//     if (this.props.recipe) {
//       return (
//         <div style={style}>
//           <p>{this.props.recipe.text}</p>
//           <button onClick={this.props.handleEditClick}>Edit</button>
//           <button onClick={this.props.handleDeleteClick}>Delete</button>
//         </div>
//       )
//     } else {
//       return <NoRecipeMessage />
//     }
//   }
// }

export default RecipeView
