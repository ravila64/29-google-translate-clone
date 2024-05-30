// this is one reducer 
import { useReducer } from "react"
import { type Action, type State } from "../types/languages"
import { type FromLanguage, type Language } from "../types/languages"
import { AUTO_LANGUAGE } from "../constants"

// 1. create a initialState
const initialState: State = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false
  }
  
  //2. create reducer
  function reducer(state: State, action: Action) {
    const { type } = action
    if (type === 'INTERCHANGE_LANGUAGES') {
      // logica del estado dentro del reducer
      // lo evitamos en los componentes
      if(state.fromLanguage===AUTO_LANGUAGE) return state
      return { ...state, fromLanguage: state.toLanguage, toLanguage: state.fromLanguage }
    }
  
    if (type === 'SET_FROM_LANGUAGE') {
      return { ...state, fromLanguage: action.payload }
    }
  
    if (type === 'SET_TO_LANGUAGE') {
      return { ...state, fromText: action.payload }
    }
  
    if (type === 'SET_FROM_TEXT') {
      return { ...state, loading: false, result: action.payload }
    }
  
    if (type === 'SET_RESULT') {
      return { ...state, loading: false, result: action.payload }
    }
  
    return state
  }

  export function useStore(){
     // 3  usar el estado useReducer. hook
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading 
    }, dispatch] = useReducer(reducer, initialState)
    
    //console.log({fromLanguage}) // utilizo console-ninja para ver cambios en variables

    const interchangeLanguages =()=>{
        dispatch({type:'INTERCHANGE_LANGUAGES'})
    }
    const setFromLanguage=(payload:FromLanguage)=>{
        dispatch({type:'SET_FROM_LANGUAGE', payload})
    }
    const setToLanguage=(payload:Language)=>{
        dispatch({type:'SET_TO_LANGUAGE', payload})
    }
    const setFromText=(payload:string)=>{
        dispatch({type:'SET_FROM_TEXT', payload})
    }
    const setResult=(payload:string)=>{
        dispatch({type:'SET_RESULT', payload})
    }

   return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
   }
 }