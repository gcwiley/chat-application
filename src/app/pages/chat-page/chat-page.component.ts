import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { DocumentData } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

// import the chat service
import { ChatService } from '../../services/chat.service';

@Component({
   selector: 'app-chat-page',
   templateUrl: './chat-page.component.html',
   styleUrl: './chat-page.component.css',
   standalone: true,
   imports: [AsyncPipe, FormsModule],
})
export class ChatPageComponent {
   chatService = inject(ChatService);
   messages$ = this.chatService.loadMessages() as Observable<DocumentData[]>;
   user$ = this.chatService.user$;
   text = '';

   sendTextMessage() {
      this.chatService.saveTextMessage(this.text);
      this.text = '';
   }

   uploadImage(event: any) {
      const imgFile: File = event.target.files[0];
      if (!imgFile) {
         return;
      }
      this.chatService.saveImageMessage(imgFile);
   }
}
