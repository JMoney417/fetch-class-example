
// use fetch to GET data
fetch('https://thawing-bayou-14704.herokuapp.com/labels?limit=12', 
  { method: 'GET',
  })
.then((response)=> {
  return response.json()
})
.then(console.log)
.catch(console.error)

// abstract fetch to its own function
function request(url, method='GET', body) {
  const options = { method }
  if (method !== 'GET' ) {
    options.body = body
  }
  return fetch(url, options)
  .then( response => {
    return response.json()
  })
}

// use request to do a HTTP request
request('https://thawing-bayou-14704.herokuapp.com/labels?limit=12')
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.log(error)
})