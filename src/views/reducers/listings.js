const initialState = []

export default function reducer(state = initialState, action) {
  switch(action.type){
    case 'FETCH_DATA_FULFILLED': {
      return action.payload
    }
    case 'FETCH_MOCK_FULFILLED': {
      return action.payload
    }
    default: {
      return state
    }
  }
}
