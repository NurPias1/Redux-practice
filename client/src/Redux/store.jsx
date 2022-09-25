import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { TodoReducer } from './Reducers/TodoReducer'
const store = createStore(
  TodoReducer,
  composeWithDevTools(
    applyMiddleware(),
    // other store enhancers if any
  ),
)
export default store
