// Fetch.js
// const _apiHost = 'https://api.service.com/v1';

async function request(url, params, method, accessToken) {
    // const bearer = `Bearer ${accessToken}`;


    // const headers = new Headers();
    const bearer = ('Bearer  ' + accessToken);
    
    // headers.append("Authorization", bearer);

    headers = {
        "Authorization": bearer
    }
    // headers.append("Content-type", "application/json; charset=UTF-8");
    console.log(JSON.stringify(headers));
    const options = {
        method: method,
        headers: headers,
        // body: JSON.stringify(_data),
        // mode: 'no-cors'
    };

    if (params) {
        if (method === 'GET') {
            if (!isEmptyOrSpaces(params)) {
                url += '?' + objectToQueryString(params);
            }
        } else {
            options.body = JSON.stringify(params);
        }
    }
    // console.log(JSON.stringify(options));
    const response = await fetch(url, options)
    
    if (response.status !== 200) {
        return generateErrorResponse('The server responded with an unexpected status.');
    }

    // const result = await response.json();
    const result = await response
    console.log(result.json())
    return result;

}

function objectToQueryString(obj) {
    return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
}

function generateErrorResponse(message) {
    return {
        status: 'error',
        message
    };
}

function get(url, accessToken) {
    params = null;
    method = 'GET'
    return request(url, params,method, accessToken);
}

function create(url, params, accessToken) {
    return request(url, params, 'POST', accessToken);
}

function update(url, params, accessToken) {
    return request(url, params, 'PUT'), accessToken;
}

function remove(url, params, accessToken) {
    return request(url, params, 'DELETE', accessToken);
}



// import { get } from './Fetch.js';


