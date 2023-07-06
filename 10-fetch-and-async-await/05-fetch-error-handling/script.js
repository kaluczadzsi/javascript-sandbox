// fetch('http://httpstat.us/200')
//   .then((resp) => resp)
//   .then(() => {
//     console.log('success');
//   });

// fetch('http://httpstat.us/404')
//   .then((resp) => {
//     if (!resp.ok) {
//       throw new Error('Request Failed');
//     }
//     return resp;
//   })
//   .then(() => {
//     console.log('Success');
//   })
//   .catch((error) => console.log(error));

// Check for specific code
fetch('http://httpstat.us/200')
  .then((resp) => {
    if (resp.status === 404) {
      throw new Error('Not found');
    } else if (resp.status === 500) {
      throw new Error('Server Error');
    } else if (resp.status != 401) {
      throw new Error('Request Failed');
    }
    return resp;
  })
  .then(() => {
    console.log('Success');
  })
  .catch((error) => console.log(error));

// Catch runs on a network error
// fetch('http://hello123.net')
//   .then((resp) => resp)
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => console.log(error));
