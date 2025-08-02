import { Component } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
@Component({
  selector: 'app-mailing',
  imports: [],
  templateUrl: './mailing.component.html',
  styleUrl: './mailing.component.css'
})
export class MailingComponent {
constructor(public global: GlobalService) {}

}
