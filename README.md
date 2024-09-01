# RealTimeEmoChat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Firebase Setup

To use Firebase in this project, follow these steps:

1. **Add Firebase Configuration**:
   - In your `src/environments/` directory, open the `environment.ts` file.
   - Add your Firebase configuration details as follows:

     ```typescript
     export const environment = {
       production: false,
       firebase: {
         apiKey: "YOUR_API_KEY",
         authDomain: "YOUR_AUTH_DOMAIN",
         projectId: "YOUR_PROJECT_ID",
         storageBucket: "YOUR_STORAGE_BUCKET",
         messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
         appId: "YOUR_APP_ID",
         measurementId: "YOUR_MEASUREMENT_ID"
       }
     };
     ```

   Replace the placeholder values with your actual Firebase project configuration.

2. **Install Dependencies**:
   - Run the following command to install the necessary dependencies, using the `--force` flag to ensure that all packages are installed:

     ```bash
     npm i --force
     ```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
