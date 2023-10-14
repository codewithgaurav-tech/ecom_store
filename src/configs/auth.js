export default {
  meEndpoint: '/auth/me',
  loginEndpoint: '/jwt/login',

  // loginEndpoint: 'http://localhost:1337/api/auth/local',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
