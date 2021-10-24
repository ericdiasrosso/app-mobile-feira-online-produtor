/*****************************
 * environment.js
 * path: '/environment.js' (root of your project)
 ******************************/

import Constants from "expo-constants";
import { Platform } from "react-native";

const ENV = {
  dev: {
    apiKey= 'YOUR API KEY HERE'
    authDomain= 'YOUR AUTH DOMAIN HERE'
    projectId= 'YOUR AUTH  PROJECT ID HERE '
    storageBucket= 'YOUR STORAGE BUCKET HERE'
    messagingSenderId= 'YOUR MESSAGING SENDER ID HERE'
    appId= 'YOUR APP ID HERE'
    measurementId= 'YOUR MEASUREMENT ID HERE'
    apiUrl= 'YOUR LOCAL HOST IP HERE'

  },
  staging: {
    apiUrl: "[your.staging.api.here]",
    amplitudeApiKey: "[Enter your key here]"
  },
  prod: {
    apiUrl: "[your.production.api.here]",
    amplitudeApiKey: "[Enter your key here]"
  }
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.dev;
  } else if (env === "staging") {
    return ENV.staging;
  } else if (env === "prod") {
    return ENV.prod;
  }
};

export default getEnvVars;
