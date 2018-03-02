const initialState = {
  data: false
}

export default function reducer(state = initialState, action) {
  switch(action.type){
    case 'FETCH_DATA_FULFILLED': {
      return {
        ...state,
        data: action.payload
      }
    }
    default: {
      return state
    }
  }
}
