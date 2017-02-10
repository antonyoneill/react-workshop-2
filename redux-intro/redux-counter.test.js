import { createStore } from 'redux'

const reducer = (state, action) => {
  if (!state) state = 0

  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    case "RESET":
      return 0
    case "INCREMENT_BY":
      return state + action.data.value
  }

  return state
}

let store = null;

beforeEach(()=> {
  store = createStore(reducer)
})
// your job is to get all of these tests passing

test('the store is 0 by default', () => {
  expect(store.getState()).toEqual(0)
})

test('I can dispatch INCREMENT to put the store up by one', () => {
  store.dispatch({ type: 'INCREMENT' })
  expect(store.getState()).toEqual(1)
})

test('I can dispatch DECREMENT to put the store down by one', () => {
  store.dispatch({ type: 'DECREMENT' })
  expect(store.getState()).toEqual(-1)
})

test('I can dispatch RESET to put the store down by one', () => {
  store.dispatch({ type: 'DECREMENT' })
  store.dispatch({ type: 'RESET' })
  expect(store.getState()).toEqual(0)
})

test('I can dispatch INCREMENT_BY and a value to increment the store by a number', () => {
  store.dispatch({ type: 'INCREMENT_BY', data: { value: 4 } })
  expect(store.getState()).toEqual(4)
})
