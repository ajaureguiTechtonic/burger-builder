import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'; //this will use the configured instance created in that file

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  }
}

const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients,
  };
}

// return a fx that receives the dispatch function that I can use later in the body - available due to redux-thunk, allowing for use of asyc code and then able to dispatch another action
export const initIngredients = () => {
  return dispatch => {
    axios.get('https://react-my-burger-2814d.firebaseio.com/ingredients.json')
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        
      })
  }
};
