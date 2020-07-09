const url = 'http://localhost:8000'

// export const changeColorReq = (incomingReq: string) => {
//   try {
//     const joinUrl = `${url}/changeLight`
//     const getResponse = await fetch(joinUrl, {method: 'POST'});
//     if(!getResponse) throw new Error('Get Reponse is not valid')
//     console.log(getResponse);
//   } catch(error) {
//     console.log(err)
//   };
//   // .then(response => response.json())
//   // return getResponse
// }

export const changeColorReq = (incomingReq: string): any => {
  const joinUrl = `${url}/changeLight`
  console.log(incomingReq)
  fetch(joinUrl, {
    mode: 'no-cors',
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify('fsaff')
  })
  .then(() => alert('Thank you for subscribing!'))
  .catch((error) => alert('ERRRR!'));
}

export async function changeLight(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function discoverLight(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


