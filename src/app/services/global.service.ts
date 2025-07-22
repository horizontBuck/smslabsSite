import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  activeRoute: string = '';
  constructor() { }

  setRoute(route: string) {
    this.activeRoute = route;
  }
}
