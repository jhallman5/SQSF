const initialState = 0

export default function reducer(state = initialState, action) {
  switch(action.type){
    case 'INCREMENT_PAGE': {
      return ++state
    }
    case 'DECREMENT_PAGE': {
      return --state
    }
    default: {
      return state
    }
  }
}
