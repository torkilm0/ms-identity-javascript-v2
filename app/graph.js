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

function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}

// // function callMSFunc(endpoint, token, callback,msg,to) {
// function callMSFunc(endpoint, token, callback) {
//     const headers = new Headers();
//     const bearer = `Bearer ${token}`;


//     headers.append("Authorization", bearer);
//     headers.append("Content-type", "application/json; charset=UTF-8");
//     // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');

//     var reciever = document.getElementById("lto").value;
//     var msg = document.getElementById("lmsg").value;



//     let _data = {
//         target: document.getElementById("lto").value,
//         msg: document.getElementById("lmsg").value,
//         sender: username
//     }

//     const options = {
//         method: "POST",
//         headers: headers,
//         body: JSON.stringify(_data),
//         // mode: 'no-cors'
//     };


//     // data to be sent to the POST request
//     if (!isEmptyOrSpaces(reciever)) {
//         if (!isEmptyOrSpaces(msg)) {





//             console.log('request made to Graph API at: ' + new Date().toString());
//             console.log('Body: ' + (JSON.stringify(_data)));
//             var url = endpoint
//             const response = await fetch(url, options);
//             fetch(endpoint, options)
//                 .then(response => response.json())
//                 .then(json => console.log(json))
//                 .catch(error => console.log(error));

//                 document.getElementById("lmsg").value = '';
//                 reciever = document.getElementById("lto").value = '';
            
//         }
//     }


// }