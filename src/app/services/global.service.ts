import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  /* activeRoute: string = ''; */
  activeRoute: 'home' | 'marketing' | 'contact' | 'about' | 'whatsapp' | 'sms' | 'mailing' | 'vlabs' | 'chatbot' | 'faqs' = 'home';
  
  constructor() { }

  setRoute(route: 'home' | 'marketing' | 'contact' | 'about' | 'whatsapp' | 'sms' | 'mailing' | 'vlabs' | 'chatbot' | 'faqs') {
    this.activeRoute = route;
  }
  
}
