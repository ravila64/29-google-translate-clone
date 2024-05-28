import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Button } from 'react-bootstrap';
import { ReducerAction, useReducer } from 'react';

// 1. create a initialState
const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

//2. create reducer
function reducer(state: typeof initialState, action) {
  const { type, payload } = action
  switch (action.type) {
    case 'INTERCHANGE_LANGUAGES':
      return { ...state, fromLanguage: state.toLanguage, toLanguage: state.fromLanguage }
    case 'SET_FROM_LANGUAGE':
      return { ...state, fromLanguage: payload }
    case 'SET_TO_LANGUAGE':
      return { ...state, loading: true, fromText: payload, result: '' }
    case 'SET_FROM_TEXT':
      return { ...state, fromText: payload }
    case 'SET_RESULT':
      return { ...state, loading: false, result: payload }
    case 'SET_LOADING':
      return { ...state, result: payload }
    default:
      return state
  }
  // if (type === 'INTERCHANGE_LANGUAGES') {
  //   return {
  //     ...state,
  //     fromLanguage: state.toLanguage,
  //     toLanguage: state.fromLanguage
  //   }
  // }

  // if (type === 'SET_FROM_LANGUAGE') {
  //   return { ...state, fromLanguage: payload }
  // }

  // if (type === 'SET_TO_LANGUAGE') {
  //   return { ...state, toLanguage: payload }
  // }

  // if (type === 'SET_FROM_TEXT') {
  //   return { ...state, loading: true, fromText: payload, result: '' }
  // }

  // if (type === 'SET_RESULT') {
  //   return { ...state, loading: false, result: payload }
  // }

  // return state
}



function App() {
  // 3  usar el estado useReducer. hook
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <div className='App'>
        <h1>Google Translate</h1>
        <Button as="a" variant="primary">
          Button as link, del next
        </Button>
      </div>
    </>
  )
}
export default App
