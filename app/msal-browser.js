/*! @azure/msal-browser v2.0.0-beta.4 2020-07-07 */
'use strict';
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (global = global || self, factory(global.msal = {}));
}(this, (function (exports) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    /*! @azure/msal-common v1.0.0-beta.4 2020-07-07 */
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics$1 = function (d, b) {
        extendStatics$1 = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics$1(d, b);
    };

    function __extends$1(d, b) {
        extendStatics$1(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign$1 = function () {
        __assign$1 = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign$1.apply(this, arguments);
    };

    function __awaiter$1(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator$1(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArrays$1() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * AuthErrorMessage class containing string constants used by error codes and messages.
     */
    var AuthErrorMessage = {
        unexpectedError: {
            code: "unexpected_error",
            desc: "Unexpected error in authentication."
        }
    };
    /**
     * General error class thrown by the MSAL.js library.
     */
    var AuthError = /** @class */ (function (_super) {
        __extends$1(AuthError, _super);
        function AuthError(errorCode, errorMessage) {
            var _this = this;
            var errorString = errorMessage ? errorCode + ": " + errorMessage : errorCode;
            _this = _super.call(this, errorString) || this;
            Object.setPrototypeOf(_this, AuthError.prototype);
            _this.errorCode = errorCode;
            _this.errorMessage = errorMessage;
            _this.name = "AuthError";
            return _this;
        }
        /**
         * Creates an error that is thrown when something unexpected happens in the library.
         * @param errDesc
         */
        AuthError.createUnexpectedError = function (errDesc) {
            return new AuthError(AuthErrorMessage.unexpectedError.code, AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
        };
        return AuthError;
    }(Error));

    var name = "@azure/msal-common";
    var author = {
        name: "Microsoft",
        email: "nugetaad@microsoft.com",
        url: "https://www.microsoft.com"
    };
    var license = "MIT";
    var repository = {
        type: "git",
        url: "https://github.com/AzureAD/microsoft-authentication-library-for-js.git"
    };
    var version = "1.0.0-beta.4";
    var description = "Microsoft Authentication Library for js";
    var keywords = [
        "implicit",
        "authorization code",
        "PKCE",
        "js",
        "AAD",
        "msal",
        "oauth"
    ];
    var main = "./dist/index.js";
    var module = "./dist/index.es.js";
    var types = "./dist/src/index.d.ts";
    var browserslist = [
        "last 1 version",
        "> 1%",
        "maintained node versions",
        "not dead"
    ];
    var engines = {
        node: ">=0.8.0"
    };
    var directories = {
        test: "test"
    };
    var files = [
        "dist"
    ];
    var scripts = {
        clean: "shx rm -rf dist lib",
        "clean:coverage": "rimraf ../../.nyc_output/*",
        doc: "npm run doc:generate && npm run doc:deploy",
        "doc:generate": "typedoc --mode modules --excludePrivate --excludeProtected --excludeNotExported --out ./ref ./src/ --gitRevision dev",
        "doc:deploy": "gh-pages -d ref -a -e ref/msal-common",
        lint: "eslint src --ext .ts",
        test: "mocha",
        "test:coverage": "nyc --reporter=text mocha --exit",
        "test:coverage:only": "npm run clean:coverage && npm run test:coverage",
        "build:modules": "rollup -c",
        "build:modules:watch": "rollup -cw",
        build: "npm run clean && npm run lint && npm run build:modules",
        prepack: "npm run build"
    };
    var devDependencies = {
        "@babel/core": "^7.7.2",
        "@babel/plugin-proposal-class-properties": "^7.7.0",
        "@babel/plugin-proposal-object-rest-spread": "^7.6.2",
        "@babel/polyfill": "^7.7.0",
        "@babel/preset-env": "^7.7.1",
        "@babel/preset-typescript": "^7.7.2",
        "@babel/register": "^7.7.0",
        "@istanbuljs/nyc-config-babel": "^2.1.1",
        "@rollup/plugin-json": "^4.0.0",
        "@types/chai": "^4.2.5",
        "@types/chai-as-promised": "^7.1.2",
        "@types/debug": "^4.1.5",
        "@types/mocha": "^5.2.7",
        "@types/sinon": "^7.5.0",
        "@typescript-eslint/eslint-plugin": "^2.4.0",
        "@typescript-eslint/eslint-plugin-tslint": "^2.4.0",
        "@typescript-eslint/parser": "^2.4.0",
        "babel-plugin-istanbul": "^5.2.0",
        chai: "^4.2.0",
        "chai-as-promised": "^7.1.1",
        eslint: "^6.5.1",
        "gh-pages": "^3.1.0",
        husky: "^3.0.9",
        mocha: "^6.2.2",
        nyc: "^14.1.1",
        rimraf: "^3.0.2",
        rollup: "^1.24.0",
        "rollup-plugin-typescript2": "^0.24.3",
        "rollup-plugin-uglify": "^6.0.4",
        shx: "^0.3.2",
        sinon: "^7.5.0",
        tslib: "^1.10.0",
        tslint: "^5.20.0",
        typedoc: "^0.17.8",
        typescript: "^3.7.5"
    };
    var dependencies = {
        debug: "^4.1.1"
    };
    var pkg = {
        name: name,
        author: author,
        license: license,
        repository: repository,
        version: version,
        description: description,
        keywords: keywords,
        main: main,
        module: module,
        types: types,
        browserslist: browserslist,
        engines: engines,
        directories: directories,
        files: files,
        scripts: scripts,
        devDependencies: devDependencies,
        dependencies: dependencies
    };

    /**
     * ClientAuthErrorMessage class containing string constants used by error codes and messages.
     */
    var ClientAuthErrorMessage = {
        clientInfoDecodingError: {
            code: "client_info_decoding_error",
            desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
        },
        clientInfoEmptyError: {
            code: "client_info_empty_error",
            desc: "The client info was empty. Please review the trace to determine the root cause."
        },
        idTokenParsingError: {
            code: "id_token_parsing_error",
            desc: "ID token cannot be parsed. Please review stack trace to determine root cause."
        },
        nullOrEmptyIdToken: {
            code: "null_or_empty_id_token",
            desc: "The idToken is null or empty. Please review the trace to determine the root cause."
        },
        endpointResolutionError: {
            code: "endpoints_resolution_error",
            desc: "Error: could not resolve endpoints. Please check network and try again."
        },
        invalidAuthorityType: {
            code: "invalid_authority_type",
            desc: "The given authority is not a valid type of authority supported by MSAL. Please review the trace to determine the root cause."
        },
        hashNotDeserialized: {
            code: "hash_not_deserialized",
            desc: "The hash parameters could not be deserialized. Please review the trace to determine the root cause."
        },
        blankGuidGenerated: {
            code: "blank_guid_generated",
            desc: "The guid generated was blank. Please review the trace to determine the root cause."
        },
        invalidStateError: {
            code: "invalid_state",
            desc: "State was not the expected format. Please check the logs to determine whether the request was sent using ProtocolUtils.setRequestState()."
        },
        stateMismatchError: {
            code: "state_mismatch",
            desc: "State mismatch error. Please check your network. Continued requests may cause cache overflow."
        },
        nonceMismatchError: {
            code: "nonce_mismatch",
            desc: "Nonce mismatch error. This may be caused by a race condition in concurrent requests."
        },
        accountMismatchError: {
            code: "account_mismatch",
            desc: "The cached account and account which made the token request do not match."
        },
        invalidIdToken: {
            code: "invalid_id_token",
            desc: "Invalid ID token format."
        },
        noTokensFoundError: {
            code: "no_tokens_found",
            desc: "No tokens were found for the given scopes, and no authorization code was passed to acquireToken. You must retrieve an authorization code before making a call to acquireToken()."
        },
        cacheParseError: {
            code: "cache_parse_error",
            desc: "Could not parse cache key."
        },
        userLoginRequiredError: {
            code: "user_login_error",
            desc: "User login is required."
        },
        multipleMatchingTokens: {
            code: "multiple_matching_tokens",
            desc: "The cache contains multiple tokens satisfying the requirements. " +
                "Call AcquireToken again providing more requirements such as authority or account."
        },
        multipleMatchingAccounts: {
            code: "multiple_matching_accounts",
            desc: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account"
        },
        tokenRequestCannotBeMade: {
            code: "request_cannot_be_made",
            desc: "Token request cannot be made without authorization code or refresh token."
        },
        appendEmptyScopeError: {
            code: "cannot_append_empty_scope",
            desc: "Cannot append null or empty scope to ScopeSet. Please check the stack trace for more info."
        },
        removeEmptyScopeError: {
            code: "cannot_remove_empty_scope",
            desc: "Cannot remove null or empty scope from ScopeSet. Please check the stack trace for more info."
        },
        appendScopeSetError: {
            code: "cannot_append_scopeset",
            desc: "Cannot append ScopeSet due to error."
        },
        emptyInputScopeSetError: {
            code: "empty_input_scopeset",
            desc: "Empty input ScopeSet cannot be processed."
        },
        DeviceCodePollingCancelled: {
            code: "device_code_polling_cancelled",
            desc: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true."
        },
        DeviceCodeExpired: {
            code: "device_code_expired",
            desc: "Device code is expired."
        },
        NoAccountInSilentRequest: {
            code: "no_account_in_silent_request",
            desc: "Please pass an account object, silent flow is not supported without account information"
        },
        invalidCacheRecord: {
            code: "invalid_cache_record",
            desc: "Cache record object was null or undefined."
        },
        invalidCacheEnvironment: {
            code: "invalid_cache_environment",
            desc: "Invalid environment when attempting to create cache entry"
        },
        noAccountFound: {
            code: "no_account_found",
            desc: "No account found in cache for given key."
        },
        CachePluginError: {
            code: "no cache plugin set on CacheManager",
            desc: "ICachePlugin needs to be set before using readFromStorage or writeFromStorage"
        },
        noCryptoObj: {
            code: "no_crypto_object",
            desc: "No crypto object detected. This is required for the following operation: "
        },
        invalidCacheType: {
            code: "invalid_cache_type",
            desc: "Invalid cache type"
        },
        unexpectedAccountType: {
            code: "unexpected_account_type",
            desc: "Unexpected account type."
        },
        unexpectedCredentialType: {
            code: "unexpected_credential_type",
            desc: "Unexpected credential type."
        }
    };
    /**
     * Error thrown when there is an error in the client code running on the browser.
     */
    var ClientAuthError = /** @class */ (function (_super) {
        __extends$1(ClientAuthError, _super);
        function ClientAuthError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            _this.name = "ClientAuthError";
            Object.setPrototypeOf(_this, ClientAuthError.prototype);
            return _this;
        }
        /**
         * Creates an error thrown when client info object doesn't decode correctly.
         * @param caughtError
         */
        ClientAuthError.createClientInfoDecodingError = function (caughtError) {
            return new ClientAuthError(ClientAuthErrorMessage.clientInfoDecodingError.code, ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
        };
        /**
         * Creates an error thrown if the client info is empty.
         * @param rawClientInfo
         */
        ClientAuthError.createClientInfoEmptyError = function (rawClientInfo) {
            return new ClientAuthError(ClientAuthErrorMessage.clientInfoEmptyError.code, ClientAuthErrorMessage.clientInfoEmptyError.desc + " Given Object: " + rawClientInfo);
        };
        /**
         * Creates an error thrown when the id token extraction errors out.
         * @param err
         */
        ClientAuthError.createIdTokenParsingError = function (caughtExtractionError) {
            return new ClientAuthError(ClientAuthErrorMessage.idTokenParsingError.code, ClientAuthErrorMessage.idTokenParsingError.desc + " Failed with error: " + caughtExtractionError);
        };
        /**
         * Creates an error thrown when the id token string is null or empty.
         * @param invalidRawTokenString
         */
        ClientAuthError.createIdTokenNullOrEmptyError = function (invalidRawTokenString) {
            return new ClientAuthError(ClientAuthErrorMessage.nullOrEmptyIdToken.code, ClientAuthErrorMessage.nullOrEmptyIdToken.desc + " Raw ID Token Value: " + invalidRawTokenString);
        };
        /**
         * Creates an error thrown when the endpoint discovery doesn't complete correctly.
         */
        ClientAuthError.createEndpointDiscoveryIncompleteError = function (errDetail) {
            return new ClientAuthError(ClientAuthErrorMessage.endpointResolutionError.code, ClientAuthErrorMessage.endpointResolutionError.desc + " Detail: " + errDetail);
        };
        /**
         * Creates an error thrown if authority type is not valid.
         * @param invalidAuthorityError
         */
        ClientAuthError.createInvalidAuthorityTypeError = function (givenUrl) {
            return new ClientAuthError(ClientAuthErrorMessage.invalidAuthorityType.code, ClientAuthErrorMessage.invalidAuthorityType.desc + " Given Url: " + givenUrl);
        };
        /**
         * Creates an error thrown when the hash cannot be deserialized.
         * @param invalidAuthorityError
         */
        ClientAuthError.createHashNotDeserializedError = function (hashParamObj) {
            return new ClientAuthError(ClientAuthErrorMessage.hashNotDeserialized.code, ClientAuthErrorMessage.hashNotDeserialized.desc + " Given Object: " + hashParamObj);
        };
        /**
         * Creates an error thrown when the state cannot be parsed.
         * @param invalidState
         */
        ClientAuthError.createInvalidStateError = function (invalidState, errorString) {
            return new ClientAuthError(ClientAuthErrorMessage.invalidStateError.code, ClientAuthErrorMessage.invalidStateError.desc + " Invalid State: " + invalidState + ", Root Err: " + errorString);
        };
        /**
         * Creates an error thrown when two states do not match.
         */
        ClientAuthError.createStateMismatchError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.stateMismatchError.code, ClientAuthErrorMessage.stateMismatchError.desc);
        };
        /**
         * Creates an error thrown when the nonce does not match.
         */
        ClientAuthError.createNonceMismatchError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.nonceMismatchError.code, ClientAuthErrorMessage.nonceMismatchError.desc);
        };
        /**
         * Creates an error thrown when the cached account and response account do not match.
         */
        ClientAuthError.createAccountMismatchError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.accountMismatchError.code, ClientAuthErrorMessage.accountMismatchError.desc);
        };
        /**
         * Throws error if idToken is not correctly formed
         * @param idToken
         */
        ClientAuthError.createInvalidIdTokenError = function (idToken) {
            return new ClientAuthError(ClientAuthErrorMessage.invalidIdToken.code, ClientAuthErrorMessage.invalidIdToken.desc + " Given token: " + JSON.stringify(idToken));
        };
        /**
         * Creates an error thrown when the authorization code required for a token request is null or empty.
         */
        ClientAuthError.createNoTokensFoundError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.noTokensFoundError.code, ClientAuthErrorMessage.noTokensFoundError.desc);
        };
        /**
         * Creates an error in cache parsing.
         */
        ClientAuthError.createCacheParseError = function (cacheKey) {
            return new ClientAuthError(ClientAuthErrorMessage.cacheParseError.code, ClientAuthErrorMessage.cacheParseError.desc + " Cache key: " + cacheKey);
        };
        /**
         * Throws error when renewing token without login.
         */
        ClientAuthError.createUserLoginRequiredError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.userLoginRequiredError.code, ClientAuthErrorMessage.userLoginRequiredError.desc);
        };
        /**
         * Throws error when multiple tokens are in cache for the given scope.
         * @param scope
         */
        ClientAuthError.createMultipleMatchingTokensInCacheError = function (scope) {
            return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingTokens.code, "Cache error for scope " + scope + ": " + ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
        };
        /**
         * Throws error when multiple tokens are in cache for the given scope.
         * @param scope
         */
        ClientAuthError.createMultipleMatchingAccountsInCacheError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingAccounts.code, ClientAuthErrorMessage.multipleMatchingAccounts.desc);
        };
        /**
         * Throws error when no auth code or refresh token is given to ServerTokenRequestParameters.
         */
        ClientAuthError.createTokenRequestCannotBeMadeError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.tokenRequestCannotBeMade.code, ClientAuthErrorMessage.tokenRequestCannotBeMade.desc);
        };
        /**
         * Throws error when attempting to append a null, undefined or empty scope to a set
         * @param givenScope
         */
        ClientAuthError.createAppendEmptyScopeToSetError = function (givenScope) {
            return new ClientAuthError(ClientAuthErrorMessage.appendEmptyScopeError.code, ClientAuthErrorMessage.appendEmptyScopeError.desc + " Given Scope: " + givenScope);
        };
        /**
         * Throws error when attempting to append a null, undefined or empty scope to a set
         * @param givenScope
         */
        ClientAuthError.createRemoveEmptyScopeFromSetError = function (givenScope) {
            return new ClientAuthError(ClientAuthErrorMessage.removeEmptyScopeError.code, ClientAuthErrorMessage.removeEmptyScopeError.desc + " Given Scope: " + givenScope);
        };
        /**
         * Throws error when attempting to append null or empty ScopeSet.
         * @param appendError
         */
        ClientAuthError.createAppendScopeSetError = function (appendError) {
            return new ClientAuthError(ClientAuthErrorMessage.appendScopeSetError.code, ClientAuthErrorMessage.appendScopeSetError.desc + " Detail Error: " + appendError);
        };
        /**
         * Throws error if ScopeSet is null or undefined.
         * @param givenScopeSet
         */
        ClientAuthError.createEmptyInputScopeSetError = function (givenScopeSet) {
            return new ClientAuthError(ClientAuthErrorMessage.emptyInputScopeSetError.code, ClientAuthErrorMessage.emptyInputScopeSetError.desc + " Given ScopeSet: " + givenScopeSet);
        };
        /**
         * Throws error if user sets CancellationToken.cancel = true during polling of token endpoint during device code flow
         */
        ClientAuthError.createDeviceCodeCancelledError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.DeviceCodePollingCancelled.code, "" + ClientAuthErrorMessage.DeviceCodePollingCancelled.desc);
        };
        /**
         * Throws error if device code is expired
         */
        ClientAuthError.createDeviceCodeExpiredError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.DeviceCodeExpired.code, "" + ClientAuthErrorMessage.DeviceCodeExpired.desc);
        };
        /**
         * Throws error when silent requests are made without an account object
         */
        ClientAuthError.createNoAccountInSilentRequestError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.NoAccountInSilentRequest.code, "" + ClientAuthErrorMessage.NoAccountInSilentRequest.desc);
        };
        /**
         * Throws error when cache record is null or undefined.
         */
        ClientAuthError.createNullOrUndefinedCacheRecord = function () {
            return new ClientAuthError(ClientAuthErrorMessage.invalidCacheRecord.code, ClientAuthErrorMessage.invalidCacheRecord.desc);
        };
        /**
         * Throws error when provided environment is not part of the CloudDiscoveryMetadata object
         */
        ClientAuthError.createInvalidCacheEnvironmentError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.invalidCacheEnvironment.code, ClientAuthErrorMessage.invalidCacheEnvironment.desc);
        };
        /**
         * Throws error when account is not found in cache.
         */
        ClientAuthError.createNoAccountFoundError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.noAccountFound.code, ClientAuthErrorMessage.noAccountFound.desc);
        };
        /**
         * Throws error if ICachePlugin not set on CacheManager.
         */
        ClientAuthError.createCachePluginError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.CachePluginError.code, "" + ClientAuthErrorMessage.CachePluginError.desc);
        };
        /**
         * Throws error if crypto object not found.
         * @param operationName
         */
        ClientAuthError.createNoCryptoObjectError = function (operationName) {
            return new ClientAuthError(ClientAuthErrorMessage.noCryptoObj.code, "" + ClientAuthErrorMessage.noCryptoObj.desc + operationName);
        };
        /**
        * Throws error if cache type is invalid.
        */
        ClientAuthError.createInvalidCacheTypeError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.invalidCacheType.code, "" + ClientAuthErrorMessage.invalidCacheType.desc);
        };
        /**
        * Throws error if unexpected account type.
        */
        ClientAuthError.createUnexpectedAccountTypeError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.unexpectedAccountType.code, "" + ClientAuthErrorMessage.unexpectedAccountType.desc);
        };
        /**
        * Throws error if unexpected credential type.
        */
        ClientAuthError.createUnexpectedCredentialTypeError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.unexpectedCredentialType.code, "" + ClientAuthErrorMessage.unexpectedCredentialType.desc);
        };
        return ClientAuthError;
    }(AuthError));

    /**
     * @hidden
     */
    var StringUtils = /** @class */ (function () {
        function StringUtils() {
        }
        /**
         * decode a JWT
         *
         * @param jwtToken
         */
        StringUtils.decodeJwt = function (jwtToken) {
            if (StringUtils.isEmpty(jwtToken)) {
                throw ClientAuthError.createIdTokenNullOrEmptyError(jwtToken);
            }
            var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
            var matches = idTokenPartsRegex.exec(jwtToken);
            if (!matches || matches.length < 4) {
                throw ClientAuthError.createIdTokenParsingError("Given token is malformed: " + JSON.stringify(jwtToken));
            }
            var crackedToken = {
                header: matches[1],
                JWSPayload: matches[2],
                JWSSig: matches[3]
            };
            return crackedToken;
        };
        /**
         * Check if a string is empty.
         *
         * @param str
         */
        StringUtils.isEmpty = function (str) {
            return (typeof str === "undefined" || !str || 0 === str.length);
        };
        StringUtils.startsWith = function (str, search) {
            return str.indexOf(search) === 0;
        };
        StringUtils.endsWith = function (str, search) {
            return (str.length >= search.length) && (str.lastIndexOf(search) === (str.length - search.length));
        };
        /**
         * Parses string into an object.
         *
         * @param query
         */
        StringUtils.queryStringToObject = function (query) {
            var match; // Regex for replacing addition symbol with a space
            var pl = /\+/g;
            var search = /([^&=]+)=([^&]*)/g;
            var decode = function (s) { return decodeURIComponent(decodeURIComponent(s.replace(pl, " "))); };
            var obj = {};
            match = search.exec(query);
            while (match) {
                obj[decode(match[1])] = decode(match[2]);
                match = search.exec(query);
            }
            return obj;
        };
        /**
         * Trims entries and converts them to lower case.
         *
         * @param arr
         */
        StringUtils.trimAndConvertArrayEntriesToLowerCase = function (arr) {
            return arr.map(function (entry) { return entry.trim().toLowerCase(); });
        };
        /**
         * Removes empty strings from array
         * @param arr
         */
        StringUtils.removeEmptyStringsFromArray = function (arr) {
            return arr.filter(function (entry) {
                return !StringUtils.isEmpty(entry);
            });
        };
        return StringUtils;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Log message level.
     */

    (function (LogLevel) {
        LogLevel[LogLevel["Error"] = 0] = "Error";
        LogLevel[LogLevel["Warning"] = 1] = "Warning";
        LogLevel[LogLevel["Info"] = 2] = "Info";
        LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
    })(exports.LogLevel || (exports.LogLevel = {}));
    /**
     * Class which facilitates logging of messages to a specific place.
     */
    var Logger = /** @class */ (function () {
        function Logger(loggerOptions) {
            // Current log level, defaults to info.
            this.level = exports.LogLevel.Info;
            if (loggerOptions) {
                this.localCallback = loggerOptions.loggerCallback;
                this.piiLoggingEnabled = loggerOptions.piiLoggingEnabled;
                this.level = loggerOptions.logLevel;
            }
        }
        /**
         * Log message with required options.
         */
        Logger.prototype.logMessage = function (logMessage, options) {
            if ((options.logLevel > this.level) || (!this.piiLoggingEnabled && options.containsPii)) {
                return;
            }
            var timestamp = new Date().toUTCString();
            var logHeader = StringUtils.isEmpty(this.correlationId) ? "[" + timestamp + "] : " : "[" + timestamp + "] : [" + this.correlationId + "]";
            var log = logHeader + " : " + pkg.version + " : " + exports.LogLevel[options.logLevel] + " - " + logMessage;
            // debug(`msal:${LogLevel[options.logLevel]}${options.containsPii ? "-Pii": ""}${options.context ? `:${options.context}` : ""}`)(logMessage);
            this.executeCallback(options.logLevel, log, options.containsPii);
        };
        /**
         * Execute callback with message.
         */
        Logger.prototype.executeCallback = function (level, message, containsPii) {
            if (this.localCallback) {
                this.localCallback(level, message, containsPii);
            }
        };
        /**
         * Logs error messages.
         */
        Logger.prototype.error = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Error,
                containsPii: false,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs error messages with PII.
         */
        Logger.prototype.errorPii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Error,
                containsPii: true,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs warning messages.
         */
        Logger.prototype.warning = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Warning,
                containsPii: false,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs warning messages with PII.
         */
        Logger.prototype.warningPii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Warning,
                containsPii: true,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs info messages.
         */
        Logger.prototype.info = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Info,
                containsPii: false,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs info messages with PII.
         */
        Logger.prototype.infoPii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Info,
                containsPii: true,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs verbose messages.
         */
        Logger.prototype.verbose = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Verbose,
                containsPii: false,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs verbose messages with PII.
         */
        Logger.prototype.verbosePii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Verbose,
                containsPii: true,
                correlationId: correlationId || ""
            });
        };
        /**
         * Returns whether PII Logging is enabled or not.
         */
        Logger.prototype.isPiiLoggingEnabled = function () {
            return this.piiLoggingEnabled || false;
        };
        return Logger;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var Constants = {
        LIBRARY_NAME: "MSAL.JS",
        SKU: "msal.js.common",
        // Prefix for all library cache entries
        CACHE_PREFIX: "msal",
        // default authority
        DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
        DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
        // ADFS String
        ADFS: "adfs",
        // Default AAD Instance Discovery Endpoint
        AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
        // Resource delimiter - used for certain cache entries
        RESOURCE_DELIM: "|",
        // Placeholder for non-existent account ids/objects
        NO_ACCOUNT: "NO_ACCOUNT",
        // Claims
        CLAIMS: "claims",
        // Consumer UTID
        CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
        // Default scopes
        OPENID_SCOPE: "openid",
        PROFILE_SCOPE: "profile",
        OFFLINE_ACCESS_SCOPE: "offline_access",
        // Default response type for authorization code flow
        CODE_RESPONSE_TYPE: "code",
        CODE_GRANT_TYPE: "authorization_code",
        RT_GRANT_TYPE: "refresh_token",
        FRAGMENT_RESPONSE_MODE: "fragment",
        S256_CODE_CHALLENGE_METHOD: "S256",
        URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
        AUTHORIZATION_PENDING: "authorization_pending",
        NOT_DEFINED: "not_defined"
    };
    /**
     * Request header names
     */
    var HeaderNames;
    (function (HeaderNames) {
        HeaderNames["CONTENT_TYPE"] = "Content-Type";
    })(HeaderNames || (HeaderNames = {}));
    /**
     * Persistent cache keys MSAL which stay while user is logged in.
     */
    var PersistentCacheKeys;
    (function (PersistentCacheKeys) {
        PersistentCacheKeys["ID_TOKEN"] = "idtoken";
        PersistentCacheKeys["CLIENT_INFO"] = "client.info";
        PersistentCacheKeys["ADAL_ID_TOKEN"] = "adal.idtoken";
        PersistentCacheKeys["ERROR"] = "error";
        PersistentCacheKeys["ERROR_DESC"] = "error.description";
    })(PersistentCacheKeys || (PersistentCacheKeys = {}));
    /**
     * String constants related to AAD Authority
     */
    var AADAuthorityConstants;
    (function (AADAuthorityConstants) {
        AADAuthorityConstants["COMMON"] = "common";
        AADAuthorityConstants["ORGANIZATIONS"] = "organizations";
        AADAuthorityConstants["CONSUMERS"] = "consumers";
    })(AADAuthorityConstants || (AADAuthorityConstants = {}));
    /**
     * Keys in the hashParams sent by AAD Server
     */
    var AADServerParamKeys;
    (function (AADServerParamKeys) {
        AADServerParamKeys["CLIENT_ID"] = "client_id";
        AADServerParamKeys["REDIRECT_URI"] = "redirect_uri";
        AADServerParamKeys["RESPONSE_TYPE"] = "response_type";
        AADServerParamKeys["RESPONSE_MODE"] = "response_mode";
        AADServerParamKeys["GRANT_TYPE"] = "grant_type";
        AADServerParamKeys["CLAIMS"] = "claims";
        AADServerParamKeys["SCOPE"] = "scope";
        AADServerParamKeys["ERROR"] = "error";
        AADServerParamKeys["ERROR_DESCRIPTION"] = "error_description";
        AADServerParamKeys["ACCESS_TOKEN"] = "access_token";
        AADServerParamKeys["ID_TOKEN"] = "id_token";
        AADServerParamKeys["REFRESH_TOKEN"] = "refresh_token";
        AADServerParamKeys["EXPIRES_IN"] = "expires_in";
        AADServerParamKeys["STATE"] = "state";
        AADServerParamKeys["NONCE"] = "nonce";
        AADServerParamKeys["PROMPT"] = "prompt";
        AADServerParamKeys["SESSION_STATE"] = "session_state";
        AADServerParamKeys["CLIENT_INFO"] = "client_info";
        AADServerParamKeys["CODE"] = "code";
        AADServerParamKeys["CODE_CHALLENGE"] = "code_challenge";
        AADServerParamKeys["CODE_CHALLENGE_METHOD"] = "code_challenge_method";
        AADServerParamKeys["CODE_VERIFIER"] = "code_verifier";
        AADServerParamKeys["CLIENT_REQUEST_ID"] = "client-request-id";
        AADServerParamKeys["X_CLIENT_SKU"] = "x-client-SKU";
        AADServerParamKeys["X_CLIENT_VER"] = "x-client-VER";
        AADServerParamKeys["X_CLIENT_OS"] = "x-client-OS";
        AADServerParamKeys["X_CLIENT_CPU"] = "x-client-CPU";
        AADServerParamKeys["POST_LOGOUT_URI"] = "post_logout_redirect_uri";
        AADServerParamKeys["DEVICE_CODE"] = "device_code";
    })(AADServerParamKeys || (AADServerParamKeys = {}));
    /**
     * IdToken claim string constants
     */
    var IdTokenClaimName;
    (function (IdTokenClaimName) {
        IdTokenClaimName["ISSUER"] = "iss";
        IdTokenClaimName["OBJID"] = "oid";
        IdTokenClaimName["SUBJECT"] = "sub";
        IdTokenClaimName["TENANTID"] = "tid";
        IdTokenClaimName["VERSION"] = "ver";
        IdTokenClaimName["PREF_USERNAME"] = "preferred_username";
        IdTokenClaimName["NAME"] = "name";
        IdTokenClaimName["NONCE"] = "nonce";
        IdTokenClaimName["EXPIRATION"] = "exp";
        IdTokenClaimName["HOME_OBJID"] = "home_oid";
        IdTokenClaimName["SESSIONID"] = "sid";
        IdTokenClaimName["CLOUD_INSTANCE_HOSTNAME"] = "cloud_instance_host_name";
    })(IdTokenClaimName || (IdTokenClaimName = {}));
    /**
     * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
     * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
     * internal partners too, hence the choice of generic "string" type instead of the "enum"
     */
    var PromptValue = {
        LOGIN: "login",
        SELECT_ACCOUNT: "select_account",
        CONSENT: "consent",
        NONE: "none",
    };
    /**
     * SSO Types - generated to populate hints
     */
    var SSOTypes;
    (function (SSOTypes) {
        SSOTypes["ACCOUNT"] = "account";
        SSOTypes["SID"] = "sid";
        SSOTypes["LOGIN_HINT"] = "login_hint";
        SSOTypes["ID_TOKEN"] = "id_token";
        SSOTypes["DOMAIN_HINT"] = "domain_hint";
        SSOTypes["ORGANIZATIONS"] = "organizations";
        SSOTypes["CONSUMERS"] = "consumers";
        SSOTypes["ACCOUNT_ID"] = "accountIdentifier";
        SSOTypes["HOMEACCOUNT_ID"] = "homeAccountIdentifier";
    })(SSOTypes || (SSOTypes = {}));
    /**
     * Disallowed extra query parameters.
     */
    var BlacklistedEQParams = [
        SSOTypes.SID,
        SSOTypes.LOGIN_HINT
    ];
    /**
     * allowed values for codeVerifier
     */
    var CodeChallengeMethodValues = {
        PLAIN: "plain",
        S256: "S256"
    };
    /**
     * allowed values for response_mode
     */
    var ResponseMode;
    (function (ResponseMode) {
        ResponseMode["QUERY"] = "query";
        ResponseMode["FRAGMENT"] = "fragment";
        ResponseMode["FORM_POST"] = "form_post";
    })(ResponseMode || (ResponseMode = {}));
    /**
     * allowed grant_type
     */
    var GrantType;
    (function (GrantType) {
        GrantType["IMPLICIT_GRANT"] = "implicit";
        GrantType["AUTHORIZATION_CODE_GRANT"] = "authorization_code";
        GrantType["CLIENT_CREDENTIALS_GRANT"] = "client_credentials";
        GrantType["RESOURCE_OWNER_PASSWORD_GRANT"] = "password";
        GrantType["REFRESH_TOKEN_GRANT"] = "refresh_token";
        GrantType["DEVICE_CODE_GRANT"] = "device_code";
    })(GrantType || (GrantType = {}));
    /**
     * Account types in Cache
     */
    var CacheAccountType;
    (function (CacheAccountType) {
        CacheAccountType["MSSTS_ACCOUNT_TYPE"] = "MSSTS";
        CacheAccountType["ADFS_ACCOUNT_TYPE"] = "ADFS";
        CacheAccountType["MSAV1_ACCOUNT_TYPE"] = "MSA";
        CacheAccountType["GENERIC_ACCOUNT_TYPE"] = "Generic"; // NTLM, Kerberos, FBA, Basic etc
    })(CacheAccountType || (CacheAccountType = {}));
    /**
     * Separators used in cache
     */
    var Separators;
    (function (Separators) {
        Separators["CACHE_KEY_SEPARATOR"] = "-";
        Separators["CLIENT_INFO_SEPARATOR"] = ".";
    })(Separators || (Separators = {}));
    /**
     * Credentail Type stored in the cache
     */
    var CredentialType;
    (function (CredentialType) {
        CredentialType["ID_TOKEN"] = "IdToken";
        CredentialType["ACCESS_TOKEN"] = "AccessToken";
        CredentialType["REFRESH_TOKEN"] = "RefreshToken";
    })(CredentialType || (CredentialType = {}));
    /**
     * Credentail Type stored in the cache
     */
    var CacheSchemaType;
    (function (CacheSchemaType) {
        CacheSchemaType["ACCOUNT"] = "Account";
        CacheSchemaType["CREDENTIAL"] = "Credential";
        CacheSchemaType["APP_META_DATA"] = "AppMetadata";
        CacheSchemaType["TEMPORARY"] = "TempCache";
    })(CacheSchemaType || (CacheSchemaType = {}));
    /**
     * Combine all cache types
     */
    var CacheType;
    (function (CacheType) {
        CacheType[CacheType["ADFS"] = 1001] = "ADFS";
        CacheType[CacheType["MSA"] = 1002] = "MSA";
        CacheType[CacheType["MSSTS"] = 1003] = "MSSTS";
        CacheType[CacheType["GENERIC"] = 1004] = "GENERIC";
        CacheType[CacheType["ACCESS_TOKEN"] = 2001] = "ACCESS_TOKEN";
        CacheType[CacheType["REFRESH_TOKEN"] = 2002] = "REFRESH_TOKEN";
        CacheType[CacheType["ID_TOKEN"] = 2003] = "ID_TOKEN";
        CacheType[CacheType["APP_META_DATA"] = 3001] = "APP_META_DATA";
    })(CacheType || (CacheType = {}));
    /**
     * More Cache related constants
     */
    var APP_META_DATA = "appmetadata";
    var ClientInfo = "client_info";

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Base type for credentials to be stored in the cache: eg: ACCESS_TOKEN, ID_TOKEN etc
     *
     * Key:Value Schema:
     *
     * Key: <home_account_id*>-<environment>-<credential_type>-<client_id>-<realm*>-<target*>
     *
     * Value Schema:
     * {
     *      homeAccountId: home account identifier for the auth scheme,
     *      environment: entity that issued the token, represented as a full host
     *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
     *      clientId: client ID of the application
     *      secret: Actual credential as a string
     *      familyId: Family ID identifier, usually only used for refresh tokens
     *      realm: Full tenant or organizational identifier that the account belongs to
     *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
     * }
     */
    var CredentialEntity = /** @class */ (function () {
        function CredentialEntity() {
        }
        /**
         * Generate Account Id key component as per the schema: <home_account_id>-<environment>
         */
        CredentialEntity.prototype.generateAccountId = function () {
            return CredentialEntity.generateAccountIdForCacheKey(this.homeAccountId, this.environment);
        };
        /**
         * Generate Credential Id key component as per the schema: <credential_type>-<client_id>-<realm>
         */
        CredentialEntity.prototype.generateCredentialId = function () {
            return CredentialEntity.generateCredentialIdForCacheKey(this.credentialType, this.clientId, this.realm, this.familyId);
        };
        /**
         * Generate target key component as per schema: <target>
         */
        CredentialEntity.prototype.generateTarget = function () {
            return CredentialEntity.generateTargetForCacheKey(this.target);
        };
        /**
         * generates credential key
         */
        CredentialEntity.prototype.generateCredentialKey = function () {
            return CredentialEntity.generateCredentialCacheKey(this.homeAccountId, this.environment, this.credentialType, this.clientId, this.realm, this.target, this.familyId);
        };
        /**
         * returns the type of the cache (in this case credential)
         */
        CredentialEntity.prototype.generateType = function () {
            switch (this.credentialType) {
                case CredentialType.ID_TOKEN:
                    return CacheType.ID_TOKEN;
                case CredentialType.ACCESS_TOKEN:
                    return CacheType.ACCESS_TOKEN;
                case CredentialType.REFRESH_TOKEN:
                    return CacheType.REFRESH_TOKEN;
                default: {
                    throw ClientAuthError.createUnexpectedCredentialTypeError();
                }
            }
        };
        /**
         * helper function to return `CredentialType`
         * @param key
         */
        CredentialEntity.getCredentialType = function (key) {
            if (key.indexOf(CredentialType.ACCESS_TOKEN.toLowerCase()) !== -1) {
                return CredentialType.ACCESS_TOKEN;
            }
            else if (key.indexOf(CredentialType.ID_TOKEN.toLowerCase()) !== -1) {
                return CredentialType.ID_TOKEN;
            }
            else if (key.indexOf(CredentialType.REFRESH_TOKEN.toLowerCase()) !== -1) {
                return CredentialType.REFRESH_TOKEN;
            }
            return Constants.NOT_DEFINED;
        };
        /**
         * generates credential key
         */
        CredentialEntity.generateCredentialCacheKey = function (homeAccountId, environment, credentialType, clientId, realm, target, familyId) {
            var credentialKey = [
                this.generateAccountIdForCacheKey(homeAccountId, environment),
                this.generateCredentialIdForCacheKey(credentialType, clientId, realm, familyId),
                this.generateTargetForCacheKey(target),
            ];
            return credentialKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * generates Account Id for keys
         * @param homeAccountId
         * @param environment
         */
        CredentialEntity.generateAccountIdForCacheKey = function (homeAccountId, environment) {
            var accountId = [homeAccountId, environment];
            return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Generates Credential Id for keys
         * @param credentialType
         * @param realm
         * @param clientId
         * @param familyId
         */
        CredentialEntity.generateCredentialIdForCacheKey = function (credentialType, clientId, realm, familyId) {
            var clientOrFamilyId = credentialType === CredentialType.REFRESH_TOKEN
                ? familyId || clientId
                : clientId;
            var credentialId = [
                credentialType,
                clientOrFamilyId,
                realm || "",
            ];
            return credentialId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Generate target key component as per schema: <target>
         */
        CredentialEntity.generateTargetForCacheKey = function (scopes) {
            return (scopes || "").toLowerCase();
        };
        return CredentialEntity;
    }());

    /**
     * ClientConfigurationErrorMessage class containing string constants used by error codes and messages.
     */
    var ClientConfigurationErrorMessage = {
        redirectUriNotSet: {
            code: "redirect_uri_empty",
            desc: "A redirect URI is required for all calls, and none has been set."
        },
        postLogoutUriNotSet: {
            code: "post_logout_uri_empty",
            desc: "A post logout redirect has not been set."
        },
        claimsRequestParsingError: {
            code: "claims_request_parsing_error",
            desc: "Could not parse the given claims request object."
        },
        authorityUriInsecure: {
            code: "authority_uri_insecure",
            desc: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options"
        },
        urlParseError: {
            code: "url_parse_error",
            desc: "URL could not be parsed into appropriate segments."
        },
        urlEmptyError: {
            code: "empty_url_error",
            desc: "URL was empty or null."
        },
        emptyScopesError: {
            code: "empty_input_scopes_error",
            desc: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token."
        },
        nonArrayScopesError: {
            code: "nonarray_input_scopes_error",
            desc: "Scopes cannot be passed as non-array."
        },
        clientIdSingleScopeError: {
            code: "clientid_input_scopes_error",
            desc: "Client ID can only be provided as a single scope."
        },
        invalidPrompt: {
            code: "invalid_prompt_value",
            desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'.  Please see here for valid configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
        },
        tokenRequestEmptyError: {
            code: "token_request_empty",
            desc: "Token request was empty and not found in cache."
        },
        logoutRequestEmptyError: {
            code: "logout_request_empty",
            desc: "The logout request was null or undefined."
        },
        invalidCodeChallengeMethod: {
            code: "invalid_code_challenge_method",
            desc: "code_challenge_method passed is invalid. Valid values are \"plain\" and \"S256\"."
        },
        invalidCodeChallengeParams: {
            code: "pkce_params_missing",
            desc: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request"
        },
        knownAuthoritiesAndCloudDiscoveryMetadata: {
            code: "invalid_known_authorities",
            desc: "knownAuthorities and cloudDiscoveryMetadata cannot both be provided. Please provide cloudDiscoveryMetadata object for AAD, knownAuthorities otherwise."
        },
        invalidCloudDiscoveryMetadata: {
            code: "invalid_cloud_discovery_metadata",
            desc: "Invalid cloudDiscoveryMetadata provided. Must be a JSON object containing tenant_discovery_endpoint and metadata fields"
        },
        untrustedAuthority: {
            code: "untrusted_authority",
            desc: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter."
        }
    };
    /**
     * Error thrown when there is an error in configuration of the MSAL.js library.
     */
    var ClientConfigurationError = /** @class */ (function (_super) {
        __extends$1(ClientConfigurationError, _super);
        function ClientConfigurationError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            _this.name = "ClientConfigurationError";
            Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
            return _this;
        }
        /**
         * Creates an error thrown when the redirect uri is empty (not set by caller)
         */
        ClientConfigurationError.createRedirectUriEmptyError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.redirectUriNotSet.code, ClientConfigurationErrorMessage.redirectUriNotSet.desc);
        };
        /**
         * Creates an error thrown when the post-logout redirect uri is empty (not set by caller)
         */
        ClientConfigurationError.createPostLogoutRedirectUriEmptyError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.postLogoutUriNotSet.code, ClientConfigurationErrorMessage.postLogoutUriNotSet.desc);
        };
        /**
         * Creates an error thrown when the claims request could not be successfully parsed
         */
        ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.claimsRequestParsingError.code, ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
        };
        /**
         * Creates an error thrown if authority uri is given an insecure protocol.
         * @param urlString
         */
        ClientConfigurationError.createInsecureAuthorityUriError = function (urlString) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.authorityUriInsecure.code, ClientConfigurationErrorMessage.authorityUriInsecure.desc + " Given URI: " + urlString);
        };
        /**
         * Creates an error thrown if URL string does not parse into separate segments.
         * @param urlString
         */
        ClientConfigurationError.createUrlParseError = function (urlParseError) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.urlParseError.code, ClientConfigurationErrorMessage.urlParseError.desc + " Given Error: " + urlParseError);
        };
        /**
         * Creates an error thrown if URL string is empty or null.
         * @param urlString
         */
        ClientConfigurationError.createUrlEmptyError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.urlEmptyError.code, ClientConfigurationErrorMessage.urlEmptyError.desc);
        };
        /**
         * Error thrown when scopes are not an array
         * @param inputScopes
         */
        ClientConfigurationError.createScopesNonArrayError = function (inputScopes) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.nonArrayScopesError.code, ClientConfigurationErrorMessage.nonArrayScopesError.desc + " Given Scopes: " + inputScopes);
        };
        /**
         * Error thrown when scopes are empty.
         * @param scopesValue
         */
        ClientConfigurationError.createEmptyScopesArrayError = function (inputScopes) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.emptyScopesError.code, ClientConfigurationErrorMessage.emptyScopesError.desc + " Given Scopes: " + inputScopes);
        };
        /**
         * Error thrown when client id scope is not provided as single scope.
         * @param inputScopes
         */
        ClientConfigurationError.createClientIdSingleScopeError = function (inputScopes) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.clientIdSingleScopeError.code, ClientConfigurationErrorMessage.clientIdSingleScopeError.desc + " Given Scopes: " + inputScopes);
        };
        /**
         * Error thrown when prompt is not an allowed type.
         * @param promptValue
         */
        ClientConfigurationError.createInvalidPromptError = function (promptValue) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidPrompt.code, ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
        };
        /**
         * Throws error when token request is empty and nothing cached in storage.
         */
        ClientConfigurationError.createEmptyLogoutRequestError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.logoutRequestEmptyError.code, ClientConfigurationErrorMessage.logoutRequestEmptyError.desc);
        };
        /**
         * Throws error when token request is empty and nothing cached in storage.
         */
        ClientConfigurationError.createEmptyTokenRequestError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.tokenRequestEmptyError.code, ClientConfigurationErrorMessage.tokenRequestEmptyError.desc);
        };
        /**
         * Throws error when an invalid code_challenge_method is passed by the user
         */
        ClientConfigurationError.createInvalidCodeChallengeMethodError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCodeChallengeMethod.code, ClientConfigurationErrorMessage.invalidCodeChallengeMethod.desc);
        };
        /**
         * Throws error when both params: code_challenge and code_challenge_method are not passed together
         */
        ClientConfigurationError.createInvalidCodeChallengeParamsError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCodeChallengeParams.code, ClientConfigurationErrorMessage.invalidCodeChallengeParams.desc);
        };
        /**
         * Throws an error when the user passes both knownAuthorities and cloudDiscoveryMetadata
         */
        ClientConfigurationError.createKnownAuthoritiesCloudDiscoveryMetadataError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.knownAuthoritiesAndCloudDiscoveryMetadata.code, ClientConfigurationErrorMessage.knownAuthoritiesAndCloudDiscoveryMetadata.desc);
        };
        /**
         * Throws an error when the user passes invalid cloudDiscoveryMetadata
         */
        ClientConfigurationError.createInvalidCloudDiscoveryMetadataError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCloudDiscoveryMetadata.code, ClientConfigurationErrorMessage.invalidCloudDiscoveryMetadata.desc);
        };
        /**
         * Throws error when provided authority is not a member of the trusted host list
         */
        ClientConfigurationError.createUntrustedAuthorityError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.untrustedAuthority.code, ClientConfigurationErrorMessage.untrustedAuthority.desc);
        };
        return ClientConfigurationError;
    }(ClientAuthError));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * The ScopeSet class creates a set of scopes. Scopes are case-insensitive, unique values, so the Set object in JS makes
     * the most sense to implement for this class. All scopes are trimmed and converted to lower case strings to ensure uniqueness of strings.
     */
    var ScopeSet = /** @class */ (function () {
        function ScopeSet(inputScopes) {
            var _this = this;
            // Filter empty string and null/undefined array items
            var scopeArr = inputScopes ? StringUtils.trimAndConvertArrayEntriesToLowerCase(__spreadArrays$1(inputScopes)) : [];
            var filteredInput = scopeArr ? StringUtils.removeEmptyStringsFromArray(scopeArr) : [];
            // Validate and filter scopes (validate function throws if validation fails)
            this.validateInputScopes(filteredInput);
            this.scopes = new Set(); // Iterator in constructor not supported by IE11
            filteredInput.forEach(function (scope) { return _this.scopes.add(scope); });
        }
        /**
         * Factory method to create ScopeSet from space-delimited string
         * @param inputScopeString
         * @param appClientId
         * @param scopesRequired
        */
        ScopeSet.fromString = function (inputScopeString) {
            inputScopeString = inputScopeString || "";
            var inputScopes = inputScopeString.split(" ");
            return new ScopeSet(inputScopes);
        };
        /**
         * Used to validate the scopes input parameter requested  by the developer.
         * @param {Array<string>} inputScopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
         * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
        */
        ScopeSet.prototype.validateInputScopes = function (inputScopes) {
            // Check if scopes are required but not given or is an empty array
            if (!inputScopes || inputScopes.length < 1) {
                throw ClientConfigurationError.createEmptyScopesArrayError(inputScopes);
            }
        };
        /**
         * Check if a given scope is present in this set of scopes.
         * @param scope
         */
        ScopeSet.prototype.containsScope = function (scope) {
            return !StringUtils.isEmpty(scope) ? this.scopes.has(scope) : false;
        };
        /**
         * Check if a set of scopes is present in this set of scopes.
         * @param scopeSet
         */
        ScopeSet.prototype.containsScopeSet = function (scopeSet) {
            var _this = this;
            if (!scopeSet) {
                return false;
            }
            return (this.scopes.size >= scopeSet.scopes.size && scopeSet.asArray().every(function (scope) { return _this.containsScope(scope); }));
        };
        /**
         * Appends single scope if passed
         * @param newScope
         */
        ScopeSet.prototype.appendScope = function (newScope) {
            if (!StringUtils.isEmpty(newScope)) {
                this.scopes.add(newScope.trim().toLowerCase());
            }
        };
        /**
         * Appends multiple scopes if passed
         * @param newScopes
         */
        ScopeSet.prototype.appendScopes = function (newScopes) {
            var _this = this;
            try {
                newScopes.forEach(function (newScope) { return _this.appendScope(newScope); });
            }
            catch (e) {
                throw ClientAuthError.createAppendScopeSetError(e);
            }
        };
        /**
         * Removes element from set of scopes.
         * @param scope
         */
        ScopeSet.prototype.removeScope = function (scope) {
            if (StringUtils.isEmpty(scope)) {
                throw ClientAuthError.createRemoveEmptyScopeFromSetError(scope);
            }
            this.scopes.delete(scope.trim().toLowerCase());
        };
        /**
         * Combines an array of scopes with the current set of scopes.
         * @param otherScopes
         */
        ScopeSet.prototype.unionScopeSets = function (otherScopes) {
            if (!otherScopes) {
                throw ClientAuthError.createEmptyInputScopeSetError(otherScopes);
            }
            var unionScopes = new Set(); // Iterator in constructor not supported in IE11
            otherScopes.scopes.forEach(function (scope) { return unionScopes.add(scope); });
            this.scopes.forEach(function (scope) { return unionScopes.add(scope); });
            return unionScopes;
        };
        /**
         * Check if scopes intersect between this set and another.
         * @param otherScopes
         */
        ScopeSet.prototype.intersectingScopeSets = function (otherScopes) {
            if (!otherScopes) {
                throw ClientAuthError.createEmptyInputScopeSetError(otherScopes);
            }
            var unionScopes = this.unionScopeSets(otherScopes);
            // Do not allow offline_access to be the only intersecting scope
            var sizeOtherScopes = otherScopes.getScopeCount();
            var sizeThisScopes = this.getScopeCount();
            var sizeUnionScopes = unionScopes.size;
            return sizeUnionScopes < (sizeThisScopes + sizeOtherScopes);
        };
        /**
         * Returns size of set of scopes.
         */
        ScopeSet.prototype.getScopeCount = function () {
            return this.scopes.size;
        };
        /**
         * Returns the scopes as an array of string values
         */
        ScopeSet.prototype.asArray = function () {
            var array = [];
            this.scopes.forEach(function (val) { return array.push(val); });
            return array;
        };
        /**
         * Prints scopes into a space-delimited string
         */
        ScopeSet.prototype.printScopes = function () {
            if (this.scopes) {
                var scopeArr = this.asArray();
                return scopeArr.join(" ");
            }
            return "";
        };
        return ScopeSet;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Function to build a client info object
     * @param rawClientInfo
     * @param crypto
     */
    function buildClientInfo(rawClientInfo, crypto) {
        if (StringUtils.isEmpty(rawClientInfo)) {
            throw ClientAuthError.createClientInfoEmptyError(rawClientInfo);
        }
        try {
            var decodedClientInfo = crypto.base64Decode(rawClientInfo);
            return JSON.parse(decodedClientInfo);
        }
        catch (e) {
            throw ClientAuthError.createClientInfoDecodingError(e);
        }
    }

    var TrustedAuthority = /** @class */ (function () {
        function TrustedAuthority() {
        }
        /**
         * Set the CloudDiscoveryMetadata object from knownAuthorities or cloudDiscoveryMetadata passed into the app config
         * @param knownAuthorities
         * @param cloudDiscoveryMetadata
         */
        TrustedAuthority.setTrustedAuthoritiesFromConfig = function (knownAuthorities, cloudDiscoveryMetadata) {
            if (!this.getTrustedHostList().length) {
                if (knownAuthorities.length > 0 && !StringUtils.isEmpty(cloudDiscoveryMetadata)) {
                    throw ClientConfigurationError.createKnownAuthoritiesCloudDiscoveryMetadataError();
                }
                this.createCloudDiscoveryMetadataFromKnownAuthorities(knownAuthorities);
                try {
                    if (cloudDiscoveryMetadata) {
                        var parsedMetadata = JSON.parse(cloudDiscoveryMetadata);
                        this.saveCloudDiscoveryMetadata(parsedMetadata.metadata);
                    }
                }
                catch (e) {
                    throw ClientConfigurationError.createInvalidCloudDiscoveryMetadataError();
                }
            }
        };
        /**
         * Called to get metadata from network if CloudDiscoveryMetadata was not populated by config
         * @param networkInterface
         */
        TrustedAuthority.setTrustedAuthoritiesFromNetwork = function (authorityToVerify, networkInterface) {
            return __awaiter$1(this, void 0, void 0, function () {
                var instanceDiscoveryEndpoint, response, metadata, e_1, host;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            instanceDiscoveryEndpoint = "" + Constants.AAD_INSTANCE_DISCOVERY_ENDPT + authorityToVerify.urlString + "oauth2/v2.0/authorize";
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, networkInterface.sendGetRequestAsync(instanceDiscoveryEndpoint)];
                        case 2:
                            response = _a.sent();
                            metadata = response.body.metadata;
                            this.saveCloudDiscoveryMetadata(metadata);
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            return [2 /*return*/];
                        case 4:
                            host = authorityToVerify.getUrlComponents().HostNameAndPort;
                            if (this.getTrustedHostList().length > 0 && !this.IsInTrustedHostList(host)) {
                                // Custom Domain scenario, host is trusted because Instance Discovery call succeeded 
                                this.createCloudDiscoveryMetadataFromKnownAuthorities([host]);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         *
         * @param metadata
         */
        TrustedAuthority.saveCloudDiscoveryMetadata = function (metadata) {
            metadata.forEach(function (entry) {
                var authorities = entry.aliases;
                authorities.forEach(function (authority) {
                    TrustedAuthority.TrustedHostList[authority.toLowerCase()] = entry;
                });
            });
        };
        /**
         * Create a generic metadata object for each host passed to knownAuthorities.
         * This is mostly useful for B2C or ADFS scenarios
         * @param knownAuthorities
         */
        TrustedAuthority.createCloudDiscoveryMetadataFromKnownAuthorities = function (knownAuthorities) {
            var _this = this;
            knownAuthorities.forEach(function (authority) {
                _this.TrustedHostList[authority.toLowerCase()] = {
                    preferred_cache: authority.toLowerCase(),
                    preferred_network: authority.toLowerCase(),
                    aliases: [authority.toLowerCase()]
                };
            });
        };
        TrustedAuthority.getTrustedHostList = function () {
            return Object.keys(this.TrustedHostList);
        };
        /**
         * Get metadata for the provided host
         * @param host
         */
        TrustedAuthority.getCloudDiscoveryMetadata = function (host) {
            return this.TrustedHostList[host.toLowerCase()] || null;
        };
        /**
         * Checks to see if the host is in a list of trusted hosts
         * @param host
         */
        TrustedAuthority.IsInTrustedHostList = function (host) {
            return Object.keys(this.TrustedHostList).indexOf(host.toLowerCase()) > -1;
        };
        TrustedAuthority.TrustedHostList = {};
        return TrustedAuthority;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Type that defines required and optional parameters for an Account field (based on universal cache schema implemented by all MSALs).
     *
     * Key : Value Schema
     *
     * Key: <home_account_id>-<environment>-<realm*>
     *
     * Value Schema:
     * {
     *      homeAccountId: home account identifier for the auth scheme,
     *      environment: entity that issued the token, represented as a full host
     *      realm: Full tenant or organizational identifier that the account belongs to
     *      localAccountId: Original tenant-specific accountID, usually used for legacy cases
     *      username: primary username that represents the user, usually corresponds to preferred_username in the v2 endpt
     *      authorityType: Accounts authority type as a string
     *      name: Full name for the account, including given name and family name,
     *      clientInfo: Full base64 encoded client info received from ESTS
     *      lastModificationTime: last time this entity was modified in the cache
     *      lastModificationApp:
     * }
     */
    var AccountEntity = /** @class */ (function () {
        function AccountEntity() {
        }
        /**
         * Generate Account Id key component as per the schema: <home_account_id>-<environment>
         */
        AccountEntity.prototype.generateAccountId = function () {
            var accountId = [this.homeAccountId, this.environment];
            return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Generate Account Cache Key as per the schema: <home_account_id>-<environment>-<realm*>
         */
        AccountEntity.prototype.generateAccountKey = function () {
            return AccountEntity.generateAccountCacheKey({
                homeAccountId: this.homeAccountId,
                environment: this.environment,
                tenantId: this.realm,
                username: this.username
            });
        };
        /**
         * returns the type of the cache (in this case account)
         */
        AccountEntity.prototype.generateType = function () {
            switch (this.authorityType) {
                case CacheAccountType.ADFS_ACCOUNT_TYPE:
                    return CacheType.ADFS;
                case CacheAccountType.MSAV1_ACCOUNT_TYPE:
                    return CacheType.MSA;
                case CacheAccountType.MSSTS_ACCOUNT_TYPE:
                    return CacheType.MSSTS;
                case CacheAccountType.GENERIC_ACCOUNT_TYPE:
                    return CacheType.GENERIC;
                default: {
                    throw ClientAuthError.createUnexpectedAccountTypeError();
                }
            }
        };
        /**
         * Returns the AccountInfo interface for this account.
         */
        AccountEntity.prototype.getAccountInfo = function () {
            return {
                homeAccountId: this.homeAccountId,
                environment: this.environment,
                tenantId: this.realm,
                username: this.username
            };
        };
        /**
         * Generates account key from interface
         * @param accountInterface
         */
        AccountEntity.generateAccountCacheKey = function (accountInterface) {
            var accountKey = [
                accountInterface.homeAccountId,
                accountInterface.environment || "",
                accountInterface.tenantId || "",
            ];
            return accountKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Build Account cache from IdToken, clientInfo and authority/policy
         * @param clientInfo
         * @param authority
         * @param idToken
         * @param policy
         */
        AccountEntity.createAccount = function (clientInfo, authority, idToken, crypto) {
            var account = new AccountEntity();
            account.authorityType = CacheAccountType.MSSTS_ACCOUNT_TYPE;
            account.clientInfo = clientInfo;
            var clientInfoObj = buildClientInfo(clientInfo, crypto);
            account.homeAccountId = "" + clientInfoObj.uid + Separators.CLIENT_INFO_SEPARATOR + clientInfoObj.utid;
            var reqEnvironment = authority.canonicalAuthorityUrlComponents.HostNameAndPort;
            var env = TrustedAuthority.getCloudDiscoveryMetadata(reqEnvironment) ? TrustedAuthority.getCloudDiscoveryMetadata(reqEnvironment).preferred_cache : "";
            if (StringUtils.isEmpty(env)) {
                throw ClientAuthError.createInvalidCacheEnvironmentError();
            }
            account.environment = env;
            account.realm = idToken.claims.tid;
            if (idToken) {
                // How do you account for MSA CID here?
                var localAccountId = !StringUtils.isEmpty(idToken.claims.oid)
                    ? idToken.claims.oid
                    : idToken.claims.sid;
                account.localAccountId = localAccountId;
                account.username = idToken.claims.preferred_username;
                account.name = idToken.claims.name;
            }
            return account;
        };
        /**
         * Build ADFS account type
         * @param authority
         * @param idToken
         */
        AccountEntity.createADFSAccount = function (authority, idToken) {
            var account = new AccountEntity();
            account.authorityType = CacheAccountType.ADFS_ACCOUNT_TYPE;
            account.homeAccountId = idToken.claims.sub;
            var reqEnvironment = authority.canonicalAuthorityUrlComponents.HostNameAndPort;
            var env = TrustedAuthority.getCloudDiscoveryMetadata(reqEnvironment) ? TrustedAuthority.getCloudDiscoveryMetadata(reqEnvironment).preferred_cache : "";
            if (StringUtils.isEmpty(env)) {
                throw ClientAuthError.createInvalidCacheEnvironmentError();
            }
            account.environment = env;
            account.username = idToken.claims.upn;
            // add uniqueName to claims
            // account.name = idToken.claims.uniqueName;
            return account;
        };
        return AccountEntity;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Interface class which implement cache storage functions used by MSAL to perform validity checks, and store tokens.
     */
    var CacheManager = /** @class */ (function () {
        function CacheManager() {
        }
        /**
         * Returns all accounts in cache
         */
        CacheManager.prototype.getAllAccounts = function () {
            var currentAccounts = this.getAccountsFilteredBy();
            var accountValues = Object.keys(currentAccounts).map(function (accountKey) { return currentAccounts[accountKey]; });
            var numAccounts = accountValues.length;
            if (numAccounts < 1) {
                return null;
            }
            else {
                var allAccounts = accountValues.map(function (value) {
                    var accountObj = new AccountEntity();
                    accountObj = CacheManager.toObject(accountObj, value);
                    return accountObj.getAccountInfo();
                });
                return allAccounts;
            }
        };
        /**
         * saves a cache record
         * @param cacheRecord
         */
        CacheManager.prototype.saveCacheRecord = function (cacheRecord) {
            if (!cacheRecord) {
                throw ClientAuthError.createNullOrUndefinedCacheRecord();
            }
            if (!!cacheRecord.account) {
                this.saveAccount(cacheRecord.account);
            }
            if (!!cacheRecord.idToken) {
                this.saveCredential(cacheRecord.idToken);
            }
            if (!!cacheRecord.accessToken) {
                this.saveAccessToken(cacheRecord.accessToken);
            }
            if (!!cacheRecord.refreshToken) {
                this.saveCredential(cacheRecord.refreshToken);
            }
        };
        /**
         * saves account into cache
         * @param account
         */
        CacheManager.prototype.saveAccount = function (account) {
            var key = account.generateAccountKey();
            this.setItem(key, account, CacheSchemaType.ACCOUNT);
        };
        /**
         * saves credential - accessToken, idToken or refreshToken into cache
         * @param credential
         */
        CacheManager.prototype.saveCredential = function (credential) {
            var key = credential.generateCredentialKey();
            this.setItem(key, credential, CacheSchemaType.CREDENTIAL);
        };
        /**
         * saves access token credential
         * @param credential
         */
        CacheManager.prototype.saveAccessToken = function (credential) {
            var _this = this;
            var currentTokenCache = this.getCredentialsFilteredBy({
                clientId: credential.clientId,
                credentialType: CredentialType.ACCESS_TOKEN,
                environment: credential.environment,
                homeAccountId: credential.homeAccountId,
                realm: credential.realm
            });
            var currentScopes = ScopeSet.fromString(credential.target);
            var currentAccessTokens = Object.keys(currentTokenCache.accessTokens).map(function (key) { return currentTokenCache.accessTokens[key]; });
            if (currentAccessTokens) {
                currentAccessTokens.forEach(function (tokenEntity) {
                    var tokenScopeSet = ScopeSet.fromString(tokenEntity.target);
                    if (tokenScopeSet.intersectingScopeSets(currentScopes)) {
                        _this.removeCredential(tokenEntity);
                    }
                });
            }
            this.saveCredential(credential);
        };
        /**
         * Given account key retrieve an account
         * @param key
         */
        CacheManager.prototype.getAccount = function (key) {
            var account = this.getItem(key, CacheSchemaType.ACCOUNT);
            return account;
        };
        /**
         * retrieve a credential - accessToken, idToken or refreshToken; given the cache key
         * @param key
         */
        CacheManager.prototype.getCredential = function (key) {
            return this.getItem(key, CacheSchemaType.CREDENTIAL);
        };
        /**
         * retrieve accounts matching all provided filters; if no filter is set, get all accounts
         * not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
         * @param homeAccountId
         * @param environment
         * @param realm
         */
        CacheManager.prototype.getAccountsFilteredBy = function (accountFilter) {
            return this.getAccountsFilteredByInternal(accountFilter ? accountFilter.homeAccountId : "", accountFilter ? accountFilter.environment : "", accountFilter ? accountFilter.realm : "");
        };
        /**
         * retrieve accounts matching all provided filters; if no filter is set, get all accounts
         * not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
         * @param homeAccountId
         * @param environment
         * @param realm
         */
        CacheManager.prototype.getAccountsFilteredByInternal = function (homeAccountId, environment, realm) {
            var _this = this;
            var allCacheKeys = this.getKeys();
            var matchingAccounts = {};
            var entity;
            allCacheKeys.forEach(function (cacheKey) {
                var matches = true;
                // don't parse any non-account type cache entities
                if (CredentialEntity.getCredentialType(cacheKey) !== Constants.NOT_DEFINED || _this.isAppMetadata(cacheKey)) {
                    return;
                }
                // Attempt retrieval
                try {
                    entity = _this.getItem(cacheKey, CacheSchemaType.ACCOUNT);
                }
                catch (e) {
                    return;
                }
                if (!StringUtils.isEmpty(homeAccountId)) {
                    matches = _this.matchHomeAccountId(entity, homeAccountId);
                }
                if (!StringUtils.isEmpty(environment)) {
                    matches = matches && _this.matchEnvironment(entity, environment);
                }
                if (!StringUtils.isEmpty(realm)) {
                    matches = matches && _this.matchRealm(entity, realm);
                }
                if (matches) {
                    matchingAccounts[cacheKey] = entity;
                }
            });
            return matchingAccounts;
        };
        /**
         * retrieve credentails matching all provided filters; if no filter is set, get all credentials
         * @param homeAccountId
         * @param environment
         * @param credentialType
         * @param clientId
         * @param realm
         * @param target
         */
        CacheManager.prototype.getCredentialsFilteredBy = function (filter) {
            return this.getCredentialsFilteredByInternal(filter.homeAccountId, filter.environment, filter.credentialType, filter.clientId, filter.realm, filter.target);
        };
        /**
         * Support function to help match credentials
         * @param homeAccountId
         * @param environment
         * @param credentialType
         * @param clientId
         * @param realm
         * @param target
         */
        CacheManager.prototype.getCredentialsFilteredByInternal = function (homeAccountId, environment, credentialType, clientId, realm, target) {
            var _this = this;
            var allCacheKeys = this.getKeys();
            var matchingCredentials = {
                idTokens: {},
                accessTokens: {},
                refreshTokens: {}
            };
            allCacheKeys.forEach(function (cacheKey) {
                var matches = true;
                var entity;
                // don't parse any non-credential type cache entities
                var credType = CredentialEntity.getCredentialType(cacheKey);
                if (credType === Constants.NOT_DEFINED) {
                    return;
                }
                // Attempt retrieval
                try {
                    entity = _this.getItem(cacheKey, CacheSchemaType.CREDENTIAL);
                }
                catch (e) {
                    return;
                }
                if (!StringUtils.isEmpty(homeAccountId)) {
                    matches = _this.matchHomeAccountId(entity, homeAccountId);
                }
                if (!StringUtils.isEmpty(environment)) {
                    matches = matches && _this.matchEnvironment(entity, environment);
                }
                if (!StringUtils.isEmpty(realm)) {
                    matches = matches && _this.matchRealm(entity, realm);
                }
                if (!StringUtils.isEmpty(credentialType)) {
                    matches = matches && _this.matchCredentialType(entity, credentialType);
                }
                if (!StringUtils.isEmpty(clientId)) {
                    matches = matches && _this.matchClientId(entity, clientId);
                }
                // idTokens do not have "target", target specific refreshTokens do exist for some types of authentication
                // TODO: Add case for target specific refresh tokens
                if (!StringUtils.isEmpty(target) && credType === CredentialType.ACCESS_TOKEN) {
                    matches = matches && _this.matchTarget(entity, target);
                }
                if (matches) {
                    switch (credType) {
                        case CredentialType.ID_TOKEN:
                            matchingCredentials.idTokens[cacheKey] = entity;
                            break;
                        case CredentialType.ACCESS_TOKEN:
                            matchingCredentials.accessTokens[cacheKey] = entity;
                            break;
                        case CredentialType.REFRESH_TOKEN:
                            matchingCredentials.refreshTokens[cacheKey] = entity;
                            break;
                    }
                }
            });
            return matchingCredentials;
        };
        /**
         * returns a boolean if the given account is removed
         * @param account
         */
        CacheManager.prototype.removeAccount = function (accountKey) {
            var account = this.getAccount(accountKey);
            if (!account) {
                throw ClientAuthError.createNoAccountFoundError();
            }
            return (this.removeAccountContext(account) && this.removeItem(accountKey, CacheSchemaType.ACCOUNT));
        };
        /**
         * returns a boolean if the given account is removed
         * @param account
         */
        CacheManager.prototype.removeAccountContext = function (account) {
            var _this = this;
            var allCacheKeys = this.getKeys();
            var accountId = account.generateAccountId();
            allCacheKeys.forEach(function (cacheKey) {
                // don't parse any non-credential type cache entities
                if (CredentialEntity.getCredentialType(cacheKey) === Constants.NOT_DEFINED) {
                    return;
                }
                var cacheEntity = _this.getItem(cacheKey, CacheSchemaType.CREDENTIAL);
                if (!!cacheEntity && accountId === cacheEntity.generateAccountId()) {
                    _this.removeCredential(cacheEntity);
                }
            });
            return true;
        };
        /**
         * returns a boolean if the given credential is removed
         * @param credential
         */
        CacheManager.prototype.removeCredential = function (credential) {
            var key = credential.generateCredentialKey();
            return this.removeItem(key, CacheSchemaType.CREDENTIAL);
        };
        /**
         *
         * @param value
         * @param homeAccountId
         */
        CacheManager.prototype.matchHomeAccountId = function (entity, homeAccountId) {
            return homeAccountId === entity.homeAccountId;
        };
        /**
         *
         * @param value
         * @param environment
         */
        CacheManager.prototype.matchEnvironment = function (entity, environment) {
            var cloudMetadata = TrustedAuthority.getCloudDiscoveryMetadata(environment);
            if (cloudMetadata &&
                cloudMetadata.aliases.indexOf(entity.environment) > -1) {
                return true;
            }
            return false;
        };
        /**
         *
         * @param entity
         * @param credentialType
         */
        CacheManager.prototype.matchCredentialType = function (entity, credentialType) {
            return credentialType.toLowerCase() === entity.credentialType.toLowerCase();
        };
        /**
         *
         * @param entity
         * @param clientId
         */
        CacheManager.prototype.matchClientId = function (entity, clientId) {
            return clientId === entity.clientId;
        };
        /**
         *
         * @param entity
         * @param realm
         */
        CacheManager.prototype.matchRealm = function (entity, realm) {
            return realm === entity.realm;
        };
        /**
         * Returns true if the target scopes are a subset of the current entity's scopes, false otherwise.
         * @param entity
         * @param target
         */
        CacheManager.prototype.matchTarget = function (entity, target) {
            var entityScopeSet = ScopeSet.fromString(entity.target);
            var requestTargetScopeSet = ScopeSet.fromString(target);
            return entityScopeSet.containsScopeSet(requestTargetScopeSet);
        };
        /**
         * returns if a given cache entity is of the type appmetadata
         * @param key
         */
        CacheManager.prototype.isAppMetadata = function (key) {
            return key.indexOf(APP_META_DATA) !== -1;
        };
        /**
         * Helper to convert serialized data to object
         * @param obj
         * @param json
         */
        CacheManager.toObject = function (obj, json) {
            for (var propertyName in json) {
                obj[propertyName] = json[propertyName];
            }
            return obj;
        };
        return CacheManager;
    }());
    var DefaultStorageClass = /** @class */ (function (_super) {
        __extends$1(DefaultStorageClass, _super);
        function DefaultStorageClass() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DefaultStorageClass.prototype.setItem = function () {
            var notImplErr = "Storage interface - setItem() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getItem = function () {
            var notImplErr = "Storage interface - getItem() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.removeItem = function () {
            var notImplErr = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.containsKey = function () {
            var notImplErr = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getKeys = function () {
            var notImplErr = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.clear = function () {
            var notImplErr = "Storage interface - clear() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        return DefaultStorageClass;
    }(CacheManager));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    // Token renewal offset default in seconds
    var DEFAULT_TOKEN_RENEWAL_OFFSET_SEC = 300;
    var DEFAULT_AUTH_OPTIONS = {
        clientId: "",
        authority: null,
        knownAuthorities: [],
        cloudDiscoveryMetadata: ""
    };
    var DEFAULT_SYSTEM_OPTIONS = {
        tokenRenewalOffsetSeconds: DEFAULT_TOKEN_RENEWAL_OFFSET_SEC,
        telemetry: null
    };
    var DEFAULT_LOGGER_IMPLEMENTATION = {
        loggerCallback: function () {
            // allow users to not set loggerCallback
        },
        piiLoggingEnabled: false,
        logLevel: exports.LogLevel.Info
    };
    var DEFAULT_NETWORK_IMPLEMENTATION = {
        sendGetRequestAsync: function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var notImplErr;
                return __generator$1(this, function (_a) {
                    notImplErr = "Network interface - sendGetRequestAsync() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        },
        sendPostRequestAsync: function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var notImplErr;
                return __generator$1(this, function (_a) {
                    notImplErr = "Network interface - sendPostRequestAsync() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        }
    };
    var DEFAULT_CRYPTO_IMPLEMENTATION = {
        createNewGuid: function () {
            var notImplErr = "Crypto interface - createNewGuid() has not been implemented";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        base64Decode: function () {
            var notImplErr = "Crypto interface - base64Decode() has not been implemented";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        base64Encode: function () {
            var notImplErr = "Crypto interface - base64Encode() has not been implemented";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        generatePkceCodes: function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var notImplErr;
                return __generator$1(this, function (_a) {
                    notImplErr = "Crypto interface - generatePkceCodes() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        }
    };
    var DEFAULT_LIBRARY_INFO = {
        sku: Constants.SKU,
        version: version,
        cpu: "",
        os: ""
    };
    /**
     * Function that sets the default options when not explicitly configured from app developer
     *
     * @param Configuration
     *
     * @returns Configuration
     */
    function buildClientConfiguration(_a) {
        var userAuthOptions = _a.authOptions, userSystemOptions = _a.systemOptions, userLoggerOption = _a.loggerOptions, storageImplementation = _a.storageInterface, networkImplementation = _a.networkInterface, cryptoImplementation = _a.cryptoInterface, libraryInfo = _a.libraryInfo;
        return {
            authOptions: __assign$1(__assign$1({}, DEFAULT_AUTH_OPTIONS), userAuthOptions),
            systemOptions: __assign$1(__assign$1({}, DEFAULT_SYSTEM_OPTIONS), userSystemOptions),
            loggerOptions: __assign$1(__assign$1({}, DEFAULT_LOGGER_IMPLEMENTATION), userLoggerOption),
            storageInterface: storageImplementation || new DefaultStorageClass(),
            networkInterface: networkImplementation || DEFAULT_NETWORK_IMPLEMENTATION,
            cryptoInterface: cryptoImplementation || DEFAULT_CRYPTO_IMPLEMENTATION,
            libraryInfo: __assign$1(__assign$1({}, DEFAULT_LIBRARY_INFO), libraryInfo)
        };
    }

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Base application class which will construct requests to send to and handle responses from the Microsoft STS using the authorization code flow.
     */
    var BaseClient = /** @class */ (function () {
        function BaseClient(configuration) {
            // Set the configuration
            this.config = buildClientConfiguration(configuration);
            // Initialize the logger
            this.logger = new Logger(this.config.loggerOptions);
            // Initialize crypto
            this.cryptoUtils = this.config.cryptoInterface;
            // Initialize storage interface
            this.cacheManager = this.config.storageInterface;
            // Set the network interface
            this.networkClient = this.config.networkInterface;
            TrustedAuthority.setTrustedAuthoritiesFromConfig(this.config.authOptions.knownAuthorities, this.config.authOptions.cloudDiscoveryMetadata);
            this.authority = this.config.authOptions.authority;
        }
        /**
         * Creates default headers for requests to token endpoint
         */
        BaseClient.prototype.createDefaultTokenRequestHeaders = function () {
            var headers = this.createDefaultLibraryHeaders();
            headers.set(HeaderNames.CONTENT_TYPE, Constants.URL_FORM_CONTENT_TYPE);
            return headers;
        };
        /**
         * addLibraryData
         */
        BaseClient.prototype.createDefaultLibraryHeaders = function () {
            var headers = new Map();
            // client info headers
            headers.set("" + AADServerParamKeys.X_CLIENT_SKU, this.config.libraryInfo.sku);
            headers.set("" + AADServerParamKeys.X_CLIENT_VER, this.config.libraryInfo.version);
            headers.set("" + AADServerParamKeys.X_CLIENT_OS, this.config.libraryInfo.os);
            headers.set("" + AADServerParamKeys.X_CLIENT_CPU, this.config.libraryInfo.cpu);
            return headers;
        };
        /**
         * Http post to token endpoint
         * @param tokenEndpoint
         * @param queryString
         * @param headers
         */
        BaseClient.prototype.executePostToTokenEndpoint = function (tokenEndpoint, queryString, headers) {
            return this.networkClient.sendPostRequestAsync(tokenEndpoint, {
                body: queryString,
                headers: headers,
            });
        };
        return BaseClient;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Validates server consumable params from the "request" objects
     */
    var RequestValidator = /** @class */ (function () {
        function RequestValidator() {
        }
        /**
         * Utility to check if the `redirectUri` in the request is a non-null value
         * @param redirectUri
         */
        RequestValidator.validateRedirectUri = function (redirectUri) {
            if (StringUtils.isEmpty(redirectUri)) {
                throw ClientConfigurationError.createRedirectUriEmptyError();
            }
        };
        /**
         * Utility to validate prompt sent by the user in the request
         * @param prompt
         */
        RequestValidator.validatePrompt = function (prompt) {
            if ([
                PromptValue.LOGIN,
                PromptValue.SELECT_ACCOUNT,
                PromptValue.CONSENT,
                PromptValue.NONE
            ].indexOf(prompt) < 0) {
                throw ClientConfigurationError.createInvalidPromptError(prompt);
            }
        };
        /**
         * Utility to validate code_challenge and code_challenge_method
         * @param codeChallenge
         * @param codeChallengeMethod
         */
        RequestValidator.validateCodeChallengeParams = function (codeChallenge, codeChallengeMethod) {
            if (StringUtils.isEmpty(codeChallenge) || StringUtils.isEmpty(codeChallengeMethod)) {
                throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
            }
            else {
                this.validateCodeChallengeMethod(codeChallengeMethod);
            }
        };
        /**
         * Utility to validate code_challenge_method
         * @param codeChallengeMethod
         */
        RequestValidator.validateCodeChallengeMethod = function (codeChallengeMethod) {
            if ([
                CodeChallengeMethodValues.PLAIN,
                CodeChallengeMethodValues.S256
            ].indexOf(codeChallengeMethod) < 0) {
                throw ClientConfigurationError.createInvalidCodeChallengeMethodError();
            }
        };
        /**
         * Removes unnecessary or duplicate query parameters from extraQueryParameters
         * @param request
         */
        RequestValidator.sanitizeEQParams = function (eQParams, queryParams) {
            if (!eQParams) {
                return null;
            }
            // Remove any query parameters already included in SSO params
            queryParams.forEach(function (value, key) {
                if (eQParams[key]) {
                    delete eQParams[key];
                }
            });
            return eQParams;
        };
        return RequestValidator;
    }());

    /*
    * Copyright (c) Microsoft Corporation. All rights reserved.
    * Licensed under the MIT License.
    */
    var RequestParameterBuilder = /** @class */ (function () {
        function RequestParameterBuilder() {
            this.parameters = new Map();
        }
        /**
         * add response_type = code
         */
        RequestParameterBuilder.prototype.addResponseTypeCode = function () {
            this.parameters.set(AADServerParamKeys.RESPONSE_TYPE, encodeURIComponent(Constants.CODE_RESPONSE_TYPE));
        };
        /**
         * add response_mode. defaults to query.
         * @param responseMode
         */
        RequestParameterBuilder.prototype.addResponseMode = function (responseMode) {
            this.parameters.set(AADServerParamKeys.RESPONSE_MODE, encodeURIComponent((responseMode) ? responseMode : ResponseMode.QUERY));
        };
        /**
         * add scopes
         * @param scopeSet
         */
        RequestParameterBuilder.prototype.addScopes = function (scopeSet) {
            this.parameters.set(AADServerParamKeys.SCOPE, encodeURIComponent(scopeSet.printScopes()));
        };
        /**
         * add clientId
         * @param clientId
         */
        RequestParameterBuilder.prototype.addClientId = function (clientId) {
            this.parameters.set(AADServerParamKeys.CLIENT_ID, encodeURIComponent(clientId));
        };
        /**
         * add redirect_uri
         * @param redirectUri
         */
        RequestParameterBuilder.prototype.addRedirectUri = function (redirectUri) {
            RequestValidator.validateRedirectUri(redirectUri);
            this.parameters.set(AADServerParamKeys.REDIRECT_URI, encodeURIComponent(redirectUri));
        };
        /**
         * add domain_hint
         * @param domainHint
         */
        RequestParameterBuilder.prototype.addDomainHint = function (domainHint) {
            this.parameters.set(SSOTypes.DOMAIN_HINT, encodeURIComponent(domainHint));
        };
        /**
         * add login_hint
         * @param loginHint
         */
        RequestParameterBuilder.prototype.addLoginHint = function (loginHint) {
            this.parameters.set(SSOTypes.LOGIN_HINT, encodeURIComponent(loginHint));
        };
        /**
         * add claims
         * @param claims
         */
        RequestParameterBuilder.prototype.addClaims = function (claims) {
            this.parameters.set(AADServerParamKeys.CLAIMS, encodeURIComponent(claims));
        };
        /**
         * add correlationId
         * @param correlationId
         */
        RequestParameterBuilder.prototype.addCorrelationId = function (correlationId) {
            this.parameters.set(AADServerParamKeys.CLIENT_REQUEST_ID, encodeURIComponent(correlationId));
        };
        /**
         * add library info query params
         * @param libraryInfo
         */
        RequestParameterBuilder.prototype.addLibraryInfo = function (libraryInfo) {
            // Telemetry Info
            this.parameters.set(AADServerParamKeys.X_CLIENT_SKU, libraryInfo.sku);
            this.parameters.set(AADServerParamKeys.X_CLIENT_VER, libraryInfo.version);
            this.parameters.set(AADServerParamKeys.X_CLIENT_OS, libraryInfo.os);
            this.parameters.set(AADServerParamKeys.X_CLIENT_CPU, libraryInfo.cpu);
        };
        /**
         * add prompt
         * @param prompt
         */
        RequestParameterBuilder.prototype.addPrompt = function (prompt) {
            RequestValidator.validatePrompt(prompt);
            this.parameters.set("" + AADServerParamKeys.PROMPT, encodeURIComponent(prompt));
        };
        /**
         * add state
         * @param state
         */
        RequestParameterBuilder.prototype.addState = function (state) {
            if (!StringUtils.isEmpty(state)) {
                this.parameters.set(AADServerParamKeys.STATE, encodeURIComponent(state));
            }
        };
        /**
         * add nonce
         * @param nonce
         */
        RequestParameterBuilder.prototype.addNonce = function (nonce) {
            this.parameters.set(AADServerParamKeys.NONCE, encodeURIComponent(nonce));
        };
        /**
         * add code_challenge and code_challenge_method
         * - throw if either of them are not passed
         * @param codeChallenge
         * @param codeChallengeMethod
         */
        RequestParameterBuilder.prototype.addCodeChallengeParams = function (codeChallenge, codeChallengeMethod) {
            RequestValidator.validateCodeChallengeParams(codeChallenge, codeChallengeMethod);
            if (codeChallenge && codeChallengeMethod) {
                this.parameters.set(AADServerParamKeys.CODE_CHALLENGE, encodeURIComponent(codeChallenge));
                this.parameters.set(AADServerParamKeys.CODE_CHALLENGE_METHOD, encodeURIComponent(codeChallengeMethod));
            }
            else {
                throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
            }
        };
        /**
         * add the `authorization_code` passed by the user to exchange for a token
         * @param code
         */
        RequestParameterBuilder.prototype.addAuthorizationCode = function (code) {
            this.parameters.set(AADServerParamKeys.CODE, encodeURIComponent(code));
        };
        /**
         * add the `authorization_code` passed by the user to exchange for a token
         * @param code
         */
        RequestParameterBuilder.prototype.addDeviceCode = function (code) {
            this.parameters.set(AADServerParamKeys.DEVICE_CODE, encodeURIComponent(code));
        };
        /**
         * add the `refreshToken` passed by the user
         * @param refreshToken
         */
        RequestParameterBuilder.prototype.addRefreshToken = function (refreshToken) {
            this.parameters.set(AADServerParamKeys.REFRESH_TOKEN, encodeURIComponent(refreshToken));
        };
        /**
         * add the `code_verifier` passed by the user to exchange for a token
         * @param codeVerifier
         */
        RequestParameterBuilder.prototype.addCodeVerifier = function (codeVerifier) {
            this.parameters.set(AADServerParamKeys.CODE_VERIFIER, encodeURIComponent(codeVerifier));
        };
        /**
         * add client_secret
         * @param clientSecret
         */
        // TODO uncomment when confidential client flow is added.
        // addClientSecret(clientSecret: string): void {
        //     params.set(`${AADServerParamKeys.CLIENT_SECRET}`, clientSecret);
        // }
        /**
         * add grant type
         * @param grantType
         */
        RequestParameterBuilder.prototype.addGrantType = function (grantType) {
            this.parameters.set(AADServerParamKeys.GRANT_TYPE, encodeURIComponent(grantType));
        };
        /**
         * add client info
         *
         */
        RequestParameterBuilder.prototype.addClientInfo = function () {
            this.parameters.set(ClientInfo, "1");
        };
        /**
         * add extraQueryParams
         * @param eQparams
         */
        RequestParameterBuilder.prototype.addExtraQueryParameters = function (eQparams) {
            var _this = this;
            RequestValidator.sanitizeEQParams(eQparams, this.parameters);
            Object.keys(eQparams).forEach(function (key) {
                _this.parameters.set(key, eQparams[key]);
            });
        };
        /**
         * Utility to create a URL from the params map
         */
        RequestParameterBuilder.prototype.createQueryString = function () {
            var queryParameterArray = new Array();
            this.parameters.forEach(function (value, key) {
                queryParameterArray.push(key + "=" + value);
            });
            return queryParameterArray.join("&");
        };
        return RequestParameterBuilder;
    }());

    /**
     * Error thrown when there is an error with the server code, for example, unavailability.
     */
    var ServerError = /** @class */ (function (_super) {
        __extends$1(ServerError, _super);
        function ServerError(errorCode, errorMessage, subError) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            _this.name = "ServerError";
            _this.subError = subError;
            Object.setPrototypeOf(_this, ServerError.prototype);
            return _this;
        }
        return ServerError;
    }(AuthError));

    /**
     * Id Token representation class. Parses id token string and generates claims object.
     */
    var IdToken = /** @class */ (function () {
        function IdToken(rawIdToken, crypto) {
            if (StringUtils.isEmpty(rawIdToken)) {
                throw ClientAuthError.createIdTokenNullOrEmptyError(rawIdToken);
            }
            this.rawIdToken = rawIdToken;
            this.claims = IdToken.extractIdToken(rawIdToken, crypto);
        }
        /**
         * Extract IdToken by decoding the RAWIdToken
         *
         * @param encodedIdToken
         */
        IdToken.extractIdToken = function (encodedIdToken, crypto) {
            // id token will be decoded to get the username
            var decodedToken = StringUtils.decodeJwt(encodedIdToken);
            if (!decodedToken) {
                return null;
            }
            try {
                var base64IdTokenPayload = decodedToken.JWSPayload;
                // base64Decode() should throw an error if there is an issue
                var base64Decoded = crypto.base64Decode(base64IdTokenPayload);
                return JSON.parse(base64Decoded);
            }
            catch (err) {
                throw ClientAuthError.createIdTokenParsingError(err);
            }
        };
        return IdToken;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Utility class which exposes functions for managing date and time operations.
     */
    var TimeUtils = /** @class */ (function () {
        function TimeUtils() {
        }
        /**
         * return the current time in Unix time (seconds).
         */
        TimeUtils.nowSeconds = function () {
            // Date.getTime() returns in milliseconds.
            return Math.round(new Date().getTime() / 1000.0);
        };
        return TimeUtils;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Authority types supported by MSAL.
     */
    var AuthorityType;
    (function (AuthorityType) {
        AuthorityType[AuthorityType["Default"] = 0] = "Default";
        AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
    })(AuthorityType || (AuthorityType = {}));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * ID_TOKEN Cache
     *
     * Key:Value Schema:
     *
     * Key Example: uid.utid-login.microsoftonline.com-idtoken-clientId-contoso.com-
     *
     * Value Schema:
     * {
     *      homeAccountId: home account identifier for the auth scheme,
     *      environment: entity that issued the token, represented as a full host
     *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
     *      clientId: client ID of the application
     *      secret: Actual credential as a string
     *      realm: Full tenant or organizational identifier that the account belongs to
     * }
     */
    var IdTokenEntity = /** @class */ (function (_super) {
        __extends$1(IdTokenEntity, _super);
        function IdTokenEntity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Create IdTokenEntity
         * @param homeAccountId
         * @param authenticationResult
         * @param clientId
         * @param authority
         */
        IdTokenEntity.createIdTokenEntity = function (homeAccountId, environment, idToken, clientId, tenantId) {
            var idTokenEntity = new IdTokenEntity();
            idTokenEntity.credentialType = CredentialType.ID_TOKEN;
            idTokenEntity.homeAccountId = homeAccountId;
            idTokenEntity.environment = environment;
            idTokenEntity.clientId = clientId;
            idTokenEntity.secret = idToken;
            idTokenEntity.realm = tenantId;
            return idTokenEntity;
        };
        return IdTokenEntity;
    }(CredentialEntity));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * ACCESS_TOKEN Credential Type
     *
     * Key:Value Schema:
     *
     * Key Example: uid.utid-login.microsoftonline.com-accesstoken-clientId-contoso.com-user.read
     *
     * Value Schema:
     * {
     *      homeAccountId: home account identifier for the auth scheme,
     *      environment: entity that issued the token, represented as a full host
     *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
     *      clientId: client ID of the application
     *      secret: Actual credential as a string
     *      familyId: Family ID identifier, usually only used for refresh tokens
     *      realm: Full tenant or organizational identifier that the account belongs to
     *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
     *      cachedAt: Absolute device time when entry was created in the cache.
     *      expiresOn: Token expiry time, calculated based on current UTC time in seconds. Represented as a string.
     *      extendedExpiresOn: Additional extended expiry time until when token is valid in case of server-side outage. Represented as string in UTC seconds.
     *      keyId: used for POP and SSH tokenTypes
     *      tokenType: Type of the token issued. Usually "Bearer"
     * }
     */
    var AccessTokenEntity = /** @class */ (function (_super) {
        __extends$1(AccessTokenEntity, _super);
        function AccessTokenEntity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Create AccessTokenEntity
         * @param homeAccountId
         * @param environment
         * @param accessToken
         * @param clientId
         * @param tenantId
         * @param scopes
         * @param expiresOn
         * @param extExpiresOn
         */
        AccessTokenEntity.createAccessTokenEntity = function (homeAccountId, environment, accessToken, clientId, tenantId, scopes, expiresOn, extExpiresOn) {
            var atEntity = new AccessTokenEntity();
            atEntity.homeAccountId = homeAccountId;
            atEntity.credentialType = CredentialType.ACCESS_TOKEN;
            atEntity.secret = accessToken;
            var currentTime = TimeUtils.nowSeconds();
            atEntity.cachedAt = currentTime.toString();
            // Token expiry time.
            // This value should be  calculated based on the current UTC time measured locally and the value  expires_in Represented as a string in JSON.
            atEntity.expiresOn = expiresOn.toString();
            atEntity.extendedExpiresOn = extExpiresOn.toString();
            atEntity.environment = environment;
            atEntity.clientId = clientId;
            atEntity.realm = tenantId;
            atEntity.target = scopes;
            return atEntity;
        };
        return AccessTokenEntity;
    }(CredentialEntity));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * REFRESH_TOKEN Cache
     *
     * Key:Value Schema:
     *
     * Key Example: uid.utid-login.microsoftonline.com-refreshtoken-clientId--
     *
     * Value:
     * {
     *      homeAccountId: home account identifier for the auth scheme,
     *      environment: entity that issued the token, represented as a full host
     *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
     *      clientId: client ID of the application
     *      secret: Actual credential as a string
     *      familyId: Family ID identifier, '1' represents Microsoft Family
     *      realm: Full tenant or organizational identifier that the account belongs to
     *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
     * }
     */
    var RefreshTokenEntity = /** @class */ (function (_super) {
        __extends$1(RefreshTokenEntity, _super);
        function RefreshTokenEntity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Create RefreshTokenEntity
         * @param homeAccountId
         * @param authenticationResult
         * @param clientId
         * @param authority
         */
        RefreshTokenEntity.createRefreshTokenEntity = function (homeAccountId, environment, refreshToken, clientId, familyId) {
            var rtEntity = new RefreshTokenEntity();
            rtEntity.clientId = clientId;
            rtEntity.credentialType = CredentialType.REFRESH_TOKEN;
            rtEntity.environment = environment;
            rtEntity.homeAccountId = homeAccountId;
            rtEntity.secret = refreshToken;
            if (familyId)
                rtEntity.familyId = familyId;
            return rtEntity;
        };
        return RefreshTokenEntity;
    }(CredentialEntity));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * InteractionRequiredAuthErrorMessage class containing string constants used by error codes and messages.
     */
    var InteractionRequiredAuthErrorMessage = [
        "interaction_required",
        "consent_required",
        "login_required"
    ];
    var InteractionRequiredAuthSubErrorMessage = [
        "message_only",
        "additional_action",
        "basic_action",
        "user_password_expired",
        "consent_required"
    ];
    /**
     * Error thrown when user interaction is required at the auth server.
     */
    var InteractionRequiredAuthError = /** @class */ (function (_super) {
        __extends$1(InteractionRequiredAuthError, _super);
        function InteractionRequiredAuthError(errorCode, errorMessage, subError) {
            var _this = _super.call(this, errorCode, errorMessage, subError) || this;
            _this.name = "InteractionRequiredAuthError";
            Object.setPrototypeOf(_this, InteractionRequiredAuthError.prototype);
            return _this;
        }
        InteractionRequiredAuthError.isInteractionRequiredError = function (errorCode, errorString, subError) {
            var isInteractionRequiredErrorCode = !StringUtils.isEmpty(errorCode) && InteractionRequiredAuthErrorMessage.indexOf(errorCode) > -1;
            var isInteractionRequiredSubError = !StringUtils.isEmpty(subError) && InteractionRequiredAuthSubErrorMessage.indexOf(subError) > -1;
            var isInteractionRequiredErrorDesc = !StringUtils.isEmpty(errorString) && InteractionRequiredAuthErrorMessage.some(function (irErrorCode) {
                return errorString.indexOf(irErrorCode) > -1;
            });
            return isInteractionRequiredErrorCode || isInteractionRequiredErrorDesc || isInteractionRequiredSubError;
        };
        return InteractionRequiredAuthError;
    }(ServerError));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var CacheRecord = /** @class */ (function () {
        function CacheRecord(accountEntity, idTokenEntity, accessTokenEntity, refreshTokenEntity) {
            this.account = accountEntity;
            this.idToken = idTokenEntity;
            this.accessToken = accessTokenEntity;
            this.refreshToken = refreshTokenEntity;
        }
        return CacheRecord;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Class which provides helpers for OAuth 2.0 protocol specific values
     */
    var ProtocolUtils = /** @class */ (function () {
        function ProtocolUtils() {
        }
        /**
         * Appends user state with random guid, or returns random guid.
         * @param userState
         * @param randomGuid
         */
        ProtocolUtils.setRequestState = function (userState, cryptoObj) {
            var libraryState = ProtocolUtils.generateLibraryState(cryptoObj);
            return !StringUtils.isEmpty(userState) ? "" + libraryState + Constants.RESOURCE_DELIM + userState : libraryState;
        };
        /**
         * Generates the state value used by the library.
         * @param randomGuid
         * @param cryptoObj
         */
        ProtocolUtils.generateLibraryState = function (cryptoObj) {
            if (!cryptoObj) {
                throw ClientAuthError.createNoCryptoObjectError("generateLibraryState");
            }
            // Create a state object containing a unique id and the timestamp of the request creation
            var stateObj = {
                id: cryptoObj.createNewGuid(),
                ts: TimeUtils.nowSeconds()
            };
            var stateString = JSON.stringify(stateObj);
            return cryptoObj.base64Encode(stateString);
        };
        /**
         * Parses the state into the RequestStateObject, which contains the LibraryState info and the state passed by the user.
         * @param state
         * @param cryptoObj
         */
        ProtocolUtils.parseRequestState = function (state, cryptoObj) {
            if (!cryptoObj) {
                throw ClientAuthError.createNoCryptoObjectError("parseRequestState");
            }
            if (StringUtils.isEmpty(state)) {
                throw ClientAuthError.createInvalidStateError(state, "Null, undefined or empty state");
            }
            try {
                // Split the state between library state and user passed state and decode them separately
                var splitState = decodeURIComponent(state).split(Constants.RESOURCE_DELIM);
                var libraryState = splitState[0];
                var userState = splitState.length > 1 ? splitState.slice(1).join(Constants.RESOURCE_DELIM) : "";
                var libraryStateString = cryptoObj.base64Decode(libraryState);
                var libraryStateObj = JSON.parse(libraryStateString);
                return {
                    userRequestState: !StringUtils.isEmpty(userState) ? userState : "",
                    libraryState: libraryStateObj
                };
            }
            catch (e) {
                throw ClientAuthError.createInvalidStateError(state, e);
            }
        };
        return ProtocolUtils;
    }());

    /**
     * Class that handles response parsing.
     */
    var ResponseHandler = /** @class */ (function () {
        function ResponseHandler(clientId, cacheStorage, cryptoObj, logger) {
            this.clientId = clientId;
            this.cacheStorage = cacheStorage;
            this.cryptoObj = cryptoObj;
            this.logger = logger;
        }
        /**
         * Function which validates server authorization code response.
         * @param serverResponseHash
         * @param cachedState
         * @param cryptoObj
         */
        ResponseHandler.prototype.validateServerAuthorizationCodeResponse = function (serverResponseHash, cachedState, cryptoObj) {
            if (serverResponseHash.state !== cachedState) {
                throw ClientAuthError.createStateMismatchError();
            }
            // Check for error
            if (serverResponseHash.error || serverResponseHash.error_description || serverResponseHash.suberror) {
                if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponseHash.error, serverResponseHash.error_description, serverResponseHash.suberror)) {
                    throw new InteractionRequiredAuthError(serverResponseHash.error, serverResponseHash.error_description, serverResponseHash.suberror);
                }
                throw new ServerError(serverResponseHash.error, serverResponseHash.error_description, serverResponseHash.suberror);
            }
            if (serverResponseHash.client_info) {
                buildClientInfo(serverResponseHash.client_info, cryptoObj);
            }
        };
        /**
         * Function which validates server authorization token response.
         * @param serverResponse
         */
        ResponseHandler.prototype.validateTokenResponse = function (serverResponse) {
            // Check for error
            if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
                if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) {
                    throw new InteractionRequiredAuthError(serverResponse.error, serverResponse.error_description, serverResponse.suberror);
                }
                var errString = serverResponse.error_codes + " - [" + serverResponse.timestamp + "]: " + serverResponse.error_description + " - Correlation ID: " + serverResponse.correlation_id + " - Trace ID: " + serverResponse.trace_id;
                throw new ServerError(serverResponse.error, errString);
            }
            // generate homeAccountId
            if (serverResponse.client_info) {
                this.clientInfo = buildClientInfo(serverResponse.client_info, this.cryptoObj);
                if (!StringUtils.isEmpty(this.clientInfo.uid) && !StringUtils.isEmpty(this.clientInfo.utid)) {
                    this.homeAccountIdentifier = this.clientInfo.uid + "." + this.clientInfo.utid;
                }
            }
        };
        /**
         * Returns a constructed token response based on given string. Also manages the cache updates and cleanups.
         * @param serverTokenResponse
         * @param authority
         */
        ResponseHandler.prototype.handleServerTokenResponse = function (serverTokenResponse, authority, cachedNonce, cachedState) {
            // create an idToken object (not entity)
            var idTokenObj = new IdToken(serverTokenResponse.id_token, this.cryptoObj);
            // token nonce check (TODO: Add a warning if no nonce is given?)
            if (!StringUtils.isEmpty(cachedNonce)) {
                if (idTokenObj.claims.nonce !== cachedNonce) {
                    throw ClientAuthError.createNonceMismatchError();
                }
            }
            // save the response tokens
            var requestStateObj = null;
            if (!StringUtils.isEmpty(cachedState)) {
                requestStateObj = ProtocolUtils.parseRequestState(cachedState, this.cryptoObj);
            }
            var cacheRecord = this.generateCacheRecord(serverTokenResponse, idTokenObj, authority, requestStateObj && requestStateObj.libraryState);
            this.cacheStorage.saveCacheRecord(cacheRecord);
            return ResponseHandler.generateAuthenticationResult(cacheRecord, idTokenObj, false, requestStateObj ? requestStateObj.userRequestState : null);
        };
        /**
         * Generates CacheRecord
         * @param serverTokenResponse
         * @param idTokenObj
         * @param authority
         */
        ResponseHandler.prototype.generateCacheRecord = function (serverTokenResponse, idTokenObj, authority, libraryState) {
            // Account
            var cachedAccount = this.generateAccountEntity(serverTokenResponse, idTokenObj, authority);
            var reqEnvironment = authority.canonicalAuthorityUrlComponents.HostNameAndPort;
            var env = TrustedAuthority.getCloudDiscoveryMetadata(reqEnvironment) ? TrustedAuthority.getCloudDiscoveryMetadata(reqEnvironment).preferred_cache : "";
            if (StringUtils.isEmpty(env)) {
                throw ClientAuthError.createInvalidCacheEnvironmentError();
            }
            // IdToken
            var cachedIdToken = IdTokenEntity.createIdTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.id_token, this.clientId, idTokenObj.claims.tid);
            // AccessToken
            var responseScopes = ScopeSet.fromString(serverTokenResponse.scope);
            // Expiration calculation
            var currentTime = TimeUtils.nowSeconds();
            // If the request timestamp was sent in the library state, use that timestamp to calculate expiration. Otherwise, use current time.
            var timestamp = libraryState ? libraryState.ts : currentTime;
            var tokenExpirationSeconds = timestamp + serverTokenResponse.expires_in;
            var extendedTokenExpirationSeconds = tokenExpirationSeconds + serverTokenResponse.ext_expires_in;
            var cachedAccessToken = AccessTokenEntity.createAccessTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.access_token, this.clientId, idTokenObj.claims.tid, responseScopes.printScopes(), tokenExpirationSeconds, extendedTokenExpirationSeconds);
            // refreshToken
            var cachedRefreshToken = RefreshTokenEntity.createRefreshTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.refresh_token, this.clientId, serverTokenResponse.foci);
            return new CacheRecord(cachedAccount, cachedIdToken, cachedAccessToken, cachedRefreshToken);
        };
        /**
         * Generate Account
         * @param serverTokenResponse
         * @param idToken
         * @param authority
         */
        ResponseHandler.prototype.generateAccountEntity = function (serverTokenResponse, idToken, authority) {
            var authorityType = authority.authorityType;
            if (StringUtils.isEmpty(serverTokenResponse.client_info)) {
                throw ClientAuthError.createClientInfoEmptyError(serverTokenResponse.client_info);
            }
            return (authorityType === AuthorityType.Adfs) ?
                AccountEntity.createADFSAccount(authority, idToken) :
                AccountEntity.createAccount(serverTokenResponse.client_info, authority, idToken, this.cryptoObj);
        };
        /**
         * Creates an @AuthenticationResult from @CacheRecord , @IdToken , and a boolean that states whether or not the result is from cache.
         *
         * Optionally takes a state string that is set as-is in the response.
         *
         * @param cacheRecord
         * @param idTokenObj
         * @param fromTokenCache
         * @param stateString
         */
        ResponseHandler.generateAuthenticationResult = function (cacheRecord, idTokenObj, fromTokenCache, stateString) {
            var responseScopes = ScopeSet.fromString(cacheRecord.accessToken.target);
            return {
                uniqueId: idTokenObj.claims.oid || idTokenObj.claims.sub,
                tenantId: idTokenObj.claims.tid,
                scopes: responseScopes.asArray(),
                account: cacheRecord.account.getAccountInfo(),
                idToken: idTokenObj.rawIdToken,
                idTokenClaims: idTokenObj.claims,
                accessToken: cacheRecord.accessToken.secret,
                fromCache: fromTokenCache,
                expiresOn: new Date(Number(cacheRecord.accessToken.expiresOn) * 1000),
                extExpiresOn: new Date(Number(cacheRecord.accessToken.extendedExpiresOn) * 1000),
                familyId: cacheRecord.refreshToken.familyId || null,
                state: stateString || ""
            };
        };
        return ResponseHandler;
    }());

    /**
     * Url object class which can perform various transformations on url strings.
     */
    var UrlString = /** @class */ (function () {
        function UrlString(url) {
            this._urlString = url;
            if (!StringUtils.isEmpty(this._urlString) && StringUtils.isEmpty(this.getHash())) {
                this._urlString = this.canonicalizeUri(url);
            }
            else if (StringUtils.isEmpty(this._urlString)) {
                // Throws error if url is empty
                throw ClientConfigurationError.createUrlEmptyError();
            }
        }
        Object.defineProperty(UrlString.prototype, "urlString", {
            get: function () {
                return this._urlString;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Ensure urls are lower case and end with a / character.
         * @param url
         */
        UrlString.prototype.canonicalizeUri = function (url) {
            if (url) {
                url = url.toLowerCase();
            }
            if (url && !StringUtils.endsWith(url, "/")) {
                url += "/";
            }
            return url;
        };
        /**
         * Throws if urlString passed is not a valid authority URI string.
         */
        UrlString.prototype.validateAsUri = function () {
            // Attempts to parse url for uri components
            var components;
            try {
                components = this.getUrlComponents();
            }
            catch (e) {
                throw ClientConfigurationError.createUrlParseError(e);
            }
            // Throw error if URI or path segments are not parseable.
            if (!components.HostNameAndPort || !components.PathSegments || components.PathSegments.length < 1) {
                throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
            }
            // Throw error if uri is insecure.
            if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
                throw ClientConfigurationError.createInsecureAuthorityUriError(this.urlString);
            }
        };
        /**
         * Function to remove query string params from url. Returns the new url.
         * @param url
         * @param name
         */
        UrlString.prototype.urlRemoveQueryStringParameter = function (name) {
            var regex = new RegExp("(\\&" + name + "=)[^\&]+");
            this._urlString = this.urlString.replace(regex, "");
            // name=value&
            regex = new RegExp("(" + name + "=)[^\&]+&");
            this._urlString = this.urlString.replace(regex, "");
            // name=value
            regex = new RegExp("(" + name + "=)[^\&]+");
            this._urlString = this.urlString.replace(regex, "");
            return this.urlString;
        };
        UrlString.removeHashFromUrl = function (url) {
            return url.split("#")[0];
        };
        /**
         * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
         * @param href The url
         * @param tenantId The tenant id to replace
         */
        UrlString.prototype.replaceTenantPath = function (tenantId) {
            var urlObject = this.getUrlComponents();
            var pathArray = urlObject.PathSegments;
            if (tenantId && (pathArray.length !== 0 && (pathArray[0] === AADAuthorityConstants.COMMON || pathArray[0] === AADAuthorityConstants.ORGANIZATIONS))) {
                pathArray[0] = tenantId;
            }
            return UrlString.constructAuthorityUriFromObject(urlObject);
        };
        /**
         * Returns the anchor part(#) of the URL
         */
        UrlString.prototype.getHash = function () {
            var hashIndex1 = this.urlString.indexOf("#");
            var hashIndex2 = this.urlString.indexOf("#/");
            if (hashIndex2 > -1) {
                return this.urlString.substring(hashIndex2 + 2);
            }
            else if (hashIndex1 > -1) {
                return this.urlString.substring(hashIndex1 + 1);
            }
            return "";
        };
        /**
         * Returns deserialized portion of URL hash
         */
        UrlString.prototype.getDeserializedHash = function () {
            var hash = this.getHash();
            var deserializedHash = StringUtils.queryStringToObject(hash);
            if (!deserializedHash) {
                throw ClientAuthError.createHashNotDeserializedError(JSON.stringify(deserializedHash));
            }
            return deserializedHash;
        };
        /**
         * Parses out the components from a url string.
         * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
         */
        UrlString.prototype.getUrlComponents = function () {
            // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
            var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
            // If url string does not match regEx, we throw an error
            var match = this.urlString.match(regEx);
            if (!match) {
                throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
            }
            // Url component object
            var urlComponents = {
                Protocol: match[1],
                HostNameAndPort: match[4],
                AbsolutePath: match[5]
            };
            var pathSegments = urlComponents.AbsolutePath.split("/");
            pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
            urlComponents.PathSegments = pathSegments;
            return urlComponents;
        };
        UrlString.constructAuthorityUriFromObject = function (urlObject) {
            return new UrlString(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + urlObject.PathSegments.join("/"));
        };
        /**
         * Check if the hash of the URL string contains known properties
         */
        UrlString.hashContainsKnownProperties = function (url) {
            if (StringUtils.isEmpty(url)) {
                return false;
            }
            var urlString = new UrlString(url);
            var parameters = urlString.getDeserializedHash();
            return !!(parameters.code ||
                parameters.error_description ||
                parameters.error ||
                parameters.state);
        };
        return UrlString;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Oauth2.0 Authorization Code client
     */
    var AuthorizationCodeClient = /** @class */ (function (_super) {
        __extends$1(AuthorizationCodeClient, _super);
        function AuthorizationCodeClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        /**
         * Creates the URL of the authorization request letting the user input credentials and consent to the
         * application. The URL target the /authorize endpoint of the authority configured in the
         * application object.
         *
         * Once the user inputs their credentials and consents, the authority will send a response to the redirect URI
         * sent in the request and should contain an authorization code, which can then be used to acquire tokens via
         * acquireToken(AuthorizationCodeRequest)
         * @param request
         */
        AuthorizationCodeClient.prototype.getAuthCodeUrl = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var queryString;
                return __generator$1(this, function (_a) {
                    queryString = this.createAuthCodeUrlQueryString(request);
                    return [2 /*return*/, this.authority.authorizationEndpoint + "?" + queryString];
                });
            });
        };
        /**
         * API to acquire a token in exchange of 'authorization_code` acquired by the user in the first leg of the
         * authorization_code_grant
         * @param request
         */
        AuthorizationCodeClient.prototype.acquireToken = function (request, cachedNonce, cachedState) {
            return __awaiter$1(this, void 0, void 0, function () {
                var response, responseHandler, tokenResponse;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.info("in acquireToken call");
                            // If no code response is given, we cannot acquire a token.
                            if (!request || StringUtils.isEmpty(request.code)) {
                                throw ClientAuthError.createTokenRequestCannotBeMadeError();
                            }
                            return [4 /*yield*/, this.executeTokenRequest(this.authority, request)];
                        case 1:
                            response = _a.sent();
                            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger);
                            // Validate response. This function throws a server error if an error is returned by the server.
                            responseHandler.validateTokenResponse(response.body);
                            tokenResponse = responseHandler.handleServerTokenResponse(response.body, this.authority, cachedNonce, cachedState);
                            return [2 /*return*/, tokenResponse];
                    }
                });
            });
        };
        /**
         * Handles the hash fragment response from public client code request. Returns a code response used by
         * the client to exchange for a token in acquireToken.
         * @param hashFragment
         */
        AuthorizationCodeClient.prototype.handleFragmentResponse = function (hashFragment, cachedState) {
            // Handle responses.
            var responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger);
            // Deserialize hash fragment response parameters.
            var hashUrlString = new UrlString(hashFragment);
            var serverParams = hashUrlString.getDeserializedHash();
            // Get code response
            responseHandler.validateServerAuthorizationCodeResponse(serverParams, cachedState, this.cryptoUtils);
            return serverParams.code;
        };
        /**
         * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
         * Default behaviour is to redirect the user to `window.location.href`.
         * @param authorityUri
         */
        AuthorizationCodeClient.prototype.getLogoutUri = function (logoutRequest) {
            // Throw error if logoutRequest is null/undefined
            if (!logoutRequest) {
                throw ClientConfigurationError.createEmptyLogoutRequestError();
            }
            if (logoutRequest.account) {
                // Clear given account.
                this.cacheManager.removeAccount(AccountEntity.generateAccountCacheKey(logoutRequest.account));
            }
            else {
                // Clear all accounts and tokens
                this.cacheManager.clear();
            }
            // Get postLogoutRedirectUri.
            var postLogoutUriParam = logoutRequest.postLogoutRedirectUri ?
                "?" + AADServerParamKeys.POST_LOGOUT_URI + "=" + encodeURIComponent(logoutRequest.postLogoutRedirectUri) : "";
            var correlationIdParam = logoutRequest.correlationId ?
                "&" + AADServerParamKeys.CLIENT_REQUEST_ID + "=" + encodeURIComponent(logoutRequest.correlationId) : "";
            // Construct logout URI.
            var logoutUri = "" + this.authority.endSessionEndpoint + postLogoutUriParam + correlationIdParam;
            return logoutUri;
        };
        /**
         * Executes POST request to token endpoint
         * @param authority
         * @param request
         */
        AuthorizationCodeClient.prototype.executeTokenRequest = function (authority, request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var requestBody, headers;
                return __generator$1(this, function (_a) {
                    requestBody = this.createTokenRequestBody(request);
                    headers = this.createDefaultTokenRequestHeaders();
                    return [2 /*return*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers)];
                });
            });
        };
        /**
         * Generates a map for all the params to be sent to the service
         * @param request
         */
        AuthorizationCodeClient.prototype.createTokenRequestBody = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            // validate the redirectUri (to be a non null value)
            parameterBuilder.addRedirectUri(request.redirectUri);
            var scopeSet = new ScopeSet(request.scopes || []);
            parameterBuilder.addScopes(scopeSet);
            // add code: user set, not validated
            parameterBuilder.addAuthorizationCode(request.code);
            // add code_verifier if passed
            if (request.codeVerifier) {
                parameterBuilder.addCodeVerifier(request.codeVerifier);
            }
            parameterBuilder.addGrantType(GrantType.AUTHORIZATION_CODE_GRANT);
            parameterBuilder.addClientInfo();
            var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
            parameterBuilder.addCorrelationId(correlationId);
            return parameterBuilder.createQueryString();
        };
        /**
         * This API validates the `AuthorizationCodeUrlRequest` and creates a URL
         * @param request
         */
        AuthorizationCodeClient.prototype.createAuthCodeUrlQueryString = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            var scopeSet = new ScopeSet(request.scopes || []);
            if (request.extraScopesToConsent) {
                scopeSet.appendScopes(request.extraScopesToConsent);
            }
            parameterBuilder.addScopes(scopeSet);
            // validate the redirectUri (to be a non null value)
            parameterBuilder.addRedirectUri(request.redirectUri);
            // generate the correlationId if not set by the user and add
            var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
            parameterBuilder.addCorrelationId(correlationId);
            // add response_mode. If not passed in it defaults to query.
            parameterBuilder.addResponseMode(request.responseMode);
            // add response_type = code
            parameterBuilder.addResponseTypeCode();
            // add library info parameters
            parameterBuilder.addLibraryInfo(this.config.libraryInfo);
            // add client_info=1
            parameterBuilder.addClientInfo();
            if (request.codeChallenge) {
                parameterBuilder.addCodeChallengeParams(request.codeChallenge, request.codeChallengeMethod);
            }
            if (request.prompt) {
                parameterBuilder.addPrompt(request.prompt);
            }
            if (request.loginHint) {
                parameterBuilder.addLoginHint(request.loginHint);
            }
            if (request.domainHint) {
                parameterBuilder.addDomainHint(request.domainHint);
            }
            if (request.nonce) {
                parameterBuilder.addNonce(request.nonce);
            }
            if (request.state) {
                parameterBuilder.addState(request.state);
            }
            if (request.claims) {
                parameterBuilder.addClaims(request.claims);
            }
            if (request.extraQueryParameters) {
                parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
            }
            return parameterBuilder.createQueryString();
        };
        return AuthorizationCodeClient;
    }(BaseClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * OAuth2.0 Device code client
     */
    var DeviceCodeClient = /** @class */ (function (_super) {
        __extends$1(DeviceCodeClient, _super);
        function DeviceCodeClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        /**
         * Gets device code from device code endpoint, calls back to with device code response, and
         * polls token endpoint to exchange device code for tokens
         * @param request
         */
        DeviceCodeClient.prototype.acquireToken = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var deviceCodeResponse, response;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getDeviceCode(request)];
                        case 1:
                            deviceCodeResponse = _a.sent();
                            request.deviceCodeCallback(deviceCodeResponse);
                            return [4 /*yield*/, this.acquireTokenWithDeviceCode(request, deviceCodeResponse)];
                        case 2:
                            response = _a.sent();
                            // TODO handle response
                            return [2 /*return*/, JSON.stringify(response)];
                    }
                });
            });
        };
        /**
         * Creates device code request and executes http GET
         * @param request
         */
        DeviceCodeClient.prototype.getDeviceCode = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var queryString, headers;
                return __generator$1(this, function (_a) {
                    queryString = this.createQueryString(request);
                    headers = this.createDefaultLibraryHeaders();
                    return [2 /*return*/, this.executePostRequestToDeviceCodeEndpoint(this.authority.deviceCodeEndpoint, queryString, headers)];
                });
            });
        };
        /**
         * Executes POST request to device code endpoint
         * @param deviceCodeEndpoint
         * @param queryString
         * @param headers
         */
        DeviceCodeClient.prototype.executePostRequestToDeviceCodeEndpoint = function (deviceCodeEndpoint, queryString, headers) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _a, userCode, deviceCode, verificationUri, expiresIn, interval, message;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.networkClient.sendPostRequestAsync(deviceCodeEndpoint, {
                            body: queryString,
                            headers: headers
                        })];
                        case 1:
                            _a = (_b.sent()).body, userCode = _a.user_code, deviceCode = _a.device_code, verificationUri = _a.verification_uri, expiresIn = _a.expires_in, interval = _a.interval, message = _a.message;
                            return [2 /*return*/, {
                                userCode: userCode,
                                deviceCode: deviceCode,
                                verificationUri: verificationUri,
                                expiresIn: expiresIn,
                                interval: interval,
                                message: message
                            }];
                    }
                });
            });
        };
        /**
         * Create device code endpoint query parameters and returns string
         */
        DeviceCodeClient.prototype.createQueryString = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            var scopeSet = new ScopeSet(request.scopes || []);
            parameterBuilder.addScopes(scopeSet);
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            return parameterBuilder.createQueryString();
        };
        /**
         * Creates token request with device code response and polls token endpoint at interval set by the device code
         * response
         * @param request
         * @param deviceCodeResponse
         */
        DeviceCodeClient.prototype.acquireTokenWithDeviceCode = function (request, deviceCodeResponse) {
            return __awaiter$1(this, void 0, void 0, function () {
                var requestBody, headers, deviceCodeExpirationTime, pollingIntervalMilli;
                var _this = this;
                return __generator$1(this, function (_a) {
                    requestBody = this.createTokenRequestBody(request, deviceCodeResponse);
                    headers = this.createDefaultTokenRequestHeaders();
                    deviceCodeExpirationTime = TimeUtils.nowSeconds() + deviceCodeResponse.expiresIn;
                    pollingIntervalMilli = deviceCodeResponse.interval * 1000;
                    // Poll token endpoint while (device code is not expired AND operation has not been cancelled by
                    // setting CancellationToken.cancel = true). POST request is sent at interval set by pollingIntervalMilli
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                        var intervalId = setInterval(function () {
                            return __awaiter$1(_this, void 0, void 0, function () {
                                var response, error_1;
                                return __generator$1(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 5, , 6]);
                                            if (!request.cancel) return [3 /*break*/, 1];
                                            this.logger.error("Token request cancelled by setting DeviceCodeRequest.cancel = true");
                                            clearInterval(intervalId);
                                            reject(ClientAuthError.createDeviceCodeCancelledError());
                                            return [3 /*break*/, 4];
                                        case 1:
                                            if (!(TimeUtils.nowSeconds() > deviceCodeExpirationTime)) return [3 /*break*/, 2];
                                            this.logger.error("Device code expired. Expiration time of device code was " + deviceCodeExpirationTime);
                                            clearInterval(intervalId);
                                            reject(ClientAuthError.createDeviceCodeExpiredError());
                                            return [3 /*break*/, 4];
                                        case 2: return [4 /*yield*/, this.executePostToTokenEndpoint(this.authority.tokenEndpoint, requestBody, headers)];
                                        case 3:
                                            response = _a.sent();
                                            if (response.body && response.body.error == Constants.AUTHORIZATION_PENDING) {
                                                // user authorization is pending. Sleep for polling interval and try again
                                                this.logger.info(response.body.error_description);
                                            }
                                            else {
                                                clearInterval(intervalId);
                                                resolve(response.body);
                                            }
                                            _a.label = 4;
                                        case 4: return [3 /*break*/, 6];
                                        case 5:
                                            error_1 = _a.sent();
                                            clearInterval(intervalId);
                                            reject(error_1);
                                            return [3 /*break*/, 6];
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            });
                        }, pollingIntervalMilli);
                    })];
                });
            });
        };
        /**
         * Creates query parameters and converts to string.
         * @param request
         * @param deviceCodeResponse
         */
        DeviceCodeClient.prototype.createTokenRequestBody = function (request, deviceCodeResponse) {
            var requestParameters = new RequestParameterBuilder();
            var scopeSet = new ScopeSet(request.scopes || []);
            requestParameters.addScopes(scopeSet);
            requestParameters.addClientId(this.config.authOptions.clientId);
            requestParameters.addGrantType(GrantType.DEVICE_CODE_GRANT);
            requestParameters.addDeviceCode(deviceCodeResponse.deviceCode);
            var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
            requestParameters.addCorrelationId(correlationId);
            return requestParameters.createQueryString();
        };
        return DeviceCodeClient;
    }(BaseClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * OAuth2.0 refresh token client
     */
    var RefreshTokenClient = /** @class */ (function (_super) {
        __extends$1(RefreshTokenClient, _super);
        function RefreshTokenClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        RefreshTokenClient.prototype.acquireToken = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var response, responseHandler, tokenResponse;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                        case 1:
                            response = _a.sent();
                            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger);
                            responseHandler.validateTokenResponse(response.body);
                            tokenResponse = responseHandler.handleServerTokenResponse(response.body, this.authority);
                            return [2 /*return*/, tokenResponse];
                    }
                });
            });
        };
        RefreshTokenClient.prototype.executeTokenRequest = function (request, authority) {
            return __awaiter$1(this, void 0, void 0, function () {
                var requestBody, headers;
                return __generator$1(this, function (_a) {
                    requestBody = this.createTokenRequestBody(request);
                    headers = this.createDefaultTokenRequestHeaders();
                    return [2 /*return*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers)];
                });
            });
        };
        RefreshTokenClient.prototype.createTokenRequestBody = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            var scopeSet = new ScopeSet(request.scopes || []);
            parameterBuilder.addScopes(scopeSet);
            parameterBuilder.addGrantType(GrantType.REFRESH_TOKEN_GRANT);
            parameterBuilder.addClientInfo();
            var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
            parameterBuilder.addCorrelationId(correlationId);
            parameterBuilder.addRefreshToken(request.refreshToken);
            return parameterBuilder.createQueryString();
        };
        return RefreshTokenClient;
    }(BaseClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var SilentFlowClient = /** @class */ (function (_super) {
        __extends$1(SilentFlowClient, _super);
        function SilentFlowClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        /**
         * Retrieves a token from cache if it is still valid, or uses the cached refresh token to renew
         * the given token and returns the renewed token
         * @param request
         */
        SilentFlowClient.prototype.acquireToken = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var requestScopes, accountKey, cachedAccount, homeAccountId, environment, cachedAccessToken, cachedRefreshToken, refreshTokenClient, refreshTokenRequest, cachedIdToken, idTokenObj;
                return __generator$1(this, function (_a) {
                    // Cannot renew token if no request object is given.
                    if (!request) {
                        throw ClientConfigurationError.createEmptyTokenRequestError();
                    }
                    // We currently do not support silent flow for account === null use cases; This will be revisited for confidential flow usecases
                    if (!request.account) {
                        throw ClientAuthError.createNoAccountInSilentRequestError();
                    }
                    requestScopes = new ScopeSet(request.scopes || []);
                    accountKey = AccountEntity.generateAccountCacheKey(request.account);
                    cachedAccount = this.cacheManager.getAccount(accountKey);
                    homeAccountId = cachedAccount.homeAccountId;
                    environment = cachedAccount.environment;
                    cachedAccessToken = this.readAccessTokenFromCache(homeAccountId, environment, requestScopes, cachedAccount.realm);
                    cachedRefreshToken = this.readRefreshTokenFromCache(homeAccountId, environment);
                    // Check if refresh is forced, or if tokens are expired. If neither are true, return a token response with the found token entry.
                    if (request.forceRefresh || !cachedAccessToken || this.isTokenExpired(cachedAccessToken.expiresOn)) {
                        // no refresh Token
                        if (!cachedRefreshToken) {
                            throw ClientAuthError.createNoTokensFoundError();
                        }
                        refreshTokenClient = new RefreshTokenClient(this.config);
                        refreshTokenRequest = __assign$1(__assign$1({}, request), { refreshToken: cachedRefreshToken.secret });
                        return [2 /*return*/, refreshTokenClient.acquireToken(refreshTokenRequest)];
                    }
                    cachedIdToken = this.readIdTokenFromCache(homeAccountId, environment, cachedAccount.realm);
                    idTokenObj = new IdToken(cachedIdToken.secret, this.config.cryptoInterface);
                    return [2 /*return*/, ResponseHandler.generateAuthenticationResult({
                        account: cachedAccount,
                        accessToken: cachedAccessToken,
                        idToken: cachedIdToken,
                        refreshToken: cachedRefreshToken
                    }, idTokenObj, true)];
                });
            });
        };
        /**
         * fetches idToken from cache if present
         * @param request
         */
        SilentFlowClient.prototype.readIdTokenFromCache = function (homeAccountId, environment, inputRealm) {
            var idTokenKey = CredentialEntity.generateCredentialCacheKey(homeAccountId, environment, CredentialType.ID_TOKEN, this.config.authOptions.clientId, inputRealm);
            return this.cacheManager.getCredential(idTokenKey);
        };
        /**
         * fetches accessToken from cache if present
         * @param request
         * @param scopes
         */
        SilentFlowClient.prototype.readAccessTokenFromCache = function (homeAccountId, environment, scopes, inputRealm) {
            var accessTokenFilter = {
                homeAccountId: homeAccountId,
                environment: environment,
                credentialType: CredentialType.ACCESS_TOKEN,
                clientId: this.config.authOptions.clientId,
                realm: inputRealm,
                target: scopes.printScopes()
            };
            var credentialCache = this.cacheManager.getCredentialsFilteredBy(accessTokenFilter);
            var accessTokens = Object.keys(credentialCache.accessTokens).map(function (key) { return credentialCache.accessTokens[key]; });
            if (accessTokens.length > 1);
            else if (accessTokens.length < 1) {
                return null;
            }
            return accessTokens[0];
        };
        /**
         * fetches refreshToken from cache if present
         * @param request
         */
        SilentFlowClient.prototype.readRefreshTokenFromCache = function (homeAccountId, environment) {
            var refreshTokenKey = CredentialEntity.generateCredentialCacheKey(homeAccountId, environment, CredentialType.REFRESH_TOKEN, this.config.authOptions.clientId);
            return this.cacheManager.getCredential(refreshTokenKey);
        };
        /**
         * check if a token is expired based on given UTC time in seconds.
         * @param expiresOn
         */
        SilentFlowClient.prototype.isTokenExpired = function (expiresOn) {
            // check for access token expiry
            var expirationSec = Number(expiresOn) || 0;
            var offsetCurrentTimeSec = TimeUtils.nowSeconds() + this.config.systemOptions.tokenRenewalOffsetSeconds;
            // If current time + offset is greater than token expiration time, then token is expired.
            return (offsetCurrentTimeSec > expirationSec);
        };
        return SilentFlowClient;
    }(BaseClient));

    /**
     * The authority class validates the authority URIs used by the user, and retrieves the OpenID Configuration Data from the
     * endpoint. It will store the pertinent config data in this object for use during token calls.
     */
    var Authority = /** @class */ (function () {
        function Authority(authority, networkInterface) {
            this.canonicalAuthority = authority;
            this._canonicalAuthority.validateAsUri();
            this.networkInterface = networkInterface;
        }
        Object.defineProperty(Authority.prototype, "authorityType", {
            // See above for AuthorityType
            get: function () {
                var pathSegments = this.canonicalAuthorityUrlComponents.PathSegments;
                if (pathSegments.length && pathSegments[0].toLowerCase() === Constants.ADFS) {
                    return AuthorityType.Adfs;
                }
                return AuthorityType.Default;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "canonicalAuthority", {
            /**
             * A URL that is the authority set by the developer
             */
            get: function () {
                return this._canonicalAuthority.urlString;
            },
            /**
             * Sets canonical authority.
             */
            set: function (url) {
                this._canonicalAuthority = new UrlString(url);
                this._canonicalAuthority.validateAsUri();
                this._canonicalAuthorityUrlComponents = null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "canonicalAuthorityUrlComponents", {
            /**
             * Get authority components.
             */
            get: function () {
                if (!this._canonicalAuthorityUrlComponents) {
                    this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
                }
                return this._canonicalAuthorityUrlComponents;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "tenant", {
            /**
             * Get tenant for authority.
             */
            get: function () {
                return this.canonicalAuthorityUrlComponents.PathSegments[0];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "authorizationEndpoint", {
            /**
             * OAuth /authorize endpoint for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    return this.replaceTenant(this.tenantDiscoveryResponse.authorization_endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "tokenEndpoint", {
            /**
             * OAuth /token endpoint for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    return this.replaceTenant(this.tenantDiscoveryResponse.token_endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "deviceCodeEndpoint", {
            get: function () {
                if (this.discoveryComplete()) {
                    return this.tenantDiscoveryResponse.token_endpoint.replace("/token", "/devicecode");
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "endSessionEndpoint", {
            /**
             * OAuth logout endpoint for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    return this.replaceTenant(this.tenantDiscoveryResponse.end_session_endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "selfSignedJwtAudience", {
            /**
             * OAuth issuer for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    return this.replaceTenant(this.tenantDiscoveryResponse.issuer);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Replaces tenant in url path with current tenant. Defaults to common.
         * @param urlString
         */
        Authority.prototype.replaceTenant = function (urlString) {
            return urlString.replace(/{tenant}|{tenantid}/g, this.tenant);
        };
        Object.defineProperty(Authority.prototype, "defaultOpenIdConfigurationEndpoint", {
            /**
             * The default open id configuration endpoint for any canonical authority.
             */
            get: function () {
                if (this.authorityType === AuthorityType.Adfs) {
                    return this.canonicalAuthority + ".well-known/openid-configuration";
                }
                return this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Boolean that returns whethr or not tenant discovery has been completed.
         */
        Authority.prototype.discoveryComplete = function () {
            return !!this.tenantDiscoveryResponse;
        };
        /**
         * Gets OAuth endpoints from the given OpenID configuration endpoint.
         * @param openIdConfigurationEndpoint
         */
        Authority.prototype.discoverEndpoints = function (openIdConfigurationEndpoint) {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    return [2 /*return*/, this.networkInterface.sendGetRequestAsync(openIdConfigurationEndpoint)];
                });
            });
        };
        Object.defineProperty(Authority.prototype, "aadInstanceDiscoveryEndpointUrl", {
            // Default AAD Instance Discovery Endpoint
            get: function () {
                return "" + Constants.AAD_INSTANCE_DISCOVERY_ENDPT + this.canonicalAuthority + "oauth2/v2.0/authorize";
            },
            enumerable: true,
            configurable: true
        });
        Authority.prototype.validateAndSetPreferredNetwork = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var host, preferredNetwork;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            host = this.canonicalAuthorityUrlComponents.HostNameAndPort;
                            if (!(TrustedAuthority.getTrustedHostList().length === 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, TrustedAuthority.setTrustedAuthoritiesFromNetwork(this._canonicalAuthority, this.networkInterface)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            if (!TrustedAuthority.IsInTrustedHostList(host)) {
                                throw ClientConfigurationError.createUntrustedAuthorityError();
                            }
                            preferredNetwork = TrustedAuthority.getCloudDiscoveryMetadata(host).preferred_network;
                            if (host !== preferredNetwork) {
                                this.canonicalAuthority = this.canonicalAuthority.replace(host, preferredNetwork);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Perform endpoint discovery to discover the /authorize, /token and logout endpoints.
         */
        Authority.prototype.resolveEndpointsAsync = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var openIdConfigEndpoint, response;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.validateAndSetPreferredNetwork()];
                        case 1:
                            _a.sent();
                            openIdConfigEndpoint = this.defaultOpenIdConfigurationEndpoint;
                            return [4 /*yield*/, this.discoverEndpoints(openIdConfigEndpoint)];
                        case 2:
                            response = _a.sent();
                            this.tenantDiscoveryResponse = response.body;
                            return [2 /*return*/];
                    }
                });
            });
        };
        return Authority;
    }());

    var AuthorityFactory = /** @class */ (function () {
        function AuthorityFactory() {
        }
        /**
         * Create an authority object of the correct type based on the url
         * Performs basic authority validation - checks to see if the authority is of a valid type (i.e. aad, b2c, adfs)
         *
         * Also performs endpoint discovery.
         *
         * @param authorityUri
         * @param networkClient
         */
        AuthorityFactory.createDiscoveredInstance = function (authorityUri, networkClient) {
            return __awaiter$1(this, void 0, void 0, function () {
                var acquireTokenAuthority, e_1;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            acquireTokenAuthority = AuthorityFactory.createInstance(authorityUri, networkClient);
                            if (acquireTokenAuthority.discoveryComplete()) {
                                return [2 /*return*/, acquireTokenAuthority];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, acquireTokenAuthority.resolveEndpointsAsync()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, acquireTokenAuthority];
                        case 3:
                            e_1 = _a.sent();
                            throw ClientAuthError.createEndpointDiscoveryIncompleteError(e_1);
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Create an authority object of the correct type based on the url
         * Performs basic authority validation - checks to see if the authority is of a valid type (i.e. aad, b2c, adfs)
         *
         * Does not perform endpoint discovery.
         *
         * @param authorityUrl
         * @param networkInterface
         */
        AuthorityFactory.createInstance = function (authorityUrl, networkInterface) {
            // Throw error if authority url is empty
            if (StringUtils.isEmpty(authorityUrl)) {
                throw ClientConfigurationError.createUrlEmptyError();
            }
            return new Authority(authorityUrl, networkInterface);
        };
        return AuthorityFactory;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Result returned from the authority's token endpoint.
     * - uniqueId               - `oid` or `sub` claim from ID token
     * - tenantId               - `tid` claim from ID token
     * - scopes                 - Scopes that are validated for the respective token
     * - account                - An account object representation of the currently signed-in user
     * - idToken                - Id token received as part of the response
     * - idTokenClaims          - MSAL-relevant ID token claims
     * - accessToken            - Access token received as part of the response
     * - fromCache              - Boolean denoting whether token came from cache
     * - expiresOn              - Javascript Date object representing relative expiration of access token
     * - extExpiresOn           - Javascript Date object representing extended relative expiration of access token in case of server outage
     * - state                  - Value passed in by user in request
     * - familyId               - Family ID identifier, usually only used for refresh tokens
     */
    var AuthenticationResult = /** @class */ (function () {
        function AuthenticationResult() {
        }
        return AuthenticationResult;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Constants
     */
    var BrowserConstants = {
        // Local storage constant string
        CACHE_LOCATION_LOCAL: "localStorage",
        // Session storage constant string
        CACHE_LOCATION_SESSION: "sessionStorage",
        // Interaction status key (only used for browsers)
        INTERACTION_STATUS_KEY: "interaction.status",
        // Interaction in progress cache value
        INTERACTION_IN_PROGRESS_VALUE: "interaction_in_progress",
        // Invalid grant error code
        INVALID_GRANT_ERROR: "invalid_grant",
        // Default popup window width
        POPUP_WIDTH: 483,
        // Default popup window height
        POPUP_HEIGHT: 600,
        // Default popup monitor poll interval in milliseconds
        POLL_INTERVAL_MS: 50,
        // msal-browser SKU
        MSAL_SKU: "msal.js.browser",
    };
    /**
     * HTTP Request types supported by MSAL.
     */
    var HTTP_REQUEST_TYPE;
    (function (HTTP_REQUEST_TYPE) {
        HTTP_REQUEST_TYPE["GET"] = "GET";
        HTTP_REQUEST_TYPE["POST"] = "POST";
    })(HTTP_REQUEST_TYPE || (HTTP_REQUEST_TYPE = {}));
    /**
     * Temporary cache keys for MSAL, deleted after any request.
     */
    var TemporaryCacheKeys;
    (function (TemporaryCacheKeys) {
        TemporaryCacheKeys["AUTHORITY"] = "authority";
        TemporaryCacheKeys["ACQUIRE_TOKEN_ACCOUNT"] = "acquireToken.account";
        TemporaryCacheKeys["SESSION_STATE"] = "session.state";
        TemporaryCacheKeys["REQUEST_STATE"] = "request.state";
        TemporaryCacheKeys["NONCE_IDTOKEN"] = "nonce.id_token";
        TemporaryCacheKeys["ORIGIN_URI"] = "request.origin";
        TemporaryCacheKeys["RENEW_STATUS"] = "token.renew.status";
        TemporaryCacheKeys["URL_HASH"] = "urlHash";
        TemporaryCacheKeys["REQUEST_PARAMS"] = "request.params";
        TemporaryCacheKeys["SCOPES"] = "scopes";
    })(TemporaryCacheKeys || (TemporaryCacheKeys = {}));

    /**
     * This class implements the Fetch API for GET and POST requests. See more here: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
     */
    var FetchClient = /** @class */ (function () {
        function FetchClient() {
        }
        /**
         * Fetch Client for REST endpoints - Get request
         * @param url
         * @param headers
         * @param body
         */
        FetchClient.prototype.sendGetRequestAsync = function (url, options) {
            return __awaiter(this, void 0, void 0, function () {
                var response, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, fetch(url, {
                            method: HTTP_REQUEST_TYPE.GET,
                            headers: this.getFetchHeaders(options)
                        })];
                        case 1:
                            response = _b.sent();
                            _a = {
                                headers: this.getHeaderMap(response.headers)
                            };
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, (_a.body = (_b.sent()),
                            _a.status = response.status,
                            _a)];
                    }
                });
            });
        };
        /**
         * Fetch Client for REST endpoints - Post request
         * @param url
         * @param headers
         * @param body
         */
        FetchClient.prototype.sendPostRequestAsync = function (url, options) {
            return __awaiter(this, void 0, void 0, function () {
                var reqBody, response, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            reqBody = (options && options.body) || "";
                            return [4 /*yield*/, fetch(url, {
                                method: HTTP_REQUEST_TYPE.POST,
                                headers: this.getFetchHeaders(options),
                                body: reqBody
                            })];
                        case 1:
                            response = _b.sent();
                            _a = {
                                headers: this.getHeaderMap(response.headers)
                            };
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, (_a.body = (_b.sent()),
                            _a.status = response.status,
                            _a)];
                    }
                });
            });
        };
        /**
         * Get Fetch API Headers object from string map
         * @param inputHeaders
         */
        FetchClient.prototype.getFetchHeaders = function (options) {
            var headers = new Headers();
            if (!(options && options.headers)) {
                return headers;
            }
            options.headers.forEach(function (value, key) {
                headers.append(key, value);
            });
            return headers;
        };
        FetchClient.prototype.getHeaderMap = function (headers) {
            var headerMap = new Map();
            headers.forEach(function (value, key) {
                headerMap.set(key, value);
            });
            return headerMap;
        };
        return FetchClient;
    }());

    /**
     * BrowserAuthErrorMessage class containing string constants used by error codes and messages.
     */
    var BrowserAuthErrorMessage = {
        noWindowObjectError: {
            code: "no_window_object",
            desc: "No window object detected."
        },
        pkceNotGenerated: {
            code: "pkce_not_created",
            desc: "The PKCE code challenge and verifier could not be generated."
        },
        cryptoDoesNotExist: {
            code: "crypto_nonexistent",
            desc: "The crypto object or function is not available."
        },
        httpMethodNotImplementedError: {
            code: "http_method_not_implemented",
            desc: "The HTTP method given has not been implemented in this library."
        },
        emptyNavigateUriError: {
            code: "empty_navigate_uri",
            desc: "Navigation URI is empty. Please check stack trace for more info."
        },
        hashEmptyError: {
            code: "hash_empty_error",
            desc: "Hash value cannot be processed because it is empty."
        },
        interactionInProgress: {
            code: "interaction_in_progress",
            desc: "Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API."
        },
        popUpWindowError: {
            code: "popup_window_error",
            desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
        },
        emptyWindowError: {
            code: "empty_window_error",
            desc: "window.open returned null or undefined window object."
        },
        userCancelledError: {
            code: "user_cancelled",
            desc: "User cancelled the flow."
        },
        monitorWindowTimeoutError: {
            code: "monitor_window_timeout",
            desc: "Token acquisition in popup failed due to timeout."
        },
        redirectInIframeError: {
            code: "redirect_in_iframe",
            desc: "Code flow is not supported inside an iframe. Please ensure you are using MSAL.js in a top frame of the window if using the redirect APIs, or use the popup APIs."
        },
        blockTokenRequestsInHiddenIframeError: {
            code: "block_iframe_reload",
            desc: "Request was blocked inside an iframe because MSAL detected an authentication response. Please ensure monitorWindowForHash was called."
        },
        iframeClosedPrematurelyError: {
            code: "iframe_closed_prematurely",
            desc: "The iframe being monitored was closed prematurely."
        },
        silentSSOInsufficientInfoError: {
            code: "silent_sso_error",
            desc: "Silent SSO could not be completed - insufficient information was provided. Please provide either a login_hint, sid or account object."
        },
        silentPromptValueError: {
            code: "silent_prompt_value_error",
            desc: "The value given for the prompt value is not valid for silent requests - must be set to 'none'."
        },
        tokenRequestCacheError: {
            code: "token_request_cache_error",
            desc: "The token request could not be fetched from the cache correctly."
        },
        invalidCacheType: {
            code: "invalid_cache_type",
            desc: "Invalid cache type"
        }
    };
    /**
     * Browser library error class thrown by the MSAL.js library for SPAs
     */
    var BrowserAuthError = /** @class */ (function (_super) {
        __extends(BrowserAuthError, _super);
        function BrowserAuthError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            Object.setPrototypeOf(_this, BrowserAuthError.prototype);
            _this.name = "BrowserAuthError";
            return _this;
        }
        /**
         * Creates error thrown when no window object can be found.
         */
        BrowserAuthError.createNoWindowObjectError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.noWindowObjectError.code, BrowserAuthErrorMessage.noWindowObjectError.desc);
        };
        /**
         * Creates an error thrown when PKCE is not implemented.
         * @param errDetail
         */
        BrowserAuthError.createPkceNotGeneratedError = function (errDetail) {
            return new BrowserAuthError(BrowserAuthErrorMessage.pkceNotGenerated.code, BrowserAuthErrorMessage.pkceNotGenerated.desc + " Detail:" + errDetail);
        };
        /**
         * Creates an error thrown when the crypto object is unavailable.
         * @param errDetail
         */
        BrowserAuthError.createCryptoNotAvailableError = function (errDetail) {
            return new BrowserAuthError(BrowserAuthErrorMessage.cryptoDoesNotExist.code, BrowserAuthErrorMessage.cryptoDoesNotExist.desc + " Detail:" + errDetail);
        };
        /**
         * Creates an error thrown when an HTTP method hasn't been implemented by the browser class.
         * @param method
         */
        BrowserAuthError.createHttpMethodNotImplementedError = function (method) {
            return new BrowserAuthError(BrowserAuthErrorMessage.httpMethodNotImplementedError.code, BrowserAuthErrorMessage.httpMethodNotImplementedError.desc + " Given Method: " + method);
        };
        /**
         * Creates an error thrown when the navigation URI is empty.
         */
        BrowserAuthError.createEmptyNavigationUriError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.emptyNavigateUriError.code, BrowserAuthErrorMessage.emptyNavigateUriError.desc);
        };
        /**
         * Creates an error thrown when the hash string value is unexpectedly empty.
         * @param hashValue
         */
        BrowserAuthError.createEmptyHashError = function (hashValue) {
            return new BrowserAuthError(BrowserAuthErrorMessage.hashEmptyError.code, BrowserAuthErrorMessage.hashEmptyError.desc + " Given Url: " + hashValue);
        };
        /**
         * Creates an error thrown when a browser interaction (redirect or popup) is in progress.
         */
        BrowserAuthError.createInteractionInProgressError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.interactionInProgress.code, BrowserAuthErrorMessage.interactionInProgress.desc);
        };
        /**
         * Creates an error thrown when the popup window could not be opened.
         * @param errDetail
         */
        BrowserAuthError.createPopupWindowError = function (errDetail) {
            var errorMessage = BrowserAuthErrorMessage.popUpWindowError.desc;
            errorMessage = !StringUtils.isEmpty(errDetail) ? errorMessage + " Details: " + errDetail : errorMessage;
            return new BrowserAuthError(BrowserAuthErrorMessage.popUpWindowError.code, errorMessage);
        };
        /**
         * Creates an error thrown when window.open returns an empty window object.
         * @param errDetail
         */
        BrowserAuthError.createEmptyWindowCreatedError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.emptyWindowError.code, BrowserAuthErrorMessage.emptyWindowError.desc);
        };
        /**
         * Creates an error thrown when the user closes a popup.
         */
        BrowserAuthError.createUserCancelledError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.userCancelledError.code, BrowserAuthErrorMessage.userCancelledError.desc);
        };
        /**
         * Creates an error thrown when monitorWindowFromHash times out for a given popup.
         * @param urlNavigate
         */
        BrowserAuthError.createMonitorWindowTimeoutError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.monitorWindowTimeoutError.code, BrowserAuthErrorMessage.monitorWindowTimeoutError.desc);
        };
        /**
         * Creates an error thrown when navigateWindow is called inside an iframe.
         * @param windowParentCheck
         */
        BrowserAuthError.createRedirectInIframeError = function (windowParentCheck) {
            return new BrowserAuthError(BrowserAuthErrorMessage.redirectInIframeError.code, BrowserAuthErrorMessage.redirectInIframeError.desc + " (window.parent !== window) => " + windowParentCheck);
        };
        /**
         * Creates an error thrown when an auth reload is done inside an iframe.
         */
        BrowserAuthError.createBlockReloadInHiddenIframeError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.blockTokenRequestsInHiddenIframeError.code, BrowserAuthErrorMessage.blockTokenRequestsInHiddenIframeError.desc);
        };
        /**
         * Creates an error thrown when an iframe is found to be closed before the timeout is reached.
         */
        BrowserAuthError.createIframeClosedPrematurelyError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.iframeClosedPrematurelyError.code, BrowserAuthErrorMessage.iframeClosedPrematurelyError.desc);
        };
        /**
         * Creates an error thrown when the login_hint, sid or account object is not provided in the ssoSilent API.
         */
        BrowserAuthError.createSilentSSOInsufficientInfoError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.silentSSOInsufficientInfoError.code, BrowserAuthErrorMessage.silentSSOInsufficientInfoError.desc);
        };
        /**
         * Creates an error thrown when a given prompt value is invalid for silent requests.
         */
        BrowserAuthError.createSilentPromptValueError = function (givenPrompt) {
            return new BrowserAuthError(BrowserAuthErrorMessage.silentPromptValueError.code, BrowserAuthErrorMessage.silentPromptValueError.desc + " Given value: " + givenPrompt);
        };
        /**
         * Creates an error thrown when the token request could not be retrieved from the cache
         * @param errDetail
         */
        BrowserAuthError.createTokenRequestCacheError = function (errDetail) {
            return new BrowserAuthError(BrowserAuthErrorMessage.tokenRequestCacheError.code, BrowserAuthErrorMessage.tokenRequestCacheError.desc + " Error Detail: " + errDetail);
        };
        /**
        * Creates an error thrown if cache type is invalid.
        */
        BrowserAuthError.createInvalidCacheTypeError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.invalidCacheType.code, "" + BrowserAuthErrorMessage.invalidCacheType.desc);
        };
        return BrowserAuthError;
    }(AuthError));

    /**
     * This client implements the XMLHttpRequest class to send GET and POST requests.
     */
    var XhrClient = /** @class */ (function () {
        function XhrClient() {
        }
        /**
         * XhrClient for REST endpoints - Get request
         * @param url
         * @param headers
         * @param body
         */
        XhrClient.prototype.sendGetRequestAsync = function (url, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.sendRequestAsync(url, HTTP_REQUEST_TYPE.GET, options)];
                });
            });
        };
        /**
         * XhrClient for REST endpoints - Post request
         * @param url
         * @param headers
         * @param body
         */
        XhrClient.prototype.sendPostRequestAsync = function (url, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.sendRequestAsync(url, HTTP_REQUEST_TYPE.POST, options)];
                });
            });
        };
        /**
         * Helper for XhrClient requests.
         * @param url
         * @param method
         * @param options
         */
        XhrClient.prototype.sendRequestAsync = function (url, method, options) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open(method, url, /* async: */ true);
                _this.setXhrHeaders(xhr, options);
                xhr.onload = function () {
                    if (xhr.status < 200 || xhr.status >= 300) {
                        reject(xhr.responseText);
                    }
                    try {
                        var jsonResponse = JSON.parse(xhr.responseText);
                        var networkResponse = {
                            headers: _this.getHeaderMap(xhr),
                            body: jsonResponse,
                            status: xhr.status
                        };
                        resolve(networkResponse);
                    }
                    catch (e) {
                        reject(xhr.responseText);
                    }
                };
                xhr.onerror = function () {
                    reject(xhr.status);
                };
                if (method === "POST" && options.body) {
                    xhr.send(options.body);
                }
                else if (method === "GET") {
                    xhr.send();
                }
                else {
                    throw BrowserAuthError.createHttpMethodNotImplementedError(method);
                }
            });
        };
        /**
         * Helper to set XHR headers for request.
         * @param xhr
         * @param options
         */
        XhrClient.prototype.setXhrHeaders = function (xhr, options) {
            if (options && options.headers) {
                options.headers.forEach(function (value, key) {
                    xhr.setRequestHeader(key, value);
                });
            }
        };
        /**
         * Gets a string map of the headers received in the response.
         *
         * Algorithm comes from https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
         * @param xhr
         */
        XhrClient.prototype.getHeaderMap = function (xhr) {
            var headerString = xhr.getAllResponseHeaders();
            var headerArr = headerString.trim().split(/[\r\n]+/);
            var headerMap = new Map();
            headerArr.forEach(function (value) {
                var parts = value.split(": ");
                var headerName = parts.shift();
                var headerVal = parts.join(": ");
                headerMap.set(headerName, headerVal);
            });
            return headerMap;
        };
        return XhrClient;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Utility class for browser specific functions
     */
    var BrowserUtils = /** @class */ (function () {
        function BrowserUtils() {
        }
        // #region Window Navigation and URL management
        /**
         * Used to redirect the browser to the STS authorization endpoint
         * @param {string} urlNavigate - URL of the authorization endpoint
         * @param {boolean} noHistory - boolean flag, uses .replace() instead of .assign() if true
         */
        BrowserUtils.navigateWindow = function (urlNavigate, noHistory) {
            if (noHistory) {
                window.location.replace(urlNavigate);
            }
            else {
                window.location.assign(urlNavigate);
            }
        };
        /**
         * Clears hash from window url.
         */
        BrowserUtils.clearHash = function () {
            window.location.hash = "";
        };
        /**
         * Replaces current hash with hash from provided url
         */
        BrowserUtils.replaceHash = function (url) {
            var urlParts = url.split("#");
            urlParts.shift(); // Remove part before the hash
            window.location.hash = urlParts.length > 0 ? urlParts.join("#") : "";
        };
        /**
         * Returns boolean of whether the current window is in an iframe or not.
         */
        BrowserUtils.isInIframe = function () {
            return window.parent !== window;
        };
        // #endregion
        /**
         * Returns current window URL as redirect uri
         */
        BrowserUtils.getCurrentUri = function () {
            return window.location.href.split("?")[0].split("#")[0];
        };
        /**
         * Returns best compatible network client object.
         */
        BrowserUtils.getBrowserNetworkClient = function () {
            if (window.fetch) {
                return new FetchClient();
            }
            else {
                return new XhrClient();
            }
        };
        /**
         * Throws error if we have completed an auth and are
         * attempting another auth request inside an iframe.
         */
        BrowserUtils.blockReloadInHiddenIframes = function () {
            var isResponseHash = UrlString.hashContainsKnownProperties(window.location.hash);
            // return an error if called from the hidden iframe created by the msal js silent calls
            if (isResponseHash && BrowserUtils.isInIframe()) {
                throw BrowserAuthError.createBlockReloadInHiddenIframeError();
            }
        };
        /**
         * Returns boolean of whether current browser is an Internet Explorer or Edge browser.
         */
        BrowserUtils.detectIEOrEdge = function () {
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");
            var msie11 = ua.indexOf("Trident/");
            var msedge = ua.indexOf("Edge/");
            var isIE = msie > 0 || msie11 > 0;
            var isEdge = msedge > 0;
            return isIE || isEdge;
        };
        return BrowserUtils;
    }());

    // Default timeout for popup windows and iframes in milliseconds
    var DEFAULT_POPUP_TIMEOUT_MS = 60000;
    var DEFAULT_IFRAME_TIMEOUT_MS = 6000;
    // Default auth options for browser
    var DEFAULT_AUTH_OPTIONS$1 = {
        clientId: "",
        authority: "" + Constants.DEFAULT_AUTHORITY,
        knownAuthorities: [],
        cloudDiscoveryMetadata: "",
        redirectUri: "",
        postLogoutRedirectUri: "",
        navigateToLoginRequestUrl: true
    };
    // Default cache options for browser
    var DEFAULT_CACHE_OPTIONS = {
        cacheLocation: BrowserConstants.CACHE_LOCATION_SESSION,
        storeAuthStateInCookie: false
    };
    // Default logger options for browser
    var DEFAULT_LOGGER_OPTIONS = {
        loggerCallback: function () { },
        piiLoggingEnabled: false
    };
    // Default system options for browser
    var DEFAULT_BROWSER_SYSTEM_OPTIONS = __assign(__assign({}, DEFAULT_SYSTEM_OPTIONS), { loggerOptions: DEFAULT_LOGGER_OPTIONS, networkClient: BrowserUtils.getBrowserNetworkClient(), windowHashTimeout: DEFAULT_POPUP_TIMEOUT_MS, iframeHashTimeout: DEFAULT_IFRAME_TIMEOUT_MS, loadFrameTimeout: BrowserUtils.detectIEOrEdge() ? 500 : 0 });
    /**
     * MSAL function that sets the default options when not explicitly configured from app developer
     *
     * @param auth
     * @param cache
     * @param system
     *
     * @returns Configuration object
     */
    function buildConfiguration(_a) {
        var userInputAuth = _a.auth, userInputCache = _a.cache, userInputSystem = _a.system;
        var overlayedConfig = {
            auth: __assign(__assign({}, DEFAULT_AUTH_OPTIONS$1), userInputAuth),
            cache: __assign(__assign({}, DEFAULT_CACHE_OPTIONS), userInputCache),
            system: __assign(__assign({}, DEFAULT_BROWSER_SYSTEM_OPTIONS), userInputSystem)
        };
        return overlayedConfig;
    }

    /**
     * BrowserAuthErrorMessage class containing string constants used by error codes and messages.
     */
    var BrowserConfigurationAuthErrorMessage = {
        redirectUriNotSet: {
            code: "redirect_uri_empty",
            desc: "A redirect URI is required for all calls, and none has been set."
        },
        postLogoutUriNotSet: {
            code: "post_logout_uri_empty",
            desc: "A post logout redirect has not been set."
        },
        storageNotSupportedError: {
            code: "storage_not_supported",
            desc: "Given storage configuration option was not supported."
        },
        noRedirectCallbacksSet: {
            code: "no_redirect_callbacks",
            desc: "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. " +
                "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
        },
        invalidCallbackObject: {
            code: "invalid_callback_object",
            desc: "The object passed for the callback was invalid. " +
                "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
        },
    };
    /**
     * Browser library error class thrown by the MSAL.js library for SPAs
     */
    var BrowserConfigurationAuthError = /** @class */ (function (_super) {
        __extends(BrowserConfigurationAuthError, _super);
        function BrowserConfigurationAuthError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            _this.name = "BrowserConfigurationAuthError";
            Object.setPrototypeOf(_this, BrowserConfigurationAuthError.prototype);
            return _this;
        }
        /**
         * Creates an error thrown when the redirect uri is empty (not set by caller)
         */
        BrowserConfigurationAuthError.createRedirectUriEmptyError = function () {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.redirectUriNotSet.code, BrowserConfigurationAuthErrorMessage.redirectUriNotSet.desc);
        };
        /**
         * Creates an error thrown when the post-logout redirect uri is empty (not set by caller)
         */
        BrowserConfigurationAuthError.createPostLogoutRedirectUriEmptyError = function () {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.postLogoutUriNotSet.code, BrowserConfigurationAuthErrorMessage.postLogoutUriNotSet.desc);
        };
        /**
         * Creates error thrown when given storage location is not supported.
         * @param givenStorageLocation
         */
        BrowserConfigurationAuthError.createStorageNotSupportedError = function (givenStorageLocation) {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.storageNotSupportedError.code, BrowserConfigurationAuthErrorMessage.storageNotSupportedError.desc + " Given Location: " + givenStorageLocation);
        };
        /**
         * Creates error thrown when callback object is invalid.
         * @param callbackObject
         */
        BrowserConfigurationAuthError.createInvalidCallbackObjectError = function (callbackObject) {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.invalidCallbackObject.code, BrowserConfigurationAuthErrorMessage.invalidCallbackObject.desc + " Given value for callback function: " + callbackObject);
        };
        /**
         * Creates error thrown when redirect callbacks are not set before calling loginRedirect() or acquireTokenRedirect().
         */
        BrowserConfigurationAuthError.createRedirectCallbacksNotSetError = function () {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.noRedirectCallbacksSet.code, BrowserConfigurationAuthErrorMessage.noRedirectCallbacksSet.desc);
        };
        return BrowserConfigurationAuthError;
    }(AuthError));

    // Cookie life calculation (hours * minutes * seconds * ms)
    var COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1000;
    /**
     * This class implements the cache storage interface for MSAL through browser local or session storage.
     * Cookies are only used if storeAuthStateInCookie is true, and are only used for
     * parameters such as state and nonce, generally.
     */
    var BrowserStorage = /** @class */ (function (_super) {
        __extends(BrowserStorage, _super);
        function BrowserStorage(clientId, cacheConfig) {
            var _this = _super.call(this) || this;
            // Validate cache location
            _this.validateWindowStorage(cacheConfig.cacheLocation);
            _this.cacheConfig = cacheConfig;
            _this.windowStorage = window[_this.cacheConfig.cacheLocation];
            _this.clientId = clientId;
            // Migrate any cache entries from older versions of MSAL.
            _this.migrateCacheEntries();
            return _this;
        }
        /**
         * Validates the the given cache location string is an expected value:
         * - localStorage
         * - sessionStorage (default)
         * Also validates if given cacheLocation is supported on the browser.
         * @param cacheLocation
         */
        BrowserStorage.prototype.validateWindowStorage = function (cacheLocation) {
            if (typeof window === "undefined" || !window) {
                throw BrowserAuthError.createNoWindowObjectError();
            }
            if (cacheLocation !== BrowserConstants.CACHE_LOCATION_LOCAL && cacheLocation !== BrowserConstants.CACHE_LOCATION_SESSION) {
                throw BrowserConfigurationAuthError.createStorageNotSupportedError(cacheLocation);
            }
            var storageSupported = !!window[cacheLocation];
            if (!storageSupported) {
                throw BrowserConfigurationAuthError.createStorageNotSupportedError(cacheLocation);
            }
        };
        /**
         * Migrate all old cache entries to new schema. No rollback supported.
         * @param storeAuthStateInCookie
         */
        BrowserStorage.prototype.migrateCacheEntries = function () {
            var _this = this;
            var idTokenKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ID_TOKEN;
            var clientInfoKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.CLIENT_INFO;
            var errorKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ERROR;
            var errorDescKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ERROR_DESC;
            var idTokenValue = this.windowStorage.getItem(idTokenKey);
            var clientInfoValue = this.windowStorage.getItem(clientInfoKey);
            var errorValue = this.windowStorage.getItem(errorKey);
            var errorDescValue = this.windowStorage.getItem(errorDescKey);
            var values = [idTokenValue, clientInfoValue, errorValue, errorDescValue];
            var keysToMigrate = [PersistentCacheKeys.ID_TOKEN, PersistentCacheKeys.CLIENT_INFO, PersistentCacheKeys.ERROR, PersistentCacheKeys.ERROR_DESC];
            keysToMigrate.forEach(function (cacheKey, index) { return _this.migrateCacheEntry(cacheKey, values[index]); });
        };
        /**
         * Utility function to help with migration.
         * @param newKey
         * @param value
         * @param storeAuthStateInCookie
         */
        BrowserStorage.prototype.migrateCacheEntry = function (newKey, value) {
            if (value) {
                this.setItem(this.generateCacheKey(newKey), value, CacheSchemaType.TEMPORARY);
            }
        };
        /**
         * Parses key as JSON object, JSON.parse() will throw an error.
         * @param key
         */
        BrowserStorage.prototype.validateObjectKey = function (key) {
            JSON.parse(key);
        };
        /**
         * Sets the cache item with the key and value given.
         * Stores in cookie if storeAuthStateInCookie is set to true.
         * This can cause cookie overflow if used incorrectly.
         * @param key
         * @param value
         */
        BrowserStorage.prototype.setItem = function (key, value, type) {
            // save the cacheItem
            switch (type) {
                case CacheSchemaType.ACCOUNT:
                case CacheSchemaType.CREDENTIAL:
                case CacheSchemaType.APP_META_DATA:
                    this.windowStorage.setItem(key, JSON.stringify(value));
                    break;
                case CacheSchemaType.TEMPORARY: {
                    var stringVal = value;
                    this.windowStorage.setItem(key, stringVal);
                    if (this.cacheConfig.storeAuthStateInCookie) {
                        this.setItemCookie(key, stringVal);
                    }
                    break;
                }
                default: {
                    throw BrowserAuthError.createInvalidCacheTypeError();
                }
            }
        };
        /**
         * Gets cache item with given key.
         * Will retrieve frm cookies if storeAuthStateInCookie is set to true.
         * @param key
         */
        BrowserStorage.prototype.getItem = function (key, type) {
            var value = this.windowStorage.getItem(key);
            if (StringUtils.isEmpty(value)) {
                return null;
            }
            switch (type) {
                case CacheSchemaType.ACCOUNT: {
                    var account = new AccountEntity();
                    return CacheManager.toObject(account, JSON.parse(value));
                }
                case CacheSchemaType.CREDENTIAL: {
                    var credentialType = CredentialEntity.getCredentialType(key);
                    switch (credentialType) {
                        case CredentialType.ID_TOKEN: {
                            var idTokenEntity = new IdTokenEntity();
                            return CacheManager.toObject(idTokenEntity, JSON.parse(value));
                        }
                        case CredentialType.ACCESS_TOKEN: {
                            var accessTokenEntity = new AccessTokenEntity();
                            return CacheManager.toObject(accessTokenEntity, JSON.parse(value));
                        }
                        case CredentialType.REFRESH_TOKEN: {
                            var refreshTokenEntity = new RefreshTokenEntity();
                            return CacheManager.toObject(refreshTokenEntity, JSON.parse(value));
                        }
                    }
                }
                case CacheSchemaType.APP_META_DATA: {
                    return JSON.parse(value);
                }
                case CacheSchemaType.TEMPORARY: {
                    var itemCookie = this.getItemCookie(key);
                    if (this.cacheConfig.storeAuthStateInCookie) {
                        return itemCookie;
                    }
                    return value;
                }
                default: {
                    throw BrowserAuthError.createInvalidCacheTypeError();
                }
            }
        };
        /**
         * Removes the cache item with the given key.
         * Will also clear the cookie item if storeAuthStateInCookie is set to true.
         * @param key
         */
        BrowserStorage.prototype.removeItem = function (key) {
            this.windowStorage.removeItem(key);
            if (this.cacheConfig.storeAuthStateInCookie) {
                this.clearItemCookie(key);
            }
            return true;
        };
        /**
         * Checks whether key is in cache.
         * @param key
         */
        BrowserStorage.prototype.containsKey = function (key) {
            return this.windowStorage.hasOwnProperty(key);
        };
        /**
         * Gets all keys in window.
         */
        BrowserStorage.prototype.getKeys = function () {
            return Object.keys(this.windowStorage);
        };
        /**
         * Clears all cache entries created by MSAL (except tokens).
         */
        BrowserStorage.prototype.clear = function () {
            var key;
            for (key in this.windowStorage) {
                // Check if key contains msal prefix; For now, we are clearing all the cache items created by MSAL.js
                if (this.windowStorage.hasOwnProperty(key) && ((key.indexOf(Constants.CACHE_PREFIX) !== -1) || (key.indexOf(this.clientId) !== -1))) {
                    this.removeItem(key);
                }
            }
        };
        /**
         * Add value to cookies
         * @param cookieName
         * @param cookieValue
         * @param expires
         */
        BrowserStorage.prototype.setItemCookie = function (cookieName, cookieValue, expires) {
            var cookieStr = encodeURIComponent(cookieName) + "=" + encodeURIComponent(cookieValue) + ";path=/;";
            if (expires) {
                var expireTime = this.getCookieExpirationTime(expires);
                cookieStr += "expires=" + expireTime + ";";
            }
            document.cookie = cookieStr;
        };
        /**
         * Get one item by key from cookies
         * @param cookieName
         */
        BrowserStorage.prototype.getItemCookie = function (cookieName) {
            var name = encodeURIComponent(cookieName) + "=";
            var cookieList = document.cookie.split(";");
            for (var i = 0; i < cookieList.length; i++) {
                var cookie = cookieList[i];
                while (cookie.charAt(0) === " ") {
                    cookie = cookie.substring(1);
                }
                if (cookie.indexOf(name) === 0) {
                    return decodeURIComponent(cookie.substring(name.length, cookie.length));
                }
            }
            return "";
        };
        /**
         * Clear an item in the cookies by key
         * @param cookieName
         */
        BrowserStorage.prototype.clearItemCookie = function (cookieName) {
            this.setItemCookie(cookieName, "", -1);
        };
        /**
         * Clear all msal cookies
         */
        BrowserStorage.prototype.clearMsalCookie = function (state) {
            var nonceKey = state ? TemporaryCacheKeys.NONCE_IDTOKEN + "|" + state : TemporaryCacheKeys.NONCE_IDTOKEN;
            this.clearItemCookie(this.generateCacheKey(nonceKey));
            this.clearItemCookie(this.generateCacheKey(TemporaryCacheKeys.REQUEST_STATE));
            this.clearItemCookie(this.generateCacheKey(TemporaryCacheKeys.ORIGIN_URI));
        };
        /**
         * Get cookie expiration time
         * @param cookieLifeDays
         */
        BrowserStorage.prototype.getCookieExpirationTime = function (cookieLifeDays) {
            var today = new Date();
            var expr = new Date(today.getTime() + cookieLifeDays * COOKIE_LIFE_MULTIPLIER);
            return expr.toUTCString();
        };
        /**
         * Gets the cache object referenced by the browser
         */
        BrowserStorage.prototype.getCache = function () {
            return this.windowStorage;
        };
        /**
         * interface compat, we cannot overwrite browser cache; Functionality is supported by individual entities in browser
         */
        BrowserStorage.prototype.setCache = function () {
            // sets nothing
        };
        /**
         * Prepend msal.<client-id> to each key; Skip for any JSON object as Key (defined schemas do not need the key appended: AccessToken Keys or the upcoming schema)
         * @param key
         * @param addInstanceId
         */
        BrowserStorage.prototype.generateCacheKey = function (key) {
            try {
                // Defined schemas do not need the key migrated
                this.validateObjectKey(key);
                return key;
            }
            catch (e) {
                if (StringUtils.startsWith(key, Constants.CACHE_PREFIX) || StringUtils.startsWith(key, PersistentCacheKeys.ADAL_ID_TOKEN)) {
                    return key;
                }
                return Constants.CACHE_PREFIX + "." + this.clientId + "." + key;
            }
        };
        /**
         * Create authorityKey to cache authority
         * @param state
         */
        BrowserStorage.prototype.generateAuthorityKey = function (state) {
            return "" + TemporaryCacheKeys.AUTHORITY + Constants.RESOURCE_DELIM + state;
        };
        /**
         * Create Nonce key to cache nonce
         * @param state
         */
        BrowserStorage.prototype.generateNonceKey = function (state) {
            return "" + TemporaryCacheKeys.NONCE_IDTOKEN + Constants.RESOURCE_DELIM + state;
        };
        /**
         * Sets the cacheKey for and stores the authority information in cache
         * @param state
         * @param authority
         */
        BrowserStorage.prototype.setAuthorityCache = function (authority, state) {
            // Cache authorityKey
            var authorityKey = this.generateAuthorityKey(state);
            this.setItem(this.generateCacheKey(authorityKey), authority, CacheSchemaType.TEMPORARY);
        };
        /**
         * Gets the cached authority based on the cached state. Returns empty if no cached state found.
         */
        BrowserStorage.prototype.getCachedAuthority = function () {
            var state = this.getItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_STATE), CacheSchemaType.TEMPORARY);
            if (!state) {
                return null;
            }
            return this.getItem(this.generateCacheKey(this.generateAuthorityKey(state)), CacheSchemaType.TEMPORARY);
        };
        /**
         * Updates account, authority, and state in cache
         * @param serverAuthenticationRequest
         * @param account
         */
        BrowserStorage.prototype.updateCacheEntries = function (state, nonce, authorityInstance) {
            // Cache the request state
            this.setItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_STATE), state, CacheSchemaType.TEMPORARY);
            // Cache the nonce
            this.setItem(this.generateCacheKey(this.generateNonceKey(state)), nonce, CacheSchemaType.TEMPORARY);
            // Cache authorityKey
            this.setAuthorityCache(authorityInstance, state);
        };
        /**
         * Reset all temporary cache items
         * @param state
         */
        BrowserStorage.prototype.resetRequestCache = function (state) {
            var _this = this;
            // check state and remove associated cache items
            this.getKeys().forEach(function (key) {
                if (!StringUtils.isEmpty(state) && key.indexOf(state) !== -1) {
                    _this.removeItem(key);
                }
            });
            // delete generic interactive request parameters
            this.removeItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_STATE));
            this.removeItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS));
            this.removeItem(this.generateCacheKey(TemporaryCacheKeys.ORIGIN_URI));
            this.removeItem(this.generateCacheKey(TemporaryCacheKeys.URL_HASH));
        };
        BrowserStorage.prototype.cleanRequest = function () {
            // Interaction is completed - remove interaction status.
            this.removeItem(this.generateCacheKey(BrowserConstants.INTERACTION_STATUS_KEY));
            var cachedState = this.getItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_STATE), CacheSchemaType.TEMPORARY);
            this.resetRequestCache(cachedState || "");
        };
        BrowserStorage.prototype.cacheCodeRequest = function (authCodeRequest, browserCrypto) {
            this.setItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS), browserCrypto.base64Encode(JSON.stringify(authCodeRequest)), CacheSchemaType.TEMPORARY);
        };
        /**
         * Gets the token exchange parameters from the cache. Throws an error if nothing is found.
         */
        BrowserStorage.prototype.getCachedRequest = function (state, browserCrypto) {
            try {
                // Get token request from cache and parse as TokenExchangeParameters.
                var encodedTokenRequest = this.getItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS), CacheSchemaType.TEMPORARY);
                var parsedRequest = JSON.parse(browserCrypto.base64Decode(encodedTokenRequest));
                this.removeItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS));
                // Get cached authority and use if no authority is cached with request.
                if (StringUtils.isEmpty(parsedRequest.authority)) {
                    var authorityKey = this.generateAuthorityKey(state);
                    var cachedAuthority = this.getItem(this.generateCacheKey(authorityKey), CacheSchemaType.TEMPORARY);
                    parsedRequest.authority = cachedAuthority;
                }
                return parsedRequest;
            }
            catch (err) {
                throw BrowserAuthError.createTokenRequestCacheError(err);
            }
        };
        return BrowserStorage;
    }(CacheManager));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Utility class for math specific functions in browser.
     */
    var MathUtils = /** @class */ (function () {
        function MathUtils() {
        }
        /**
         * Decimal to Hex
         *
         * @param num
         */
        MathUtils.decimalToHex = function (num) {
            var hex = num.toString(16);
            while (hex.length < 2) {
                hex = "0" + hex;
            }
            return hex;
        };
        return MathUtils;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var GuidGenerator = /** @class */ (function () {
        function GuidGenerator(cryptoObj) {
            this.cryptoObj = cryptoObj;
        }
        /*
         * RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
         * pseudo-random numbers.
         * The algorithm is as follows:
         *     Set the two most significant bits (bits 6 and 7) of the
         *        clock_seq_hi_and_reserved to zero and one, respectively.
         *     Set the four most significant bits (bits 12 through 15) of the
         *        time_hi_and_version field to the 4-bit version number from
         *        Section 4.1.3. Version4
         *     Set all the other bits to randomly (or pseudo-randomly) chosen
         *     values.
         * UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
         * time-low               = 4hexOctet
         * time-mid               = 2hexOctet
         * time-high-and-version  = 2hexOctet
         * clock-seq-and-reserved = hexOctet:
         * clock-seq-low          = hexOctet
         * node                   = 6hexOctet
         * Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
         * y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
         * y values are 8, 9, A, B
         */
        GuidGenerator.prototype.generateGuid = function () {
            try {
                var buffer = new Uint8Array(16);
                this.cryptoObj.getRandomValues(buffer);
                // buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
                buffer[6] |= 0x40; // buffer[6] | 01000000 will set the 6 bit to 1.
                buffer[6] &= 0x4f; // buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
                // buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
                buffer[8] |= 0x80; // buffer[8] | 10000000 will set the 7 bit to 1.
                buffer[8] &= 0xbf; // buffer[8] & 10111111 will set the 6 bit to 0.
                return MathUtils.decimalToHex(buffer[0]) + MathUtils.decimalToHex(buffer[1])
                    + MathUtils.decimalToHex(buffer[2]) + MathUtils.decimalToHex(buffer[3])
                    + "-" + MathUtils.decimalToHex(buffer[4]) + MathUtils.decimalToHex(buffer[5])
                    + "-" + MathUtils.decimalToHex(buffer[6]) + MathUtils.decimalToHex(buffer[7])
                    + "-" + MathUtils.decimalToHex(buffer[8]) + MathUtils.decimalToHex(buffer[9])
                    + "-" + MathUtils.decimalToHex(buffer[10]) + MathUtils.decimalToHex(buffer[11])
                    + MathUtils.decimalToHex(buffer[12]) + MathUtils.decimalToHex(buffer[13])
                    + MathUtils.decimalToHex(buffer[14]) + MathUtils.decimalToHex(buffer[15]);
            }
            catch (err) {
                var guidHolder = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
                var hex = "0123456789abcdef";
                var r = 0;
                var guidResponse = "";
                for (var i = 0; i < 36; i++) {
                    if (guidHolder[i] !== "-" && guidHolder[i] !== "4") {
                        // each x and y needs to be random
                        r = Math.random() * 16 | 0;
                    }
                    if (guidHolder[i] === "x") {
                        guidResponse += hex[r];
                    }
                    else if (guidHolder[i] === "y") {
                        // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                        r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                        r |= 0x8; // set pos 3 to 1 as 1???
                        guidResponse += hex[r];
                    }
                    else {
                        guidResponse += guidHolder[i];
                    }
                }
                return guidResponse;
            }
        };
        /**
         * verifies if a string is  GUID
         * @param guid
         */
        GuidGenerator.isGuid = function (guid) {
            var regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
            return regexGuid.test(guid);
        };
        return GuidGenerator;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Utility functions for strings in a browser. See here for implementation details:
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_2_%E2%80%93_JavaScript's_UTF-16_%3E_UTF-8_%3E_base64
     */
    var BrowserStringUtils = /** @class */ (function () {
        function BrowserStringUtils() {
        }
        /**
         * Converts string to Uint8Array
         * @param sDOMStr
         */
        BrowserStringUtils.stringToUtf8Arr = function (sDOMStr) {
            var nChr;
            var nArrLen = 0;
            var nStrLen = sDOMStr.length;
            /* mapping... */
            for (var nMapIdx = 0; nMapIdx < nStrLen; nMapIdx++) {
                nChr = sDOMStr.charCodeAt(nMapIdx);
                nArrLen += nChr < 0x80 ? 1 : nChr < 0x800 ? 2 : nChr < 0x10000 ? 3 : nChr < 0x200000 ? 4 : nChr < 0x4000000 ? 5 : 6;
            }
            var aBytes = new Uint8Array(nArrLen);
            /* transcription... */
            for (var nIdx = 0, nChrIdx = 0; nIdx < nArrLen; nChrIdx++) {
                nChr = sDOMStr.charCodeAt(nChrIdx);
                if (nChr < 128) {
                    /* one byte */
                    aBytes[nIdx++] = nChr;
                }
                else if (nChr < 0x800) {
                    /* two bytes */
                    aBytes[nIdx++] = 192 + (nChr >>> 6);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
                else if (nChr < 0x10000) {
                    /* three bytes */
                    aBytes[nIdx++] = 224 + (nChr >>> 12);
                    aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
                else if (nChr < 0x200000) {
                    /* four bytes */
                    aBytes[nIdx++] = 240 + (nChr >>> 18);
                    aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
                else if (nChr < 0x4000000) {
                    /* five bytes */
                    aBytes[nIdx++] = 248 + (nChr >>> 24);
                    aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
                else /* if (nChr <= 0x7fffffff) */ {
                    /* six bytes */
                    aBytes[nIdx++] = 252 + (nChr >>> 30);
                    aBytes[nIdx++] = 128 + (nChr >>> 24 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
            }
            return aBytes;
        };
        /**
         * Converts Uint8Array to a string
         * @param aBytes
         */
        BrowserStringUtils.utf8ArrToString = function (aBytes) {
            var sView = "";
            for (var nPart = void 0, nLen = aBytes.length, nIdx = 0; nIdx < nLen; nIdx++) {
                nPart = aBytes[nIdx];
                sView += String.fromCharCode(nPart > 251 && nPart < 254 && nIdx + 5 < nLen ? /* six bytes */
                    /* (nPart - 252 << 30) may be not so safe in ECMAScript! So...: */
                    (nPart - 252) * 1073741824 + (aBytes[++nIdx] - 128 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                    : nPart > 247 && nPart < 252 && nIdx + 4 < nLen ? /* five bytes */
                        (nPart - 248 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                        : nPart > 239 && nPart < 248 && nIdx + 3 < nLen ? /* four bytes */
                            (nPart - 240 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                            : nPart > 223 && nPart < 240 && nIdx + 2 < nLen ? /* three bytes */
                                (nPart - 224 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                                : nPart > 191 && nPart < 224 && nIdx + 1 < nLen ? /* two bytes */
                                    (nPart - 192 << 6) + aBytes[++nIdx] - 128
                                    : /* nPart < 127 ? */ /* one byte */
                                    nPart);
            }
            return sView;
        };
        return BrowserStringUtils;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Class which exposes APIs to encode plaintext to base64 encoded string. See here for implementation details:
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_2_%E2%80%93_JavaScript's_UTF-16_%3E_UTF-8_%3E_base64
     */
    var Base64Encode = /** @class */ (function () {
        function Base64Encode() {
        }
        /**
         * Returns URL Safe b64 encoded string from a plaintext string.
         * @param input
         */
        Base64Encode.prototype.urlEncode = function (input) {
            return encodeURIComponent(this.encode(input)
                .replace(/=/g, "")
                .replace(/\+/g, "-")
                .replace(/\//g, "_"));
        };
        /**
         * Returns URL Safe b64 encoded string from an int8Array.
         * @param inputArr
         */
        Base64Encode.prototype.urlEncodeArr = function (inputArr) {
            return this.base64EncArr(inputArr)
                .replace(/=/g, "")
                .replace(/\+/g, "-")
                .replace(/\//g, "_");
        };
        /**
         * Returns b64 encoded string from plaintext string.
         * @param input
         */
        Base64Encode.prototype.encode = function (input) {
            var inputUtf8Arr = BrowserStringUtils.stringToUtf8Arr(input);
            return this.base64EncArr(inputUtf8Arr);
        };
        /**
         * Base64 encode byte array
         * @param aBytes
         */
        Base64Encode.prototype.base64EncArr = function (aBytes) {
            var eqLen = (3 - (aBytes.length % 3)) % 3;
            var sB64Enc = "";
            for (var nMod3 = void 0, nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
                nMod3 = nIdx % 3;
                /* Uncomment the following line in order to split the output in lines 76-character long: */
                /*
                if (nIdx > 0 && (nIdx * 4 / 3) % 76 === 0) { sB64Enc += "\r\n"; }
                */
                nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
                if (nMod3 === 2 || aBytes.length - nIdx === 1) {
                    sB64Enc += String.fromCharCode(this.uint6ToB64(nUint24 >>> 18 & 63), this.uint6ToB64(nUint24 >>> 12 & 63), this.uint6ToB64(nUint24 >>> 6 & 63), this.uint6ToB64(nUint24 & 63));
                    nUint24 = 0;
                }
            }
            return eqLen === 0 ? sB64Enc : sB64Enc.substring(0, sB64Enc.length - eqLen) + (eqLen === 1 ? "=" : "==");
        };
        /**
         * Base64 string to array encoding helper
         * @param nUint6
         */
        Base64Encode.prototype.uint6ToB64 = function (nUint6) {
            return nUint6 < 26 ?
                nUint6 + 65
                : nUint6 < 52 ?
                    nUint6 + 71
                    : nUint6 < 62 ?
                        nUint6 - 4
                        : nUint6 === 62 ?
                            43
                            : nUint6 === 63 ?
                                47
                                :
                                65;
        };
        return Base64Encode;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Class which exposes APIs to decode base64 strings to plaintext. See here for implementation details:
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_2_%E2%80%93_JavaScript's_UTF-16_%3E_UTF-8_%3E_base64
     */
    var Base64Decode = /** @class */ (function () {
        function Base64Decode() {
        }
        /**
         * Returns a URL-safe plaintext decoded string from b64 encoded input.
         * @param input
         */
        Base64Decode.prototype.decode = function (input) {
            var encodedString = input.replace(/-/g, "+").replace(/_/g, "/");
            switch (encodedString.length % 4) {
                case 0:
                    break;
                case 2:
                    encodedString += "==";
                    break;
                case 3:
                    encodedString += "=";
                    break;
                default:
                    throw new Error("Invalid base64 string");
            }
            var inputUtf8Arr = this.base64DecToArr(encodedString);
            return decodeURIComponent(BrowserStringUtils.utf8ArrToString(inputUtf8Arr));
        };
        /**
         * Decodes base64 into Uint8Array
         * @param base64String
         * @param nBlockSize
         */
        Base64Decode.prototype.base64DecToArr = function (base64String, nBlockSize) {
            var sB64Enc = base64String.replace(/[^A-Za-z0-9\+\/]/g, "");
            var nInLen = sB64Enc.length;
            var nOutLen = nBlockSize ? Math.ceil((nInLen * 3 + 1 >>> 2) / nBlockSize) * nBlockSize : nInLen * 3 + 1 >>> 2;
            var aBytes = new Uint8Array(nOutLen);
            for (var nMod3 = void 0, nMod4 = void 0, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                nMod4 = nInIdx & 3;
                nUint24 |= this.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                if (nMod4 === 3 || nInLen - nInIdx === 1) {
                    for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                        aBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                    }
                    nUint24 = 0;
                }
            }
            return aBytes;
        };
        /**
         * Base64 string to array decoding helper
         * @param charNum
         */
        Base64Decode.prototype.b64ToUint6 = function (charNum) {
            return charNum > 64 && charNum < 91 ?
                charNum - 65
                : charNum > 96 && charNum < 123 ?
                    charNum - 71
                    : charNum > 47 && charNum < 58 ?
                        charNum + 4
                        : charNum === 43 ?
                            62
                            : charNum === 47 ?
                                63
                                :
                                0;
        };
        return Base64Decode;
    }());

    // Constant byte array length
    var RANDOM_BYTE_ARR_LENGTH = 32;
    /**
     * Class which exposes APIs to generate PKCE codes and code verifiers.
     */
    var PkceGenerator = /** @class */ (function () {
        function PkceGenerator(cryptoObj) {
            this.base64Encode = new Base64Encode();
            this.cryptoObj = cryptoObj;
        }
        /**
         * Generates PKCE Codes. See the RFC for more information: https://tools.ietf.org/html/rfc7636
         */
        PkceGenerator.prototype.generateCodes = function () {
            return __awaiter(this, void 0, void 0, function () {
                var codeVerifier, codeChallenge;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            codeVerifier = this.generateCodeVerifier();
                            return [4 /*yield*/, this.generateCodeChallengeFromVerifier(codeVerifier)];
                        case 1:
                            codeChallenge = _a.sent();
                            return [2 /*return*/, {
                                verifier: codeVerifier,
                                challenge: codeChallenge
                            }];
                    }
                });
            });
        };
        /**
         * Generates a random 32 byte buffer and returns the base64
         * encoded string to be used as a PKCE Code Verifier
         */
        PkceGenerator.prototype.generateCodeVerifier = function () {
            try {
                // Generate random values as utf-8
                var buffer = new Uint8Array(RANDOM_BYTE_ARR_LENGTH);
                this.cryptoObj.getRandomValues(buffer);
                // encode verifier as base64
                var pkceCodeVerifierB64 = this.base64Encode.urlEncodeArr(buffer);
                return pkceCodeVerifierB64;
            }
            catch (e) {
                throw BrowserAuthError.createPkceNotGeneratedError(e);
            }
        };
        /**
         * Creates a base64 encoded PKCE Code Challenge string from the
         * hash created from the PKCE Code Verifier supplied
         */
        PkceGenerator.prototype.generateCodeChallengeFromVerifier = function (pkceCodeVerifier) {
            return __awaiter(this, void 0, void 0, function () {
                var pkceHashedCodeVerifier, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.cryptoObj.sha256Digest(pkceCodeVerifier)];
                        case 1:
                            pkceHashedCodeVerifier = _a.sent();
                            // encode hash as base64
                            return [2 /*return*/, this.base64Encode.urlEncodeArr(new Uint8Array(pkceHashedCodeVerifier))];
                        case 2:
                            e_1 = _a.sent();
                            throw BrowserAuthError.createPkceNotGeneratedError(e_1);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return PkceGenerator;
    }());

    // SHA-256 hashing algorithm
    var HASH_ALG = "SHA-256";
    /**
     * This class implements functions used by the browser library to perform cryptography operations such as
     * hashing and encoding. It also has helper functions to validate the availability of specific APIs.
     */
    var BrowserCrypto = /** @class */ (function () {
        function BrowserCrypto() {
            if (!(this.hasCryptoAPI())) {
                throw BrowserAuthError.createCryptoNotAvailableError("Browser crypto or msCrypto object not available.");
            }
        }
        /**
         * Returns a sha-256 hash of the given dataString as an ArrayBuffer.
         * @param dataString
         */
        BrowserCrypto.prototype.sha256Digest = function (dataString) {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    data = BrowserStringUtils.stringToUtf8Arr(dataString);
                    return [2 /*return*/, this.hasIECrypto() ? this.getMSCryptoDigest(HASH_ALG, data) : this.getSubtleCryptoDigest(HASH_ALG, data)];
                });
            });
        };
        /**
         * Populates buffer with cryptographically random values.
         * @param dataBuffer
         */
        BrowserCrypto.prototype.getRandomValues = function (dataBuffer) {
            var cryptoObj = window["msCrypto"] || window.crypto;
            if (!cryptoObj.getRandomValues) {
                throw BrowserAuthError.createCryptoNotAvailableError("getRandomValues does not exist.");
            }
            cryptoObj.getRandomValues(dataBuffer);
        };
        /**
         * Checks whether IE crypto (AKA msCrypto) is available.
         */
        BrowserCrypto.prototype.hasIECrypto = function () {
            return !!window["msCrypto"];
        };
        /**
         * Check whether browser crypto is available.
         */
        BrowserCrypto.prototype.hasBrowserCrypto = function () {
            return !!window.crypto;
        };
        /**
         * Check whether IE crypto or other browser cryptography is available.
         */
        BrowserCrypto.prototype.hasCryptoAPI = function () {
            return this.hasIECrypto() || this.hasBrowserCrypto();
        };
        /**
         * Helper function for SHA digest.
         * @param algorithm
         * @param data
         */
        BrowserCrypto.prototype.getSubtleCryptoDigest = function (algorithm, data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, window.crypto.subtle.digest(algorithm, data)];
                });
            });
        };
        /**
         * Helper function for SHA digest.
         * @param algorithm
         * @param data
         */
        BrowserCrypto.prototype.getMSCryptoDigest = function (algorithm, data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                        var digestOperation = window["msCrypto"].subtle.digest(algorithm, data.buffer);
                        digestOperation.addEventListener("complete", function (e) {
                            resolve(e.target.result);
                        });
                        digestOperation.addEventListener("error", function (error) {
                            reject(error);
                        });
                    })];
                });
            });
        };
        return BrowserCrypto;
    }());

    /**
     * This class implements MSAL's crypto interface, which allows it to perform base64 encoding and decoding, generating cryptographically random GUIDs and
     * implementing Proof Key for Code Exchange specs for the OAuth Authorization Code Flow using PKCE (rfc here: https://tools.ietf.org/html/rfc7636).
     */
    var CryptoOps = /** @class */ (function () {
        function CryptoOps() {
            // Browser crypto needs to be validated first before any other classes can be set.
            this.browserCrypto = new BrowserCrypto();
            this.b64Encode = new Base64Encode();
            this.b64Decode = new Base64Decode();
            this.guidGenerator = new GuidGenerator(this.browserCrypto);
            this.pkceGenerator = new PkceGenerator(this.browserCrypto);
        }
        /**
         * Creates a new random GUID - used to populate state and nonce.
         * @returns string (GUID)
         */
        CryptoOps.prototype.createNewGuid = function () {
            return this.guidGenerator.generateGuid();
        };
        /**
         * Encodes input string to base64.
         * @param input
         */
        CryptoOps.prototype.base64Encode = function (input) {
            return this.b64Encode.encode(input);
        };
        /**
         * Decodes input string from base64.
         * @param input
         */
        CryptoOps.prototype.base64Decode = function (input) {
            return this.b64Decode.decode(input);
        };
        /**
         * Generates PKCE codes used in Authorization Code Flow.
         */
        CryptoOps.prototype.generatePkceCodes = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.pkceGenerator.generateCodes()];
                });
            });
        };
        return CryptoOps;
    }());

    /**
     * Abstract class which defines operations for a browser interaction handling class.
     */
    var InteractionHandler = /** @class */ (function () {
        function InteractionHandler(authCodeModule, storageImpl) {
            this.authModule = authCodeModule;
            this.browserStorage = storageImpl;
        }
        /**
         * Function to handle response parameters from hash.
         * @param locationHash
         */
        InteractionHandler.prototype.handleCodeResponse = function (locationHash) {
            return __awaiter(this, void 0, void 0, function () {
                var requestState, authCode, cachedNonceKey, cachedNonce, tokenResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Check that location hash isn't empty.
                            if (StringUtils.isEmpty(locationHash)) {
                                throw BrowserAuthError.createEmptyHashError(locationHash);
                            }
                            requestState = this.browserStorage.getItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.REQUEST_STATE), CacheSchemaType.TEMPORARY);
                            authCode = this.authModule.handleFragmentResponse(locationHash, requestState);
                            cachedNonceKey = this.browserStorage.generateNonceKey(requestState);
                            cachedNonce = this.browserStorage.getItem(this.browserStorage.generateCacheKey(cachedNonceKey), CacheSchemaType.TEMPORARY);
                            // Assign code to request
                            this.authCodeRequest.code = authCode;
                            return [4 /*yield*/, this.authModule.acquireToken(this.authCodeRequest, cachedNonce, requestState)];
                        case 1:
                            tokenResponse = _a.sent();
                            this.browserStorage.cleanRequest();
                            return [2 /*return*/, tokenResponse];
                    }
                });
            });
        };
        return InteractionHandler;
    }());

    var RedirectHandler = /** @class */ (function (_super) {
        __extends(RedirectHandler, _super);
        function RedirectHandler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Redirects window to given URL.
         * @param urlNavigate
         */
        RedirectHandler.prototype.initiateAuthRequest = function (requestUrl, authCodeRequest, redirectStartPage, browserCrypto) {
            // Navigate if valid URL
            if (!StringUtils.isEmpty(requestUrl)) {
                // Cache start page, returns to this page after redirectUri if navigateToLoginRequestUrl is true
                var loginStartPage = redirectStartPage || window.location.href;
                this.browserStorage.setItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.ORIGIN_URI), loginStartPage, CacheSchemaType.TEMPORARY);
                // Set interaction status in the library.
                this.browserStorage.setItem(this.browserStorage.generateCacheKey(BrowserConstants.INTERACTION_STATUS_KEY), BrowserConstants.INTERACTION_IN_PROGRESS_VALUE, CacheSchemaType.TEMPORARY);
                this.browserStorage.cacheCodeRequest(authCodeRequest, browserCrypto);
                this.authModule.logger.infoPii("Navigate to:" + requestUrl);
                var isIframedApp = BrowserUtils.isInIframe();
                if (isIframedApp) {
                    // If we are not in top frame, we shouldn't redirect. This is also handled by the service.
                    throw BrowserAuthError.createRedirectInIframeError(isIframedApp);
                }
                // Navigate window to request URL
                BrowserUtils.navigateWindow(requestUrl);
            }
            else {
                // Throw error if request URL is empty.
                this.authModule.logger.info("Navigate url is empty");
                throw BrowserAuthError.createEmptyNavigationUriError();
            }
            // Return this window handle. Not used for redirect, but needed for API definition.
            return window;
        };
        /**
         * Handle authorization code response in the window.
         * @param hash
         */
        RedirectHandler.prototype.handleCodeResponse = function (locationHash, browserCrypto) {
            return __awaiter(this, void 0, void 0, function () {
                var requestState, authCode, cachedNonceKey, cachedNonce, tokenResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Check that location hash isn't empty.
                            if (StringUtils.isEmpty(locationHash)) {
                                throw BrowserAuthError.createEmptyHashError(locationHash);
                            }
                            // Interaction is completed - remove interaction status.
                            this.browserStorage.removeItem(this.browserStorage.generateCacheKey(BrowserConstants.INTERACTION_STATUS_KEY));
                            requestState = this.browserStorage.getItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.REQUEST_STATE), CacheSchemaType.TEMPORARY);
                            authCode = this.authModule.handleFragmentResponse(locationHash, requestState);
                            cachedNonceKey = this.browserStorage.generateNonceKey(requestState);
                            cachedNonce = this.browserStorage.getItem(this.browserStorage.generateCacheKey(cachedNonceKey), CacheSchemaType.TEMPORARY);
                            this.authCodeRequest = this.browserStorage.getCachedRequest(requestState, browserCrypto);
                            this.authCodeRequest.code = authCode;
                            // Hash was processed successfully - remove from cache
                            this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.URL_HASH));
                            return [4 /*yield*/, this.authModule.acquireToken(this.authCodeRequest, cachedNonce, requestState)];
                        case 1:
                            tokenResponse = _a.sent();
                            this.browserStorage.cleanRequest();
                            return [2 /*return*/, tokenResponse];
                    }
                });
            });
        };
        return RedirectHandler;
    }(InteractionHandler));

    /**
     * This class implements the interaction handler base class for browsers. It is written specifically for handling
     * popup window scenarios. It includes functions for monitoring the popup window for a hash.
     */
    var PopupHandler = /** @class */ (function (_super) {
        __extends(PopupHandler, _super);
        function PopupHandler(authCodeModule, storageImpl) {
            var _this = _super.call(this, authCodeModule, storageImpl) || this;
            // Properly sets this reference for the unload event.
            _this.unloadWindow = _this.unloadWindow.bind(_this);
            return _this;
        }
        /**
         * Opens a popup window with given request Url.
         * @param requestUrl
         */
        PopupHandler.prototype.initiateAuthRequest = function (requestUrl, authCodeRequest) {
            // Check that request url is not empty.
            if (!StringUtils.isEmpty(requestUrl)) {
                // Save auth code request
                this.authCodeRequest = authCodeRequest;
                // Set interaction status in the library.
                this.browserStorage.setItem(this.browserStorage.generateCacheKey(BrowserConstants.INTERACTION_STATUS_KEY), BrowserConstants.INTERACTION_IN_PROGRESS_VALUE, CacheSchemaType.TEMPORARY);
                this.authModule.logger.infoPii("Navigate to:" + requestUrl);
                // Open the popup window to requestUrl.
                return this.openPopup(requestUrl, Constants.LIBRARY_NAME, BrowserConstants.POPUP_WIDTH, BrowserConstants.POPUP_HEIGHT);
            }
            else {
                // Throw error if request URL is empty.
                this.authModule.logger.error("Navigate url is empty");
                throw BrowserAuthError.createEmptyNavigationUriError();
            }
        };
        /**
         * Monitors a window until it loads a url with a known hash, or hits a specified timeout.
         * @param popupWindow - window that is being monitored
         * @param timeout - milliseconds until timeout
         * @param urlNavigate - url that was navigated to
         */
        PopupHandler.prototype.monitorPopupForHash = function (popupWindow, timeout) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var maxTicks = timeout / BrowserConstants.POLL_INTERVAL_MS;
                var ticks = 0;
                var intervalId = setInterval(function () {
                    if (popupWindow.closed) {
                        // Window is closed
                        _this.cleanPopup();
                        clearInterval(intervalId);
                        reject(BrowserAuthError.createUserCancelledError());
                        return;
                    }
                    var href;
                    try {
                        /*
                         * Will throw if cross origin,
                         * which should be caught and ignored
                         * since we need the interval to keep running while on STS UI.
                         */
                        href = popupWindow.location.href;
                    }
                    catch (e) { }
                    // Don't process blank pages or cross domain
                    if (!href || href === "about:blank") {
                        return;
                    }
                    // Only run clock when we are on same domain
                    ticks++;
                    if (UrlString.hashContainsKnownProperties(href)) {
                        // Success case
                        var contentHash = popupWindow.location.hash;
                        _this.cleanPopup(popupWindow);
                        clearInterval(intervalId);
                        resolve(contentHash);
                        return;
                    }
                    else if (ticks > maxTicks) {
                        // Timeout error
                        _this.cleanPopup(popupWindow);
                        clearInterval(intervalId);
                        reject(BrowserAuthError.createMonitorWindowTimeoutError());
                        return;
                    }
                }, BrowserConstants.POLL_INTERVAL_MS);
            });
        };
        /**
         * @hidden
         *
         * Configures popup window for login.
         *
         * @param urlNavigate
         * @param title
         * @param popUpWidth
         * @param popUpHeight
         * @ignore
         * @hidden
         */
        PopupHandler.prototype.openPopup = function (urlNavigate, title, popUpWidth, popUpHeight) {
            try {
                /**
                 * adding winLeft and winTop to account for dual monitor
                 * using screenLeft and screenTop for IE8 and earlier
                 */
                var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
                var winTop = window.screenTop ? window.screenTop : window.screenY;
                /**
                 * window.innerWidth displays browser window"s height and width excluding toolbars
                 * using document.documentElement.clientWidth for IE8 and earlier
                 */
                var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                var left = ((width / 2) - (popUpWidth / 2)) + winLeft;
                var top_1 = ((height / 2) - (popUpHeight / 2)) + winTop;
                // open the window
                var popupWindow = window.open(urlNavigate, title, "width=" + popUpWidth + ", height=" + popUpHeight + ", top=" + top_1 + ", left=" + left);
                if (!popupWindow) {
                    throw BrowserAuthError.createEmptyWindowCreatedError();
                }
                if (popupWindow.focus) {
                    popupWindow.focus();
                }
                this.currentWindow = popupWindow;
                window.addEventListener("beforeunload", this.unloadWindow);
                return popupWindow;
            }
            catch (e) {
                this.authModule.logger.error("error opening popup " + e.message);
                this.browserStorage.removeItem(this.browserStorage.generateCacheKey(BrowserConstants.INTERACTION_STATUS_KEY));
                throw BrowserAuthError.createPopupWindowError(e.toString());
            }
        };
        /**
         * Event callback to unload main window.
         */
        PopupHandler.prototype.unloadWindow = function (e) {
            this.browserStorage.cleanRequest();
            this.currentWindow.close();
            // Guarantees browser unload will happen, so no other errors will be thrown.
            delete e["returnValue"];
        };
        /**
         * Closes popup, removes any state vars created during popup calls.
         * @param popupWindow
         */
        PopupHandler.prototype.cleanPopup = function (popupWindow) {
            if (popupWindow) {
                // Close window.
                popupWindow.close();
            }
            // Remove window unload function
            window.removeEventListener("beforeunload", this.unloadWindow);
            // Interaction is completed - remove interaction status.
            this.browserStorage.removeItem(this.browserStorage.generateCacheKey(BrowserConstants.INTERACTION_STATUS_KEY));
        };
        return PopupHandler;
    }(InteractionHandler));

    var SilentHandler = /** @class */ (function (_super) {
        __extends(SilentHandler, _super);
        function SilentHandler(authCodeModule, storageImpl, configuredLoadFrameTimeout) {
            var _this = _super.call(this, authCodeModule, storageImpl) || this;
            _this.loadFrameTimeout = configuredLoadFrameTimeout;
            return _this;
        }
        /**
         * Creates a hidden iframe to given URL using user-requested scopes as an id.
         * @param urlNavigate
         * @param userRequestScopes
         */
        SilentHandler.prototype.initiateAuthRequest = function (requestUrl, authCodeRequest, userRequestScopes) {
            return __awaiter(this, void 0, void 0, function () {
                var frameName, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (StringUtils.isEmpty(requestUrl)) {
                                // Throw error if request URL is empty.
                                this.authModule.logger.info("Navigate url is empty");
                                throw BrowserAuthError.createEmptyNavigationUriError();
                            }
                            // Save auth code request
                            this.authCodeRequest = authCodeRequest;
                            frameName = userRequestScopes ? "msalTokenFrame" + userRequestScopes : "msalTokenFrame";
                            if (!this.loadFrameTimeout) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.loadFrame(requestUrl, frameName)];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            _a = this.loadFrameSync(requestUrl, frameName);
                            _b.label = 3;
                        case 3: return [2 /*return*/, _a];
                    }
                });
            });
        };
        /**
         * Monitors an iframe content window until it loads a url with a known hash, or hits a specified timeout.
         * @param iframe
         * @param timeout
         */
        SilentHandler.prototype.monitorIframeForHash = function (iframe, timeout) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                /*
                 * Polling for iframes can be purely timing based,
                 * since we don't need to account for interaction.
                 */
                var nowMark = window.performance.now();
                var timeoutMark = nowMark + timeout;
                var intervalId = setInterval(function () {
                    if (window.performance.now() > timeoutMark) {
                        _this.removeHiddenIframe(iframe);
                        clearInterval(intervalId);
                        reject(BrowserAuthError.createMonitorWindowTimeoutError());
                        return;
                    }
                    var href;
                    try {
                        /*
                         * Will throw if cross origin,
                         * which should be caught and ignored
                         * since we need the interval to keep running while on STS UI.
                         */
                        href = iframe.contentWindow.location.href;
                    }
                    catch (e) { }
                    if (UrlString.hashContainsKnownProperties(href)) {
                        // Success case
                        var contentHash = iframe.contentWindow.location.hash;
                        _this.removeHiddenIframe(iframe);
                        clearInterval(intervalId);
                        resolve(contentHash);
                        return;
                    }
                }, BrowserConstants.POLL_INTERVAL_MS);
            });
        };
        /**
         * @hidden
         * Loads iframe with authorization endpoint URL
         * @ignore
         */
        SilentHandler.prototype.loadFrame = function (urlNavigate, frameName) {
            /*
             * This trick overcomes iframe navigation in IE
             * IE does not load the page consistently in iframe
             */
            var _this = this;
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    var frameHandle = _this.loadFrameSync(urlNavigate, frameName);
                    if (!frameHandle) {
                        reject("Unable to load iframe with name: " + frameName);
                        return;
                    }
                    resolve(frameHandle);
                }, _this.loadFrameTimeout);
            });
        };
        /**
         * @hidden
         * Loads the iframe synchronously when the navigateTimeFrame is set to `0`
         * @param urlNavigate
         * @param frameName
         * @param logger
         */
        SilentHandler.prototype.loadFrameSync = function (urlNavigate, frameName) {
            var frameHandle = this.getHiddenIframe(frameName);
            // returning to handle null in loadFrame, also to avoid null object access errors
            if (!frameHandle) {
                return null;
            }
            else if (frameHandle.src === "" || frameHandle.src === "about:blank") {
                frameHandle.src = urlNavigate;
            }
            return frameHandle;
        };
        /**
         * @hidden
         * Creates a new hidden iframe or gets an existing one for silent token renewal.
         * @ignore
         */
        SilentHandler.prototype.getHiddenIframe = function (iframeId) {
            if (typeof iframeId === "undefined") {
                return null;
            }
            var authFrame = document.getElementById(iframeId);
            if (!authFrame) {
                if (document.createElement &&
                    document.documentElement &&
                    (window.navigator.userAgent.indexOf("MSIE 5.0") === -1)) {
                    var ifr = document.createElement("iframe");
                    ifr.setAttribute("id", iframeId);
                    ifr.style.visibility = "hidden";
                    ifr.style.position = "absolute";
                    ifr.style.width = ifr.style.height = "0";
                    ifr.style.border = "0";
                    ifr.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
                    authFrame = document.getElementsByTagName("body")[0].appendChild(ifr);
                }
                else if (document.body && document.body.insertAdjacentHTML) {
                    document.body.insertAdjacentHTML("beforeend", "<iframe name='" + iframeId + "' id='" + iframeId + "' style='display:none'></iframe>");
                }
                if (window.frames && window.frames[iframeId]) {
                    authFrame = window.frames[iframeId];
                }
            }
            return authFrame;
        };
        /**
         * @hidden
         * Removes a hidden iframe from the page.
         * @ignore
         */
        SilentHandler.prototype.removeHiddenIframe = function (iframe) {
            if (document.body === iframe.parentNode) {
                document.body.removeChild(iframe);
            }
        };
        return SilentHandler;
    }(InteractionHandler));

    var version$1 = "2.0.0-beta.4";

    /**
     * The PublicClientApplication class is the object exposed by the library to perform authentication and authorization functions in Single Page Applications
     * to obtain JWT tokens as described in the OAuth 2.0 Authorization Code Flow with PKCE specification.
     */
    var PublicClientApplication = /** @class */ (function () {
        /**
         * @constructor
         * Constructor for the PublicClientApplication used to instantiate the PublicClientApplication object
         *
         * Important attributes in the Configuration object for auth are:
         * - clientID: the application ID of your application. You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
         * - authority: the authority URL for your application.
         * - redirect_uri: the uri of your application registered in the portal.
         *
         * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
         * It is of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
         * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
         * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
         * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
         * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
         *
         * In Azure B2C, authority is of the form https://{instance}/tfp/{tenant}/{policyName}/
         * Full B2C functionality will be available in this library in future versions.
         *
         * @param {@link (Configuration:type)} configuration object for the MSAL PublicClientApplication instance
         */
        function PublicClientApplication(configuration) {
            // Set the configuration.
            this.config = buildConfiguration(configuration);
            // Initialize the crypto class.
            this.browserCrypto = new CryptoOps();
            // Initialize the network module class.
            this.networkClient = this.config.system.networkClient;
            // Initialize the browser storage class.
            this.browserStorage = new BrowserStorage(this.config.auth.clientId, this.config.cache);
            // Initialize logger
            this.logger = new Logger(this.config.system.loggerOptions);
            // Initialize default authority instance
            TrustedAuthority.setTrustedAuthoritiesFromConfig(this.config.auth.knownAuthorities, this.config.auth.cloudDiscoveryMetadata);
            this.defaultAuthority = null;
        }
        // #region Redirect Flow
        /**
         * Event handler function which allows users to fire events after the PublicClientApplication object
         * has loaded during redirect flows. This should be invoked on all page loads involved in redirect
         * auth flows.
         * @returns token response or null. If the return value is null, then no auth redirect was detected.
         */
        PublicClientApplication.prototype.handleRedirectPromise = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.handleRedirectResponse()];
                });
            });
        };
        /**
         * Checks if navigateToLoginRequestUrl is set, and:
         * - if true, performs logic to cache and navigate
         * - if false, handles hash string and parses response
         */
        PublicClientApplication.prototype.handleRedirectResponse = function () {
            return __awaiter(this, void 0, void 0, function () {
                var hash, cachedHash, isResponseHash, loginRequestUrl, currentUrlNormalized, loginRequestUrlNormalized, hashKey;
                return __generator(this, function (_a) {
                    hash = window.location.hash;
                    cachedHash = this.browserStorage.getItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.URL_HASH), CacheSchemaType.TEMPORARY);
                    isResponseHash = UrlString.hashContainsKnownProperties(hash);
                    loginRequestUrl = this.browserStorage.getItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.ORIGIN_URI), CacheSchemaType.TEMPORARY);
                    currentUrlNormalized = UrlString.removeHashFromUrl(window.location.href);
                    loginRequestUrlNormalized = UrlString.removeHashFromUrl(loginRequestUrl || "");
                    if (loginRequestUrlNormalized === currentUrlNormalized) {
                        if (this.config.auth.navigateToLoginRequestUrl) {
                            // Replace current hash with non-msal hash, if present
                            BrowserUtils.replaceHash(loginRequestUrl);
                        }
                        else {
                            BrowserUtils.clearHash();
                        }
                        return [2 /*return*/, this.handleHash(isResponseHash ? hash : cachedHash)];
                    }
                    if (this.config.auth.navigateToLoginRequestUrl && isResponseHash && !BrowserUtils.isInIframe()) {
                        hashKey = this.browserStorage.generateCacheKey(TemporaryCacheKeys.URL_HASH);
                        this.browserStorage.setItem(hashKey, hash, CacheSchemaType.TEMPORARY);
                        if (StringUtils.isEmpty(loginRequestUrl) || loginRequestUrl === "null") {
                            // Redirect to home page if login request url is null (real null or the string null)
                            this.logger.warning("Unable to get valid login request url from cache, redirecting to home page");
                            BrowserUtils.navigateWindow("/", true);
                        }
                        else {
                            // Navigate to target url
                            BrowserUtils.navigateWindow(loginRequestUrl, true);
                        }
                    }
                    return [2 /*return*/, null];
                });
            });
        };
        /**
         * Checks if hash exists and handles in window.
         * @param responseHash
         * @param interactionHandler
         */
        PublicClientApplication.prototype.handleHash = function (responseHash) {
            return __awaiter(this, void 0, void 0, function () {
                var currentAuthority, authClient, interactionHandler;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // There is no hash - clean cache and return null.
                            if (StringUtils.isEmpty(responseHash)) {
                                this.browserStorage.cleanRequest();
                                return [2 /*return*/, null];
                            }
                            currentAuthority = this.browserStorage.getCachedAuthority();
                            return [4 /*yield*/, this.createAuthCodeClient(currentAuthority)];
                        case 1:
                            authClient = _a.sent();
                            interactionHandler = new RedirectHandler(authClient, this.browserStorage);
                            return [2 /*return*/, interactionHandler.handleCodeResponse(responseHash, this.browserCrypto)];
                    }
                });
            });
        };
        /**
         * Use when initiating the login process by redirecting the user's browser to the authorization endpoint. This function redirects the page, so
         * any code that follows this function will not execute.
         *
         * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
         * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
         *
         * @param {@link (AuthenticationParameters:type)}
         */
        PublicClientApplication.prototype.loginRedirect = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.acquireTokenRedirect(request)];
                });
            });
        };
        /**
         * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint. This function redirects
         * the page, so any code that follows this function will not execute.
         *
         * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
         * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
         * @param {@link (AuthenticationParameters:type)}
         *
         * To acquire only idToken, please pass clientId as the only scope in the Authentication Parameters
         */
        PublicClientApplication.prototype.acquireTokenRedirect = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var validRequest, authCodeRequest, authClient, interactionHandler, navigateUrl, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 4, , 5]);
                            validRequest = this.preflightInteractiveRequest(request);
                            return [4 /*yield*/, this.initializeAuthorizationCodeRequest(validRequest)];
                        case 1:
                            authCodeRequest = _a.sent();
                            return [4 /*yield*/, this.createAuthCodeClient(validRequest.authority)];
                        case 2:
                            authClient = _a.sent();
                            interactionHandler = new RedirectHandler(authClient, this.browserStorage);
                            return [4 /*yield*/, authClient.getAuthCodeUrl(validRequest)];
                        case 3:
                            navigateUrl = _a.sent();
                            // Show the UI once the url has been created. Response will come back in the hash, which will be handled in the handleRedirectCallback function.
                            interactionHandler.initiateAuthRequest(navigateUrl, authCodeRequest, request.redirectStartPage, this.browserCrypto);
                            return [3 /*break*/, 5];
                        case 4:
                            e_1 = _a.sent();
                            this.browserStorage.cleanRequest();
                            throw e_1;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        // #endregion
        // #region Popup Flow
        /**
         * Use when initiating the login process via opening a popup window in the user's browser
         *
         * @param {@link (AuthenticationParameters:type)}
         *
         * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
         */
        PublicClientApplication.prototype.loginPopup = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.acquireTokenPopup(request)];
                });
            });
        };
        /**
         * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
         * @param {@link AuthenticationParameters}
         *
         * To acquire only idToken, please pass clientId as the only scope in the Authentication Parameters
         * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
         */
        PublicClientApplication.prototype.acquireTokenPopup = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var validRequest, authCodeRequest, authClient, navigateUrl, e_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 5, , 6]);
                            validRequest = this.preflightInteractiveRequest(request);
                            return [4 /*yield*/, this.initializeAuthorizationCodeRequest(validRequest)];
                        case 1:
                            authCodeRequest = _a.sent();
                            return [4 /*yield*/, this.createAuthCodeClient(validRequest.authority)];
                        case 2:
                            authClient = _a.sent();
                            return [4 /*yield*/, authClient.getAuthCodeUrl(validRequest)];
                        case 3:
                            navigateUrl = _a.sent();
                            return [4 /*yield*/, this.popupTokenHelper(navigateUrl, authCodeRequest, authClient)];
                        case 4:
                            // Acquire token with popup
                            return [2 /*return*/, _a.sent()];
                        case 5:
                            e_2 = _a.sent();
                            this.browserStorage.cleanRequest();
                            throw e_2;
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Helper which acquires an authorization code with a popup from given url, and exchanges the code for a set of OAuth tokens.
         * @param navigateUrl
         */
        PublicClientApplication.prototype.popupTokenHelper = function (navigateUrl, authCodeRequest, authClient) {
            return __awaiter(this, void 0, void 0, function () {
                var interactionHandler, popupWindow, hash;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            interactionHandler = new PopupHandler(authClient, this.browserStorage);
                            popupWindow = interactionHandler.initiateAuthRequest(navigateUrl, authCodeRequest);
                            return [4 /*yield*/, interactionHandler.monitorPopupForHash(popupWindow, this.config.system.windowHashTimeout)];
                        case 1:
                            hash = _a.sent();
                            return [4 /*yield*/, interactionHandler.handleCodeResponse(hash)];
                        case 2:
                            // Handle response from hash string.
                            return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        // #endregion
        // #region Silent Flow
        /**
         * This function uses a hidden iframe to fetch an authorization code from the eSTS. There are cases where this may not work:
         * - Any browser using a form of Intelligent Tracking Prevention
         * - If there is not an established session with the service
         *
         * In these cases, the request must be done inside a popup or full frame redirect.
         *
         * For the cases where interaction is required, you cannot send a request with prompt=none.
         *
         * If your refresh token has expired, you can use this function to fetch a new set of tokens silently as long as
         * you session on the server still exists.
         * @param {@link AuthorizationUrlRequest}
         *
         * To renew idToken, please pass clientId as the only scope in the Authentication Parameters.
         * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
         */
        PublicClientApplication.prototype.ssoSilent = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var silentRequest, authCodeRequest, scopeString, authClient, navigateUrl;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // block the reload if it occurred inside a hidden iframe
                            BrowserUtils.blockReloadInHiddenIframes();
                            // Check that we have some SSO data
                            if (StringUtils.isEmpty(request.loginHint)) {
                                throw BrowserAuthError.createSilentSSOInsufficientInfoError();
                            }
                            // Check that prompt is set to none, throw error if it is set to anything else.
                            if (request.prompt && request.prompt !== PromptValue.NONE) {
                                throw BrowserAuthError.createSilentPromptValueError(request.prompt);
                            }
                            silentRequest = this.initializeAuthorizationRequest(__assign(__assign({}, request), { prompt: PromptValue.NONE }));
                            return [4 /*yield*/, this.initializeAuthorizationCodeRequest(silentRequest)];
                        case 1:
                            authCodeRequest = _a.sent();
                            scopeString = silentRequest.scopes ? silentRequest.scopes.join(" ") : "";
                            return [4 /*yield*/, this.createAuthCodeClient(silentRequest.authority)];
                        case 2:
                            authClient = _a.sent();
                            return [4 /*yield*/, authClient.getAuthCodeUrl(silentRequest)];
                        case 3:
                            navigateUrl = _a.sent();
                            return [2 /*return*/, this.silentTokenHelper(navigateUrl, authCodeRequest, authClient, scopeString)];
                    }
                });
            });
        };
        /**
         * Use this function to obtain a token before every call to the API / resource provider
         *
         * MSAL return's a cached token when available
         * Or it send's a request to the STS to obtain a new token using a refresh token.
         *
         * @param {@link AuthenticationParameters}
         *
         * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
         * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
         *
         */
        PublicClientApplication.prototype.acquireTokenSilent = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var silentRequest, silentAuthClient, e_3, isServerError, isInteractionRequiredError, isInvalidGrantError, silentAuthUrlRequest, authCodeRequest, authClient, navigateUrl, scopeString;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // block the reload if it occurred inside a hidden iframe
                            BrowserUtils.blockReloadInHiddenIframes();
                            silentRequest = __assign(__assign({}, request), this.initializeBaseRequest(request));
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 9]);
                            return [4 /*yield*/, this.createSilentFlowClient(silentRequest.authority)];
                        case 2:
                            silentAuthClient = _a.sent();
                            return [4 /*yield*/, silentAuthClient.acquireToken(silentRequest)];
                        case 3:
                            // Send request to renew token. Auth module will throw errors if token cannot be renewed.
                            return [2 /*return*/, _a.sent()];
                        case 4:
                            e_3 = _a.sent();
                            isServerError = e_3 instanceof ServerError;
                            isInteractionRequiredError = e_3 instanceof InteractionRequiredAuthError;
                            isInvalidGrantError = (e_3.errorCode === BrowserConstants.INVALID_GRANT_ERROR);
                            if (!(isServerError && isInvalidGrantError && !isInteractionRequiredError)) return [3 /*break*/, 8];
                            silentAuthUrlRequest = this.initializeAuthorizationRequest(__assign(__assign({}, silentRequest), { prompt: PromptValue.NONE }));
                            return [4 /*yield*/, this.initializeAuthorizationCodeRequest(silentAuthUrlRequest)];
                        case 5:
                            authCodeRequest = _a.sent();
                            return [4 /*yield*/, this.createAuthCodeClient(silentAuthUrlRequest.authority)];
                        case 6:
                            authClient = _a.sent();
                            return [4 /*yield*/, authClient.getAuthCodeUrl(silentAuthUrlRequest)];
                        case 7:
                            navigateUrl = _a.sent();
                            scopeString = silentAuthUrlRequest.scopes ? silentAuthUrlRequest.scopes.join(" ") : "";
                            return [2 /*return*/, this.silentTokenHelper(navigateUrl, authCodeRequest, authClient, scopeString)];
                        case 8: throw e_3;
                        case 9: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Helper which acquires an authorization code silently using a hidden iframe from given url
         * using the scopes requested as part of the id, and exchanges the code for a set of OAuth tokens.
         * @param navigateUrl
         * @param userRequestScopes
         */
        PublicClientApplication.prototype.silentTokenHelper = function (navigateUrl, authCodeRequest, authClient, userRequestScopes) {
            return __awaiter(this, void 0, void 0, function () {
                var silentHandler, msalFrame, hash, e_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 4, , 5]);
                            silentHandler = new SilentHandler(authClient, this.browserStorage, this.config.system.loadFrameTimeout);
                            return [4 /*yield*/, silentHandler.initiateAuthRequest(navigateUrl, authCodeRequest, userRequestScopes)];
                        case 1:
                            msalFrame = _a.sent();
                            return [4 /*yield*/, silentHandler.monitorIframeForHash(msalFrame, this.config.system.iframeHashTimeout)];
                        case 2:
                            hash = _a.sent();
                            return [4 /*yield*/, silentHandler.handleCodeResponse(hash)];
                        case 3:
                            // Handle response from hash string.
                            return [2 /*return*/, _a.sent()];
                        case 4:
                            e_4 = _a.sent();
                            this.browserStorage.cleanRequest();
                            throw e_4;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        // #endregion
        // #region Logout
        /**
         * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
         * Default behaviour is to redirect the user to `window.location.href`.
         * @param logoutRequest
         */
        PublicClientApplication.prototype.logout = function (logoutRequest) {
            return __awaiter(this, void 0, void 0, function () {
                var validLogoutRequest, authClient, logoutUri;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
                            return [4 /*yield*/, this.createAuthCodeClient(validLogoutRequest && validLogoutRequest.authority)];
                        case 1:
                            authClient = _a.sent();
                            logoutUri = authClient.getLogoutUri(validLogoutRequest);
                            BrowserUtils.navigateWindow(logoutUri);
                            return [2 /*return*/];
                    }
                });
            });
        };
        // #endregion
        // #region Account APIs
        /**
         * Returns all accounts that MSAL currently has data for.
         * (the account object is created at the time of successful login)
         * or null when no state is found
         * @returns {@link IAccount[]} - Array of account objects in cache
         */
        PublicClientApplication.prototype.getAllAccounts = function () {
            return this.browserStorage.getAllAccounts();
        };
        /**
         * Returns the signed in account matching username.
         * (the account object is created at the time of successful login)
         * or null when no state is found
         * @returns {@link IAccount} - the account object stored in MSAL
         */
        PublicClientApplication.prototype.getAccountByUsername = function (userName) {
            var allAccounts = this.getAllAccounts();
            return allAccounts.filter(function (accountObj) { return accountObj.username === userName; })[0];
        };
        // #endregion
        // #region Helpers
        /**
         *
         * Use to get the redirect uri configured in MSAL or null.
         * Evaluates redirectUri if its a function, otherwise simply returns its value.
         * @returns {string} redirect URL
         *
         */
        PublicClientApplication.prototype.getRedirectUri = function (requestRedirectUri) {
            return requestRedirectUri || this.config.auth.redirectUri || BrowserUtils.getCurrentUri();
        };
        /**
         * Use to get the post logout redirect uri configured in MSAL or null.
         * Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
         *
         * @returns {string} post logout redirect URL
         */
        PublicClientApplication.prototype.getPostLogoutRedirectUri = function (requestPostLogoutRedirectUri) {
            return requestPostLogoutRedirectUri || this.config.auth.postLogoutRedirectUri || BrowserUtils.getCurrentUri();
        };
        /**
         * Used to get a discovered version of the default authority.
         */
        PublicClientApplication.prototype.getDiscoveredDefaultAuthority = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.defaultAuthority) return [3 /*break*/, 2];
                            _a = this;
                            return [4 /*yield*/, AuthorityFactory.createDiscoveredInstance(this.config.auth.authority, this.config.system.networkClient)];
                        case 1:
                            _a.defaultAuthority = _b.sent();
                            _b.label = 2;
                        case 2: return [2 /*return*/, this.defaultAuthority];
                    }
                });
            });
        };
        /**
         * Helper to check whether interaction is in progress.
         */
        PublicClientApplication.prototype.interactionInProgress = function () {
            // Check whether value in cache is present and equal to expected value
            return this.browserStorage.getItem(this.browserStorage.generateCacheKey(BrowserConstants.INTERACTION_STATUS_KEY), CacheSchemaType.TEMPORARY) === BrowserConstants.INTERACTION_IN_PROGRESS_VALUE;
        };
        /**
         * Creates an Authorization Code Client with the given authority, or the default authority.
         * @param authorityUrl
         */
        PublicClientApplication.prototype.createAuthCodeClient = function (authorityUrl) {
            return __awaiter(this, void 0, void 0, function () {
                var clientConfig;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getClientConfiguration(authorityUrl)];
                        case 1:
                            clientConfig = _a.sent();
                            return [2 /*return*/, new AuthorizationCodeClient(clientConfig)];
                    }
                });
            });
        };
        /**
         * Creates an Silent Flow Client with the given authority, or the default authority.
         * @param authorityUrl
         */
        PublicClientApplication.prototype.createSilentFlowClient = function (authorityUrl) {
            return __awaiter(this, void 0, void 0, function () {
                var clientConfig;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getClientConfiguration(authorityUrl)];
                        case 1:
                            clientConfig = _a.sent();
                            return [2 /*return*/, new SilentFlowClient(clientConfig)];
                    }
                });
            });
        };
        /**
         * Creates a Client Configuration object with the given request authority, or the default authority.
         * @param requestAuthority
         */
        PublicClientApplication.prototype.getClientConfiguration = function (requestAuthority) {
            return __awaiter(this, void 0, void 0, function () {
                var discoveredAuthority, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!(!StringUtils.isEmpty(requestAuthority) && requestAuthority !== this.config.auth.authority)) return [3 /*break*/, 2];
                            return [4 /*yield*/, AuthorityFactory.createDiscoveredInstance(requestAuthority, this.config.system.networkClient)];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, this.getDiscoveredDefaultAuthority()];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            discoveredAuthority = _a;
                            return [2 /*return*/, {
                                authOptions: {
                                    clientId: this.config.auth.clientId,
                                    authority: discoveredAuthority,
                                    knownAuthorities: this.config.auth.knownAuthorities,
                                    cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata
                                },
                                systemOptions: {
                                    tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds,
                                    telemetry: this.config.system.telemetry
                                },
                                loggerOptions: {
                                    loggerCallback: this.config.system.loggerOptions.loggerCallback,
                                    piiLoggingEnabled: this.config.system.loggerOptions.piiLoggingEnabled
                                },
                                cryptoInterface: this.browserCrypto,
                                networkInterface: this.networkClient,
                                storageInterface: this.browserStorage,
                                libraryInfo: {
                                    sku: BrowserConstants.MSAL_SKU,
                                    version: version$1,
                                    cpu: "",
                                    os: ""
                                }
                            }];
                    }
                });
            });
        };
        /**
         * Helper to validate app environment before making a request.
         */
        PublicClientApplication.prototype.preflightInteractiveRequest = function (request) {
            // block the reload if it occurred inside a hidden iframe
            BrowserUtils.blockReloadInHiddenIframes();
            // Check if interaction is in progress. Throw error if true.
            if (this.interactionInProgress()) {
                throw BrowserAuthError.createInteractionInProgressError();
            }
            return this.initializeAuthorizationRequest(request);
        };
        /**
         * Initializer function for all request APIs
         * @param request
         */
        PublicClientApplication.prototype.initializeBaseRequest = function (request) {
            var validatedRequest = __assign({}, request);
            if (StringUtils.isEmpty(validatedRequest.authority)) {
                validatedRequest.authority = this.config.auth.authority;
            }
            validatedRequest.correlationId = (request && request.correlationId) || this.browserCrypto.createNewGuid();
            return __assign(__assign({}, validatedRequest), this.setDefaultScopes(validatedRequest));
        };
        /**
         * Generates a request that will contain the openid and profile scopes.
         * @param request
         */
        PublicClientApplication.prototype.setDefaultScopes = function (request) {
            return __assign(__assign({}, request), { scopes: __spreadArrays(((request && request.scopes) || []), [Constants.OPENID_SCOPE, Constants.PROFILE_SCOPE]) });
        };
        /**
         * Helper to initialize required request parameters for interactive APIs and ssoSilent()
         * @param request
         */
        PublicClientApplication.prototype.initializeAuthorizationRequest = function (request) {
            var validatedRequest = __assign({}, request);
            validatedRequest.redirectUri = this.getRedirectUri(validatedRequest.redirectUri);
            // Check for ADAL SSO
            if (StringUtils.isEmpty(validatedRequest.loginHint)) {
                // Only check for adal token if no SSO params are being used
                var adalIdTokenString = this.browserStorage.getItem(PersistentCacheKeys.ADAL_ID_TOKEN, CacheSchemaType.TEMPORARY);
                if (!StringUtils.isEmpty(adalIdTokenString)) {
                    var adalIdToken = new IdToken(adalIdTokenString, this.browserCrypto);
                    this.browserStorage.removeItem(PersistentCacheKeys.ADAL_ID_TOKEN);
                    if (adalIdToken.claims && adalIdToken.claims.upn) {
                        validatedRequest.loginHint = adalIdToken.claims.upn;
                    }
                }
            }
            validatedRequest.state = ProtocolUtils.setRequestState((request && request.state) || "", this.browserCrypto);
            if (StringUtils.isEmpty(validatedRequest.nonce)) {
                validatedRequest.nonce = this.browserCrypto.createNewGuid();
            }
            validatedRequest.responseMode = ResponseMode.FRAGMENT;
            validatedRequest = __assign(__assign({}, validatedRequest), this.initializeBaseRequest(validatedRequest));
            this.browserStorage.updateCacheEntries(validatedRequest.state, validatedRequest.nonce, validatedRequest.authority);
            return validatedRequest;
        };
        /**
         * Generates an auth code request tied to the url request.
         * @param request
         */
        PublicClientApplication.prototype.initializeAuthorizationCodeRequest = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var generatedPkceParams, authCodeRequest;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.browserCrypto.generatePkceCodes()];
                        case 1:
                            generatedPkceParams = _a.sent();
                            authCodeRequest = __assign(__assign({}, request), { redirectUri: request.redirectUri, code: "", codeVerifier: generatedPkceParams.verifier });
                            request.codeChallenge = generatedPkceParams.challenge;
                            request.codeChallengeMethod = Constants.S256_CODE_CHALLENGE_METHOD;
                            return [2 /*return*/, authCodeRequest];
                    }
                });
            });
        };
        /**
         * Initializer for the logout request.
         * @param logoutRequest
         */
        PublicClientApplication.prototype.initializeLogoutRequest = function (logoutRequest) {
            var validLogoutRequest = __assign({}, logoutRequest);
            if (StringUtils.isEmpty(validLogoutRequest.authority)) {
                validLogoutRequest.authority = this.config.auth.authority;
            }
            validLogoutRequest.correlationId = (validLogoutRequest && validLogoutRequest.correlationId) || this.browserCrypto.createNewGuid();
            validLogoutRequest.postLogoutRedirectUri = this.getPostLogoutRedirectUri(logoutRequest ? logoutRequest.postLogoutRedirectUri : "");
            return validLogoutRequest;
        };
        return PublicClientApplication;
    }());

    exports.AuthError = AuthError;
    exports.AuthErrorMessage = AuthErrorMessage;
    exports.AuthenticationResult = AuthenticationResult;
    exports.BrowserAuthError = BrowserAuthError;
    exports.BrowserAuthErrorMessage = BrowserAuthErrorMessage;
    exports.BrowserConfigurationAuthError = BrowserConfigurationAuthError;
    exports.BrowserConfigurationAuthErrorMessage = BrowserConfigurationAuthErrorMessage;
    exports.InteractionRequiredAuthError = InteractionRequiredAuthError;
    exports.Logger = Logger;
    exports.PublicClientApplication = PublicClientApplication;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=msal-browser.js.map
