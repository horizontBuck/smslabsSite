import { Component, ViewChild } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('dropdown') dropdown: any;
  isProductsOpen = false;
  isServicesOpen = false;
  isResourcesOpen = false;
  expandedColumn: 'canales' | 'integraciones' | null = null;
  expandedColumn2: 'servicios' | null = 'servicios';
  expandedColumn3: 'recursos' | null = 'recursos';
  constructor(public global: GlobalService) { }


toggleDropdown(event: Event) {
  this.isProductsOpen = !this.isProductsOpen;
  const li = (event.currentTarget as HTMLElement).closest('.dropdown');
  const btn = li?.querySelector('.dropbtn') as HTMLButtonElement;
  btn.setAttribute('aria-expanded', this.isProductsOpen.toString());
  li?.classList.toggle('open', this.isProductsOpen);
}

toggleProducts(event: Event) {
  this.isProductsOpen = !this.isProductsOpen;
}
openProducts() { this.isProductsOpen = true; }
closeProducts() { this.isProductsOpen = false; this.expandedColumn = 'canales'; }

toggleServices(event: Event) {
  this.isServicesOpen = !this.isServicesOpen;
}
openServices() { this.isServicesOpen = true; }
closeServices() { this.isServicesOpen = false; this.expandedColumn2 = 'servicios';
 }

toggleResources(event: Event) {
  this.isResourcesOpen = !this.isResourcesOpen;
}
openResources() { this.isResourcesOpen = true; }
closeResources() { this.isResourcesOpen = false; this.expandedColumn3 = 'recursos';
 }

toggleColumn(col: 'canales'|'integraciones') {
  this.expandedColumn = this.expandedColumn === col ? null : col;
}
toggleColumn2(col: 'servicios') {
  this.expandedColumn2  = this.expandedColumn2 === col ? null : col;
}
toggleColumn3(col: 'recursos') {
  this.expandedColumn3  = this.expandedColumn3 === col ? null : col;
}
}
