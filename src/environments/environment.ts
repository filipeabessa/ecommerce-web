// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const baseURL = 'http://localhost:8000/';

export const environment = {
  production: true,
  authURL: baseURL + 'o/token/',
  authAuthorizationHeader:
    'Basic TkYxWlZ0OXJqQnlra2s5ZnBGMEh1QmgzcHU2ZjJXRFhLSWdYazhDazpPbmRKV1lqYlc0a2tsQzdibW5mSDRLU1E2NkNjU2lOSDZyRUhHcTZ6cXQ4R0lLRU92cUZrdGdmNUpNQ2I3R2VZUFkycGQ4STBNeFhjb1RtdzhSZnpQVXkxYmlNMldzS3BhWHBtaTNqczF1ZWhnWlI1T1RrdGt4TDdBV1hRNlV4dQ==',
  apiURL: baseURL + 'api/v1',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
