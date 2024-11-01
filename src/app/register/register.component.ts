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
  selector: 'app-register',
  standalone: true,
  imports: [materialModules],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RegisterComponent {

  user: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  loginValid: boolean = true;
  year: number = new Date().getFullYear();

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.authService.register(this.user, this.password).subscribe({
      next: () => {
        this.loginValid = true;
        console.log('todo ok')
        this.router.navigate(['/login']);
        location.reload();
      },
      error: (err: any) =>  {
        this.loginValid = false
        alert(err.error.detail)
      }
    });
    location.reload()
  }

}
