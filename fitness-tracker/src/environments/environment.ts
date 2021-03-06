// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// var config = {
//   apiKey: "<API_KEY>",
//   authDomain: "<PROJECT_ID>.firebaseapp.com",
//   databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
//   projectId: "<PROJECT_ID>",
//   storageBucket: "<BUCKET>.appspot.com",
//   messagingSenderId: "<SENDER_ID>",
// };

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAmf7QpIrTJDdGqz5GDK1ICiW_UCnCrf78',
    authDomain: 'ng-fitness-tracker-eba9e.firebaseapp.com',
    databaseURL: 'https://ng-fitness-tracker.firebaseio.com',
    projectId: 'ng-fitness-tracker-eba9e',
    storageBucket: 'ng-fitness-tracker.appspot.com',
    messagingSenderId: '803278521172'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
