import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { GlobalService } from '../../services/global.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder,
    public authService: AuthService,
    public globalService: GlobalService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.loginForm.invalid) return;

    this.loading = true;
    const { email, password } = this.loginForm.value;

    const result = await this.authService.login(email!, password!);

    this.loading = false;

    if (result.success) {
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        text: `Hola ${result.user.email || ''}`,
        timer: 2000,
        showConfirmButton: false
      });

      // Redirigir según el rol
      if (this.authService.isAdministrator()) {
        this.globalService.activeRoute = 'admin'; 
      } else {
        this.globalService.activeRoute = 'home';
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: result.error || 'No se pudo iniciar sesión'
      });
    }
  }
}
