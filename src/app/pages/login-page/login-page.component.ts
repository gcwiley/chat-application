import { Component, inject } from '@angular/core';

// import chat service
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  standalone: true,
})
export class LoginPageComponent {
  chatService = inject(ChatService);
  user$ = this.chatService.user$
}
