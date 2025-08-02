import { Component } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
@Component({
  selector: 'app-vlabs',
  imports: [],
  templateUrl: './vlabs.component.html',
  styleUrl: './vlabs.component.css'
})
export class VlabsComponent {
constructor(public global: GlobalService) {}

}
