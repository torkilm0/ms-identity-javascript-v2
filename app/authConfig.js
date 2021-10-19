const msalConfig = {
    auth: {
        clientId: "9a71cda0-f2a3-4224-8a9d-445eea62a8e7",
        authority: "https://login.microsoftonline.com/831195d3-b68b-433a-8687-4cdb1532958e",
        redirectUri: "http://localhost:3000",
        // redirectUri: "https://proud-stone-024659c03.azurestaticapps.net/",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

const loginRequest = {
    scopes: ["openid", "profile", "User.Read"]
};

const funcRequest = {
    scopes: ["api://e0af4dcf-33bd-4599-9b16-7f0f7f2cc7ba/user_impersonation"]
};
