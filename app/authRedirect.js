// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new msal.PublicClientApplication(msalConfig);
// const myMSALObjFunc = new msal.PublicClientApplication(msalConfig);

let accessToken;
let username = "";

// Redirect: once login is successful and redirects with tokens, call Graph API
myMSALObj.handleRedirectPromise().then(handleResponse).catch(err => {
    console.error(err);
});

function handleResponse(resp) {
    if (resp !== null) {
        username = resp.account.username;
        showWelcomeMessage(resp.account);
    } else {
        /**
         * See here for more info on account retrieval:
         * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
         */
        const currentAccounts = myMSALObj.getAllAccounts();
        if (currentAccounts === null) {
            return;
        } else if (currentAccounts.length > 1) {
            // Add choose account code here
            console.warn("Multiple accounts detected.");
        } else if (currentAccounts.length === 1) {
            username = currentAccounts[0].username;
            showWelcomeMessage(currentAccounts[0]);
        }
    }
}

function signIn() {
    myMSALObj.loginRedirect(loginRequest);
}

function signOut() {
    const logoutRequest = {
        account: myMSALObj.getAccountByUsername(username)
    };

    myMSALObj.logout(logoutRequest);
}

function getTokenRedirect(request) {
    /**
     * See here for more info on account retrieval:
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
     */
    //  myMSALObj = new msal.PublicClientApplication(msalConfig);
    request.account = myMSALObj.getAccountByUsername(username);
    return myMSALObj.acquireTokenSilent(request).catch(error => {
        console.warn("silent token acquisition fails. acquiring token using redirect");
        if (error instanceof msal.InteractionRequiredAuthError) {
            // fallback to interaction when silent call fails
            return myMSALObj.acquireTokenRedirect(request);
        } else {
            console.warn(error);
        }
    });
}

// function getTokenRedirectFunc(request) {
//     /**
//      * See here for more info on account retrieval:
//      * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
//      */
//     request.account = myMSALObjFunc.getAccountByUsername(username);
//     return myMSALObjFunc.acquireTokenSilent(request).catch(error => {
//             console.warn("silent token acquisition fails. acquiring token using redirect");
//             if (error instanceof msal.InteractionRequiredAuthError) {
//                 // fallback to interaction when silent call fails
//                 return myMSALObjFunc.acquireTokenRedirect(request);
//             } else {
//                 console.warn(error);
//             }
//         });
// }

function seeProfile() {
    getTokenRedirect(loginRequest).then(response => {
        callMSGraph(graphConfig.graphMeEndpoint, response.accessToken, updateUI);
        profileButton.classList.add('d-none');
        mailButton.classList.remove('d-none');
    }).catch(profileError => {
        console.log(profileError);
    });
}

function callFunc() {
    getTokenRedirect(funcRequest).then(response => {
        var funcToken = null;
        funcToken = response.accessToken
        console.log(funcToken);
        callMSFunc(graphConfig.funcEndpoint, funcToken, updateUI);
    }).catch(error => {
        console.error(error);
    });
}

function readMail() {
    getTokenRedirect(tokenRequest).then(response => {
        callMSGraph(graphConfig.graphMailEndpoint, response.accessToken, updateUI);
    }).catch(error => {
        console.error(error);
    });
}



function btn1() {
    getTokenRedirect(loginRequest).then(accessToken => {
        const bearer = ('Bearer  ' + accessToken.accessToken);
        headers = {
            "Authorization": bearer
        }
        // headers.append("Content-type", "application/json; charset=UTF-8");
        // console.log(JSON.stringify(headers));
        // console.log(JSON.stringify(bearer));
        // console.log(JSON.stringify(headers));

        const options = {
            method: 'GET',
            headers: headers,
        };

        // console.log(JSON.stringify(options));

        fetch('https://graph.microsoft.com/v1.0/me', options).then(response => {
            console.log(response.status);
            const result = response.json();
            result.then(entry => {
                // console.log(res);
                console.log((entry));
                console.log((entry.givenName));
                let html = '';
                // let entry = dataResponse.json()
                // dataResoponse.forEach(entry => {
                // let htmlSegment = `<div class="user">`
                let htmlSegment = `<table cellspacing="0" rules="all" border="1" id="Table1x" style="border-collapse: collapse;">
                <tr>
                    <th>&nbsp;</th>
                    <th style="width:120px">Attribute</th>
                    <th style="width:220px">Value</th>
                </tr>`
                let hit = false;
                for (const [key, value] of Object.entries(entry)) {
                    console.log(`${key}: ${value}`);
                    console.log(value);
                    if (value !== null) {
                        if (key !== null) {
                            if (!(key.startsWith("@odata"))) {
                                if (!(Object.keys(value).length === 0)) {
                                    // htmlSegment += `<p>${key}: ${value}</p>`


                                    htmlSegment += `    <tr>
                                    <td><input type="checkbox"/></td>
                                    <td>${key}</td>
                                    <td>${value}</td>
                                </tr>`
                                    hit = true;
                                }
                            }
                        }
                    }
                }
                htmlSegment += ` </table>
                <br />
                <input type="button" value="Get Selected" onclick="GetSelected()" />`;
                if (hit) {
                    html += htmlSegment;
                    // });
                    // let container = document.querySelector('.magic');
                    magicDiv.innerHTML = html;
                }
                // container.innerHTML = html;


            })
        }).catch(requestError => {
            console.error(requestError);
        });


    }).catch(tokenError => {
        console.error(tokenError);
    });
}
function GetSelected() {
    //Reference the Table.
    var grid = document.getElementById("Table1x");

    //Reference the CheckBoxes in Table.
    var checkBoxes = grid.getElementsByTagName("INPUT");
    var message = "Attribute                  Value\n";

    //Loop through the CheckBoxes.
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            var row = checkBoxes[i].parentNode.parentNode;
            message += row.cells[1].innerHTML;
            message += "                  " + row.cells[2].innerHTML;
            // message += "   " + row.cells[3].innerHTML;
            message += "\n";
        }
    }

    //Display selected Row data in Alert Box.
    alert(message);
}

