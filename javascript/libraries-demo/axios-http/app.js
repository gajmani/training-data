var axe = axios.create({
    url: '/data/test-data.json',
    method: 'get',
    timeout: 600000,
    headers: {'X-Custom-Header': 'foobar'},
    responseType: 'json'
});

var promise = axe.request().then(function(response) {
    // console.log(response.data);
    console.log(response.status + " : " + response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
}).catch(function (response) {
    if (response instanceof Error) {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', response.message);
    } else {
        debugger;
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      console.log(response.data);
      console.log(response.status);
      console.log(response.headers);
      console.log(response.config);
    }
  });

console.log(promise);