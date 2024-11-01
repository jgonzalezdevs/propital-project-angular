import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification-deletion',
  templateUrl: './notification-deletion.component.html',
  styleUrl: './notification-deletion.component.css',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})
export class NotificationDeletionComponent {

  constructor(
    public notificationService: NotificationService
  ) {}

  deleteNotifications() {
    this.notificationService.deleteNotifications().subscribe({
      next: () => {
        console.log('Se han eliminado todas las notificaciones')
      },
      error: (err: any) =>  {
        alert(err.error.detail)
      }
    });
  }

}
