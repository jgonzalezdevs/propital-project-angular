import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';

export interface NotificationUpdate {
  type: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-notification-update',
  templateUrl: './notification-update.component.html',
  styleUrl: './notification-update.component.css'
})
export class NotificationUpdateComponent implements OnInit {
  type: string = '';
  title: string = 'ssss';
  content: string = '';
  notification: NotificationUpdate = {
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

  ngOnInit(): void {
    this.content = this.notiService.getData().content
    this.type = this.notiService.getData().type
    this.title = this.notiService.getData().title
  }

  update(): void {
    this.notification.type = this.type
    this.notification.title = this.title
    this.notification.content = this.content
    this.notiService.updateNotification(this.notiService.getData().id, this.notification).subscribe({
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
