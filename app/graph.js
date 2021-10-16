// Helper function to call Microsoft Graph API endpoint
// using authorization bearer token scheme
function callMSGraph(endpoint, token, callback) {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    console.log('request made to Graph API at: ' + new Date().toString());

    fetch(endpoint, options)
        .then(response => response.json())
        .then(response => callback(response, endpoint))
        .catch(error => console.log(error));
}

// function callMSFunc(endpoint, token, callback,msg,to) {
function callMSFunc(endpoint, token, callback) {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;


    headers.append("Authorization", bearer);
    headers.append("Content-type", "application/json; charset=UTF-8");
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');

    let _data = {
        target: '41439162',
        msg: 'vicenajs',
        sender: 'kjærest'
    }

    const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(_data),
        // mode: 'no-cors'
    };


    // data to be sent to the POST request

    console.log('request made to Graph API at: ' + new Date().toString());
    console.log('Body: ' + (JSON.stringify(_data)));
    fetch(endpoint, options)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));
}