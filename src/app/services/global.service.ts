import { Injectable } from '@angular/core';
import { BlogService } from './blog.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  /* activeRoute: string = ''; */
  activeRoute: 'home' | 'marketing' | 'contact' | 'about' | 'whatsapp' | 'sms' | 'mailing' | 'vlabs' | 'chatbot' | 'faqs' | 'admin' | 'blog' | 'blog-detail' | 'blog-form' = 'home';
  baseUrl: string = 'https://db.buckapi.lat:8090';
  private blogSource = new BehaviorSubject<any>(null);
  blog$ = this.blogSource.asObservable();
  blog: any = {};
  constructor(public blogService: BlogService) { }

  setRoute(route: 'home' | 'marketing' | 'contact' | 'about' | 'whatsapp' | 'sms' | 'mailing' | 'vlabs' | 'chatbot' | 'faqs' | 'admin' | 'blog' | 'blog-detail' | 'blog-form') {
    this.activeRoute = route;
  }
 
  async previaBlog(blog: any) {
    const res = await this.blogService.getPostById(blog.id);
    this.blog = res;
    this.blogSource.next(res);
    this.activeRoute = 'blog-detail';
  }
  
}
