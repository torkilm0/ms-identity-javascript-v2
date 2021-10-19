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


function compare() {
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
                let htmlSegment = `<table cellspacing="0" cellpadding="0" rules="all" id="Table1x">
                <tr>
                    <th>&nbsp;</th>
                    <th style="width:200px">Attribute</th>
                    <th style="width:400px">Value</th>
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
                                    <td><input type="checkbox" checked/></td>
                                    <td>${key}</td>
                                    <td>${value}</td>
                                </tr>`
                                    hit = true;
                                }
                            }
                        }
                    }
                }
                htmlSegment += ` </table>`;

                // htmlSegment += ` </table>
                // <br />
                // <input type="button" value="Get Selected" onclick="GetSelected()" />`;
                if (hit) {
                    html += htmlSegment;
                    // });
                    // let container = document.querySelector('.magic');
                    
                    magicDiv.innerHTML = html;
                    compareButton.setAttribute("onclick", "copy();");
                    compareButton.setAttribute('class', "btn btn-success")
                    compareButton.innerHTML = "Copy";



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


// function copy() {
//     let message = 'worx';
//     alert(message);
// }

function copy() {
    //Reference the Table.
    var grid = document.getElementById("Table1x");

    //Reference the CheckBoxes in Table.
    var checkBoxes = grid.getElementsByTagName("INPUT");
    var message = "Attribute                  Value\n";
    var values = [];
    //Loop through the CheckBoxes.
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            var row = checkBoxes[i].parentNode.parentNode;
            message += row.cells[1].innerHTML;
            message += "                  " + row.cells[2].innerHTML;
            // message += "   " + row.cells[3].innerHTML;
            message += "\n";
            // console.log(row.cells[1].innerHTML);
            // values += {
            //     "id" : row.cells[1].innerHTML,
            //     "value" : row.cells[2].innerHTML
            // }
            var entity = {}
            entity.id = row.cells[1].innerHTML,
            entity.name = row.cells[2].innerHTML,
            values.push(entity);

            console.log(row.cells[2].innerHTML);
        }
    }

    magicDiv.innerHTML = null;
    compareButton.setAttribute("onclick", "compare();");
    compareButton.setAttribute('class', "btn btn-primary")
    compareButton.innerHTML = "Compare";
    oldMachineInput.value = null;
    newMachineInput.value = null;
    topHeader.innerText = 'Niice!'

    console.log(values);
    //Display selected Row data in Alert Box.
    alert(message);
}