// Fetch.js
// const _apiHost = 'https://api.service.com/v1';

// async function request(url, params, method, accessToken) {
//     // const bearer = `Bearer ${accessToken}`;


//     // const headers = new Headers();
//     const bearer = ('Bearer  ' + accessToken);

//     // headers.append("Authorization", bearer);

//     headers = {
//         "Authorization": bearer
//     }
//     // headers.append("Content-type", "application/json; charset=UTF-8");
//     // console.log(JSON.stringify(headers));
//     const options = {
//         method: method,
//         headers: headers,
//         // body: JSON.stringify(_data),
//         // mode: 'no-cors'
//     };

//     if (params) {
//         if (method === 'GET') {
//             if (!isEmptyOrSpaces(params)) {
//                 url += '?' + objectToQueryString(params);
//             }
//         } else {
//             options.body = JSON.stringify(params);
//         }
//     }
//     console.log(JSON.stringify(options));
//     await fetch(url, options).then(response => {
//         if (response.status !== 200) {
//             return generateErrorResponse('The server responded with an unexpected status.');
//         }

//         const result = response.json();
//         result.then(res => {
//             console.log(res);
//             return res;
//         })
//     })
// }

// function objectToQueryString(obj) {
//     return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
// }

// function generateErrorResponse(message) {
//     return {
//         status: 'error',
//         message
//     };
// }

// async function get(url, accessToken) {
//     params = null;
//     method = 'GET'
//     return request(url, params, method, accessToken);
// }

// function create(url, params, accessToken) {
//     return request(url, params, 'POST', accessToken);
// }

// function update(url, params, accessToken) {
//     return request(url, params, 'PUT'), accessToken;
// }

// function remove(url, params, accessToken) {
//     return request(url, params, 'DELETE', accessToken);
// }



// import { get } from './Fetch.js';


// async function renderUsersx() {
//     await getTokenRedirect(loginRequest).then(accessToken => {
//         // console.log(JSON.stringify(accessToken.accessToken));
//         get('https://graph.microsoft.com/v1.0/me', accessToken.accessToken).then(
//             dataResponse => {

//                 console.log((dataResponse));
//                 let html = '';
//                 dataResoponse.forEach(entry => {
//                     let htmlSegment = `<div class="user">
//                                         <h2>${entry.givenName} ${entry.surname}</h2>
//                                         <div class="email"><a href="email:${entry.mail}">${entry.mail}</a></div>
//                                     </div>`;

