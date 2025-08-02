import { Component } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
@Component({
  selector: 'app-chatbot',
  imports: [],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
constructor(public global: GlobalService) {}

}
