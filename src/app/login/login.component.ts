import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../services/auth.service';

const materialModules = [
  RouterOutlet,
  FormsModule,
  CommonModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule
];

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [materialModules],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent {
  user: string = '';
  password: string = '';
  loginValid: boolean = true;
  year: number = new Date().getFullYear();

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.user, this.password).subscribe({
      next: (data: any) => {
        this.loginValid = true;
        console.log('todo ok')
        localStorage.setItem ('token', data['access']) 
        this.router.navigate(['/notifications']);
        console.log(data['access'])
      },
      error: (err: any) => {
        this.loginValid = false
        alert(err.error.detail)
      }
    });
  }
}