async function renderUsers() {

    var funcToken = null;
    // getTokenRedirect(funcRequest).then(response => {
       
    //     funcToken = response.accessToken
    //     console.log(funcToken);
    //     callMSFunc(graphConfig.funcEndpoint, funcToken, updateUI);
    // }


    // getTokenRedirect();
    // let users = await getUsers();
    let dataRes = await get('https://graph.microsoft.com/v1.0/me',funcToken)
    console.log(dataRes);
    // let dataRes = request('https://graph.microsoft.com/v1.0/me', '', 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IlpkOTEzSlRaOTl1MW1IMi1CYzN5Z1RnaTZQdERCQlZaQmlIc3Rqb2RjRzgiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84MzExOTVkMy1iNjhiLTQzM2EtODY4Ny00Y2RiMTUzMjk1OGUvIiwiaWF0IjoxNjM0NTc3NzE0LCJuYmYiOjE2MzQ1Nzc3MTQsImV4cCI6MTYzNDU4MTYxNCwiYWNjdCI6MCwiYWNyIjoiMSIsImFjcnMiOlsidXJuOnVzZXI6cmVnaXN0ZXJzZWN1cml0eWluZm8iXSwiYWlvIjoiQVVRQXUvOFRBQUFBamJDMEFBWTg0a21CNDBUUXpySVdaenRJSm83VXVMTklUdzMxU0t6N2tQOHQ1SEhyUGhWZDc4MjNiYVlBUm5DdHFBT2tOekVPSEhBc00zUzR3dm9oRHc9PSIsImFtciI6WyJyc2EiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiR3JhcGggRXhwbG9yZXIiLCJhcHBpZCI6ImRlOGJjOGI1LWQ5ZjktNDhiMS1hOGFkLWI3NDhkYTcyNTA2NCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiTW9lIiwiZ2l2ZW5fbmFtZSI6IlRvcmtpbCIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjE0OC4yNTIuNzMuMTA3IiwibmFtZSI6IkFkbWluIC0gVG9ya2lsIE1vZSIsIm9pZCI6IjE3NTI3ZmVkLTZhYzUtNDI2ZC1iMGVlLWU0MDE2MjE2MTM0ZCIsInBsYXRmIjoiOCIsInB1aWQiOiIxMDAzMjAwMDlENThFNzQzIiwicmgiOiIwLkFRa0EwNVVSZzR1Mk9rT0doMHpiRlRLVmpyWElpOTc1MmJGSXFLMjNTTnB5VUdRSkFLdy4iLCJzY3AiOiJEZXZpY2VNYW5hZ2VtZW50QXBwcy5SZWFkLkFsbCBEZXZpY2VNYW5hZ2VtZW50Q29uZmlndXJhdGlvbi5SZWFkLkFsbCBEZXZpY2VNYW5hZ2VtZW50TWFuYWdlZERldmljZXMuUmVhZC5BbGwgRGV2aWNlTWFuYWdlbWVudFNlcnZpY2VDb25maWcuUmVhZC5BbGwgRGlyZWN0b3J5LlJlYWQuQWxsIEVudGl0bGVtZW50TWFuYWdlbWVudC5SZWFkLkFsbCBFbnRpdGxlbWVudE1hbmFnZW1lbnQuUmVhZFdyaXRlLkFsbCBHcm91cC5SZWFkLkFsbCBHcm91cC5SZWFkV3JpdGUuQWxsIEdyb3VwTWVtYmVyLlJlYWQuQWxsIG9wZW5pZCBQcml2aWxlZ2VkQWNjZXNzLlJlYWQuQXp1cmVBRCBwcm9maWxlIFVzZXIuUmVhZCBVc2VyLlJlYWQuQWxsIFVzZXIuUmVhZFdyaXRlLkFsbCBVc2VyQXV0aGVudGljYXRpb25NZXRob2QuUmVhZC5BbGwgZW1haWwiLCJzdWIiOiJmRWgyUkdSNFVGTWVVLXU4NG5uWkI3REg0eUswSjV5dFFkU3F1VlBrc2VvIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkVVIiwidGlkIjoiODMxMTk1ZDMtYjY4Yi00MzNhLTg2ODctNGNkYjE1MzI5NThlIiwidW5pcXVlX25hbWUiOiJhZG1pbi50b3JraWwubW9lQHRyb25kaGVpbS5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZG1pbi50b3JraWwubW9lQHRyb25kaGVpbS5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJsdmExWEpLR05VLWd5RVYycnNoLUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJlODYxMWFiOC1jMTg5LTQ2ZTgtOTRlMS02MDIxM2FiMWY4MTQiLCI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3N0Ijp7InN1YiI6ImZfUk9hUUMyNy02cWVrc2N6VXF2UTYtSUdwanMtdUtESlpRQlRlVWV4TVkifSwieG1zX3RjZHQiOjEzODg2ODc1NTh9.eIAnpEdl8_oJ1zbMg4LtHZbWAbeagWabTmWElE9iZfMes_SuumdYG1YRX7tpjdnOtdt1XNjCaglBwrOaTsWN6xPW6NO_NlsVn-fMrTmmpL77pua4hZMQFUB8N1prblCdpaozM-SNXncDm00h5g_7o_5B82g48dUF2NUWAM-he281AQGFnl0IWomRvwp-h0pdWISfJMZdjCemxiRdc0Ag0RP_k3qBZu5kQtIX2w5qHPQFJuMVrvP31kaWm1dKIWi4eQAfLTYKVYf0BBWuXQlbTcRDNxfrHvgblvnsc2FzQfYVubZe5Wu-jCJH7ozxxhXuiomeGsCdPLoy2c0_TTqy3g')
    let html = '';
    dataRes.forEach(entry => {
        let htmlSegment = `<div class="user">
                            <h2>${entry.givenName} ${entry.surname}</h2>
                            <div class="email"><a href="email:${entry.mail}">${entry.mail}</a></div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.magic');
    container.innerHTML = html;
}

// renderUsers();

// export default {
//     get,
//     create,
//     update,
//     remove,
//     renderUsers
// };