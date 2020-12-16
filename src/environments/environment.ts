// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const firebaseConfig = {
  apiKey: "AIzaSyCyG13-mAEheGQFazZ8R547gOPjAXNZZng",
  authDomain: "fire-auth-59592.firebaseapp.com",
  databaseURL: "https://fire-auth-59592.firebaseio.com",
  projectId: "fire-auth-59592",
  storageBucket: "fire-auth-59592.appspot.com",
  messagingSenderId: "808353975318",
  appId: "1:808353975318:web:9a745ac198dfd23dc53937",
  measurementId: "G-S3CE9V9RR9"
};

export const environment = {
  production: true,
  firebaseConfig
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
