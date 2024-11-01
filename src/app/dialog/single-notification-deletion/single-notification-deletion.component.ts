import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../notification/notification.component';

@Component({
  selector: 'app-single-notification-deletion',
  templateUrl: './single-notification-deletion.component.html',
  styleUrl: './single-notification-deletion.component.css',
  standalone: false,
})
export class SingleNotificationDeletionComponent implements OnInit {
  selectedNotification: Notification = {'id': '1', 'user': 'string', 'type': 'string', 'title': 'string', 'content': 'string', 'isRead': false}
  
  constructor(
    public notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.selectedNotification = this.notificationService.getData()
  }

  deleteNotification() {
    console.log(this.selectedNotification.id)
    this.notificationService.deleteNotification(Number(this.selectedNotification.id)).subscribe({
      next: () => {
        alert('Se ha eliminado la notificacion')
      },
      error: (err: any) =>  {
        alert(err.error.detail)
      }
    });
  }

}
