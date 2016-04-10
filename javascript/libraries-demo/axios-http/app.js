var requestConfig = {
    method: 'get',
    timeout: 600000,
    headers: {'X-Custom-Header': 'foobar'},
    responseType: 'json'
};

Promise.config({
    cancellation: true
});

function callToServer(){
    var promise = axios.get('http://graph.facebook.com/vijaysarin', null, requestConfig).then(function(response) {
        console.log(response.status + " : " + response.statusText);
    }).catch(function (response) {
        if (response instanceof Error) {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', response.message);
        } else {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(response.status + " : " + response.statusText);
        }
    });
    setTimeout(function(){
        promise.cancel();    
    }, 0);    
}

