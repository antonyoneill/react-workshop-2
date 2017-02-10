const todos = [
  { id: 0, text: 'Buy Milk', done: false },
  { id: 1, text: 'Walk the dog', done: true },
]

export default (state, action) => {
  if (!state) state = {
    todos,
  }

  switch (action.type) {
    case 'NEW_TODO':
      return {
        todos: state.todos.concat([{
          id: state.todos.length,
          done: false,
          text: action.data.text,
        }])
      }
    case 'TOGGLE_TODO':
      const id = action.id
      debugger
      return {
        todos: state.todos.map(todo => {
          if (todo.id === id) {
            return {...todo, done: !todo.done}
          } else {
            return todo
          }
        })
      }
    default:
      return state
  }
}
