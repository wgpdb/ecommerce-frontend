export default {

    oidc: {
        clientId: 'okta_client_id',
        issuer: 'okta_issuer',
        redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email']
    }
}