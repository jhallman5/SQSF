export function fetchData() {
  return {
    type: 'FETCH_DATA',
    payload: new Promise((resolve, reject) => {
      fetch('/Zillow_API')
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => console.log('Error in Action', error))
    })
  }
}

export function fetchMock() {
  return {
    type: 'FETCH_MOCK',
    payload: new Promise((resolve, reject) => {
      fetch('/MockData')
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => console.log('Error in Action', error))
    })
  }
}

export function incrementPage() {
  return {
    type:'INCREMENT_PAGE'
  }
}

export function decrementPage() {
  return {
    type: 'DECREMENT_PAGE'
  }
}
