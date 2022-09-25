import * as ActionType from '../ActionTypes/TodoActionTypes'

const initialState = {
  todos: [],
}

export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }

    default:
      return state
  }
}
