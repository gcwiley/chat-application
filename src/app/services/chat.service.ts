import { Injectable, inject } from '@angular/core';

// import auth
import { Auth, authState, signInWithPopup, GoogleAuthProvider, signOut, user, getAuth, User } from '@angular/fire/auth';

// comment here
import { map, switchMap, firstValueFrom, filter, Observable, Subscription } from 'rxjs';

// fire store - find out what this is!
import {
   doc,
   docData,
   DocumentReference,
   Firestore,
   getDoc,
   setDoc,
   updateDoc,
   collection,
   addDoc,
   deleteDoc,
   collectionData,
   Timestamp,
   serverTimestamp,
   query,
   orderBy,
   limit,
   onSnapshot,
   DocumentData,
   FieldValue,
} from '@angular/fire/firestore';

// comment here
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';

// comment here
import { getToken, Messaging, onMessage } from '@angular/fire/messaging';

// comment here
import { Router } from '@angular/router';

// define the chat message type
type ChatMessage = {
   name: string | null;
   profilePicUrl: string | null;
   timestamp: FieldValue;
   uid: string | null;
   text?: string;
   imageUrl?: string;
};

@Injectable({
   providedIn: 'root',
})
export class ChatService {
   firestore: Firestore = inject(Firestore);
   auth: Auth = inject(Auth);
   storage: Storage = inject(Storage);
   messaging: Messaging = inject(Messaging);
   router: Router = inject(Router);
   private provider = new GoogleAuthProvider();

   LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif?a';

   // observable that is updated when the auth state changes
   user$ = user(this.auth);
   currentUser: User | null = this.auth.currentUser;
   userSubscription: Subscription;

   constructor() {
      this.userSubscription = this.user$.subscribe((aUser: User | null) => {
         this.currentUser = aUser;
      });
   }

   // Login in to Friendly Chat
   login() {}

   // log out of friendly chat
   logout() {}

   // adds a text or image message to cloud firestore
   addMessage = async (
      textMessage: string | null,
      imageUrl: string | null
   ): Promise<void | DocumentReference<DocumentData>> => {};

   // save a new message to Cloud Firestore
   saveTextMessage = async (messageText: string) => {
      return this.addMessage(messageText, null);
   };

   // loads chat messages history and listen for upcoming ones
   loadMessages = () => {
      return null as unknown;
   };

   // saves a new message containing an image in Firebase.
   // this first saves the image in firebase storage
   saveImageMessage = async (file: any) => {};

   async updateData(path: string, data: any) {}

   async deleteData(path: string) {}

   getDocData(path: string) {}

   getCollectionData(path: string) {}

   async uploadToStorage(path: string, input: HTMLInputElement, contentType: any) {
      return null;
   }

   // requests premissions to show notifications.
   requestNotificationsPermissions = async () => {};

   saveMessagingDeviceToken = async () => {};
}