//                     html += htmlSegment;
//                 });
//                 let container = document.querySelector('.magic');
//                 container.innerHTML = html;
//             })
//     }).catch(error => {
//         console.error(error);
//     });
// }
    //  getTokenRedirect(funcRequest);
    // let users = await getUsers();
    // console.log(JSON.stringify(thisToken));
    // const dataResoponse = await get('https://graph.microsoft.com/v1.0/me', thisToken)
    // dataResoponse.then(dataRes => {
    //     console.log(JSON.stringify(dataRes))

    // let dataRes = request('https://graph.microsoft.com/v1.0/me', '', 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IlpkOTEzSlRaOTl1MW1IMi1CYzN5Z1RnaTZQdERCQlZaQmlIc3Rqb2RjRzgiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84MzExOTVkMy1iNjhiLTQzM2EtODY4Ny00Y2RiMTUzMjk1OGUvIiwiaWF0IjoxNjM0NTc3NzE0LCJuYmYiOjE2MzQ1Nzc3MTQsImV4cCI6MTYzNDU4MTYxNCwiYWNjdCI6MCwiYWNyIjoiMSIsImFjcnMiOlsidXJuOnVzZXI6cmVnaXN0ZXJzZWN1cml0eWluZm8iXSwiYWlvIjoiQVVRQXUvOFRBQUFBamJDMEFBWTg0a21CNDBUUXpySVdaenRJSm83VXVMTklUdzMxU0t6N2tQOHQ1SEhyUGhWZDc4MjNiYVlBUm5DdHFBT2tOekVPSEhBc00zUzR3dm9oRHc9PSIsImFtciI6WyJyc2EiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiR3JhcGggRXhwbG9yZXIiLCJhcHBpZCI6ImRlOGJjOGI1LWQ5ZjktNDhiMS1hOGFkLWI3NDhkYTcyNTA2NCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiTW9lIiwiZ2l2ZW5fbmFtZSI6IlRvcmtpbCIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjE0OC4yNTIuNzMuMTA3IiwibmFtZSI6IkFkbWluIC0gVG9ya2lsIE1vZSIsIm9pZCI6IjE3NTI3ZmVkLTZhYzUtNDI2ZC1iMGVlLWU0MDE2MjE2MTM0ZCIsInBsYXRmIjoiOCIsInB1aWQiOiIxMDAzMjAwMDlENThFNzQzIiwicmgiOiIwLkFRa0EwNVVSZzR1Mk9rT0doMHpiRlRLVmpyWElpOTc1MmJGSXFLMjNTTnB5VUdRSkFLdy4iLCJzY3AiOiJEZXZpY2VNYW5hZ2VtZW50QXBwcy5SZWFkLkFsbCBEZXZpY2VNYW5hZ2VtZW50Q29uZmlndXJhdGlvbi5SZWFkLkFsbCBEZXZpY2VNYW5hZ2VtZW50TWFuYWdlZERldmljZXMuUmVhZC5BbGwgRGV2aWNlTWFuYWdlbWVudFNlcnZpY2VDb25maWcuUmVhZC5BbGwgRGlyZWN0b3J5LlJlYWQuQWxsIEVudGl0bGVtZW50TWFuYWdlbWVudC5SZWFkLkFsbCBFbnRpdGxlbWVudE1hbmFnZW1lbnQuUmVhZFdyaXRlLkFsbCBHcm91cC5SZWFkLkFsbCBHcm91cC5SZWFkV3JpdGUuQWxsIEdyb3VwTWVtYmVyLlJlYWQuQWxsIG9wZW5pZCBQcml2aWxlZ2VkQWNjZXNzLlJlYWQuQXp1cmVBRCBwcm9maWxlIFVzZXIuUmVhZCBVc2VyLlJlYWQuQWxsIFVzZXIuUmVhZFdyaXRlLkFsbCBVc2VyQXV0aGVudGljYXRpb25NZXRob2QuUmVhZC5BbGwgZW1haWwiLCJzdWIiOiJmRWgyUkdSNFVGTWVVLXU4NG5uWkI3REg0eUswSjV5dFFkU3F1VlBrc2VvIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkVVIiwidGlkIjoiODMxMTk1ZDMtYjY4Yi00MzNhLTg2ODctNGNkYjE1MzI5NThlIiwidW5pcXVlX25hbWUiOiJhZG1pbi50b3JraWwubW9lQHRyb25kaGVpbS5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZG1pbi50b3JraWwubW9lQHRyb25kaGVpbS5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJsdmExWEpLR05VLWd5RVYycnNoLUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJlODYxMWFiOC1jMTg5LTQ2ZTgtOTRlMS02MDIxM2FiMWY4MTQiLCI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3N0Ijp7InN1YiI6ImZfUk9hUUMyNy02cWVrc2N6VXF2UTYtSUdwanMtdUtESlpRQlRlVWV4TVkifSwieG1zX3RjZHQiOjEzODg2ODc1NTh9.eIAnpEdl8_oJ1zbMg4LtHZbWAbeagWabTmWElE9iZfMes_SuumdYG1YRX7tpjdnOtdt1XNjCaglBwrOaTsWN6xPW6NO_NlsVn-fMrTmmpL77pua4hZMQFUB8N1prblCdpaozM-SNXncDm00h5g_7o_5B82g48dUF2NUWAM-he281AQGFnl0IWomRvwp-h0pdWISfJMZdjCemxiRdc0Ag0RP_k3qBZu5kQtIX2w5qHPQFJuMVrvP31kaWm1dKIWi4eQAfLTYKVYf0BBWuXQlbTcRDNxfrHvgblvnsc2FzQfYVubZe5Wu-jCJH7ozxxhXuiomeGsCdPLoy2c0_TTqy3g')
    // console.log(JSON.stringify(dataResoponse))
    // let html = '';
    // dataResoponse.forEach(entry => {
    //     let htmlSegment = `<div class="user">
    //                             <h2>${entry.givenName} ${entry.surname}</h2>
    //                             <div class="email"><a href="email:${entry.mail}">${entry.mail}</a></div>
    //                         </div>`;

    //     html += htmlSegment;
    // });

    // let container = document.querySelector('.magic');
    // container.innerHTML = html;





// renderUsers();

// export default {
//     get,
//     create,
//     update,
//     remove,
//     renderUsers
// };