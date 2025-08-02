import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-marketing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.css'
})
export class MarketingComponent {
constructor(public global: GlobalService) {}
}
