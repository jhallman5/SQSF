const initialState = {
  currentPage: 0,
  listingsPerPage: 4,
  maxPage: 2
}

export default function reducer(state = initialState, action) {
  switch(action.type){
    case 'INCREMENT_PAGE': {
      return {
        ...state,
        currentPage: ++state.currentPage
      }
    }
    case 'DECREMENT_PAGE': {
      return  {
        ...state,
        currentPage: --state.currentPage
      }
    }
    case 'SET_MAX_PAGE': {
      return {
        ...state,
        maxPage: action.payload
      }
    }
    default: {
      return state
    }
  }
}
