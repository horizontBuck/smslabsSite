import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { CommonModule } from '@angular/common';
import { GlobalService } from './services/global.service';
import { HomeComponent } from './components/home/home.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { WhatsappComponent } from './components/products/whatsapp/whatsapp.component';
import { SmsComponent } from './components/products/sms/sms.component';
import { MailingComponent } from './components/products/mailing/mailing.component';
import { VlabsComponent } from './components/products/vlabs/vlabs.component';
import { ChatbotComponent } from './components/products/chatbot/chatbot.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogFormComponent } from './components/dashboard/blog-form/blog-form.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    CommonModule,
    HomeComponent,
    MarketingComponent,
    ContactComponent,
    AboutComponent,  
    WhatsappComponent,
    SmsComponent,
    MailingComponent,
    VlabsComponent,
    ChatbotComponent,
    FaqsComponent,
    AdminComponent,
    BlogComponent,
    BlogDetailComponent,
    BlogFormComponent,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'smslabs';

  constructor(public global: GlobalService) { }
}
