import * as ActionType from '../ActionTypes/TodoActionTypes'

export const CreateTodoAction = (item) => {
  return {
    type: ActionType.CREATE_TODO,
    payload: item,
  }
}
