import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
/* bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err)); */
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()) // 🔹 aquí habilitas HttpClient
  ]
}).catch((err) => console.error(err));