import { Component } from '@angular/core';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-sms',
  imports: [],
  templateUrl: './sms.component.html',
  styleUrl: './sms.component.css'
})
export class SmsComponent {
constructor(public global: GlobalService) {}
}
