const msalConfig = {
    auth: {
        clientId: "9a71cda0-f2a3-4224-8a9d-445eea62a8e7",
        authority: "https://login.microsoftonline.com/831195d3-b68b-433a-8687-4cdb1532958e",
        redirectUri: "http://localhost:3000",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
const loginRequest = {
    scopes: ["openid", "profile", "User.Read"]
};

// Add scopes here for access token to be used at Microsoft Graph API endpoints.
const tokenRequest = {
    scopes: ["User.Read", "Mail.Read"]
};