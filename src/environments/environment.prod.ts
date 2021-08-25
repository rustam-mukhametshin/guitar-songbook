/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

export const environment = {
  production: true,
  apiUrl: 'https://jsonplaceholder.typicode.com',
  firebase: {
    apiKey: '${{FB_API_KEY}}',
    authDomain: '${{FB_AUTH_DOMAIN}}',
    databaseURL: '${{FB_DB_URL}}',
    projectId: '${{FB_PROJECT_ID}}',
    storageBucket: '${{FB_STORAGE_BUCKET}}',
    messagingSenderId: '${{FB_MESSAGING_SENDER_ID}}',
    appId: '${{FB_APP_ID}}',
    measurementId: '${{FB_MEASUREMENT_ID}}'
  }
};
