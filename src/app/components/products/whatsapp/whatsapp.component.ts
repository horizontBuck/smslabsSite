import { Component } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
@Component({
  selector: 'app-whatsapp',
  imports: [],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.css'
})
export class WhatsappComponent {
constructor(public global: GlobalService) {}
}
