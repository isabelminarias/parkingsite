// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyD9EI7luhR1h_BR2T_zv3LTWYiUg_Lci7U",
    authDomain: "parking-link.firebaseapp.com",
    databaseURL: "https://parking-link.firebaseio.com",
    projectId: "parking-link",
    storageBucket: "parking-link.appspot.com",
    messagingSenderId: "231889527548"
  }
};
