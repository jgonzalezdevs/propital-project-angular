import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { Notification, NotificationComponent } from '../../notification/notification.component';

export interface NotificationRegister {
  type: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-notification-register',
  templateUrl: './notification-register.component.html',
  styleUrl: './notification-register.component.css'
})
export class NotificationRegisterComponent {
  type: string = '';
  title: string = '';
  content: string = '';
  notification: NotificationRegister = {
    'type': '',
    'title': '',
    'content': ''
  }
  registerValid = false

  constructor(
    private notiService: NotificationService,
    private router: Router,
    public notificationsService: NotificationService
  ) {}

  register(): void {
    this.notification.type = this.type
    this.notification.title = this.title
    this.notification.content = this.content
    this.notiService.createNotification(this.notification).subscribe({
      next: () => {
        this.registerValid = true;
        console.log('todo ok')
      },
      error: (err: any) =>  {
        this.registerValid = false
        alert(err.error.detail)
      }
    });
  }

}
