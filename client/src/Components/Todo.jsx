import React from 'react'
import TodoItem from './TodoItem'
import { useDispatch } from 'react-redux'
import { CreateTodoAction } from '../Redux/ActionCreators/TodoActionCreators'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Todo = () => {
  const dispatch = useDispatch()
  const { todos } = useSelector((store) => store)
  const [todoItem, setTodoItem] = useState('')

  //   const AddTodoHandler = () => {}
  console.log(todoItem)
  console.log('hello i am todos ====>', todos)

  return (
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div
              class="card"
              id="list1"
              style={{ borderRadius: '.75rem', backgroundColor: '#eff1f2' }}
            >
              <div class="card-body py-4 px-4 px-md-5">
                <p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
                  <i class="fas fa-check-square me-1"></i>
                  <u>My Todo-s</u>
                </p>

                <div class="pb-2">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex flex-row align-items-center">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          id="exampleFormControlInput1"
                          placeholder="Add new..."
                          value={todoItem}
                          onChange={(event) => setTodoItem(event.target.value)}
                        />

                        <div>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => {
                              dispatch(CreateTodoAction(todoItem))
                              setTodoItem('')
                            }}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr class="my-4" />
                {/* TOdo ittem */}

                {todos.map((item) => (
                  <TodoItem item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Todo
