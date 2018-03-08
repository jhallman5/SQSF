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
