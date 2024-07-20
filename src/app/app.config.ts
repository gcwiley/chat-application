// comment
import { ApplicationConfig } from '@angular/core';

// Sets up providers necessary to enable Router functionality for the application.
import { provideRouter } from '@angular/router';

// import the firebase libraries 
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging'
import { provideStorage, getStorage } from '@angular/fire/storage';

// import the environmental variables
import { environment } from '../environments/environment'

// import the routes
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // sets up providers necessary to enable Router functionality for the applications
    provideRouter(routes),
    // Creates and initializes a @firebase/app#FirebaseApp instance.
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // comment
    provideFirestore(() => getFirestore()),
    // comment
    provideAuth(() => getAuth()),
    // comment
    provideFunctions(() => getFunctions()),
    // comment
    provideStorage(() => getStorage()),
    // Retrieves a Firebase Cloud Messaging instance.
    provideMessaging(() => getMessaging())
  ]
};
