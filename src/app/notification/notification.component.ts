import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from '../dialog/dialog.component';
import { NotificationRegisterComponent } from '../dialog/notification-register/notification-register.component';
import { NotificationDeletionComponent } from '../dialog/notification-deletion/notification-deletion.component';
import { SingleNotificationDeletionComponent } from '../dialog/single-notification-deletion/single-notification-deletion.component';
import { NotificationUpdateComponent } from '../dialog/notification-update/notification-update.component';

export interface Notification {
  id: string;
  user: string;
  type: string;
  title: string;
  content: string;
  isRead: boolean
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})

export class NotificationComponent implements OnInit {
  notifications: Notification[] = [{'id': '1', 'user': 'string', 'type': 'string', 'title': 'string', 'content': 'string', 'isRead': false}];
  isLoading = false;
  displayedColumns = ['id', 'user', 'type', 'title', 'content', 'isRead', 'actions']
  searchTerm = '';
  token: any
  dataSource = new MatTableDataSource(this.notifications);

  constructor(private notificationsService: NotificationService,
    public router: Router,
    private _NgbModal: NgbModal,
  ) { }

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications() {
    this.isLoading = true;
    try{
      this.notificationsService.getAllNotifications()
        .subscribe(
          notifications => {
            this.notifications = notifications;
            this.dataSource.data = notifications
            this.isLoading = false;
            console.log(notifications)
          },
          error => {
            console.error('Error al cargar las notificaciones', error);
            this.isLoading = false;
            this.router.navigate(['/login']);
          }
        );
      } catch(err) {
        console.log(err)
        this.router.navigate(['/']);
      }
  }

  deleteItem(obj:  any) {
    console.log(obj)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openModal() {
    this._NgbModal.open(DialogComponent, {
      windowClass: 'modal-job-scrollable'
    });

    // upwrap the "app-ng-modal" data to enable the "modal-dialog-scrollable"
    // and make the modal scrollable
    (() => {
      const node: HTMLElement | null = document.querySelector('app-ng-modal');
      if (node) {
        while (node.firstChild) {
          (node.parentNode as HTMLElement).insertBefore(node.firstChild, node);
        }
      }
      // make the modal scrollable by adding the class .modal-dialog-scrollable
      // here wait for one second so that we can find the .modal-dialog
      setTimeout(() => {
        const modalDialog = document.querySelector('.modal-job-scrollable .modal-dialog');
        if (modalDialog) {
          modalDialog.classList.add('modal-dialog-scrollable');
        }
      }, 1000)
    })();
  }

  openModalRegister() {
    this._NgbModal.open(NotificationRegisterComponent, {
      windowClass: 'modal-job-scrollable'
    });

    // upwrap the "app-ng-modal" data to enable the "modal-dialog-scrollable"
    // and make the modal scrollable
    (() => {
      const node: HTMLElement | null = document.querySelector('app-ng-modal');
      if (node) {
        while (node.firstChild) {
          (node.parentNode as HTMLElement).insertBefore(node.firstChild, node);
        }
      }
      // make the modal scrollable by adding the class .modal-dialog-scrollable
      // here wait for one second so that we can find the .modal-dialog
      setTimeout(() => {
        const modalDialog = document.querySelector('.modal-job-scrollable .modal-dialog');
        if (modalDialog) {
          modalDialog.classList.add('modal-dialog-scrollable');
        }
      }, 1000)
    })();
  }

  openModalDeleteAll() {
    this._NgbModal.open(NotificationDeletionComponent, {
      windowClass: 'modal-job-scrollable'
    });

    // upwrap the "app-ng-modal" data to enable the "modal-dialog-scrollable"
    // and make the modal scrollable
    (() => {
      const node: HTMLElement | null = document.querySelector('app-ng-modal');
      if (node) {
        while (node.firstChild) {
          (node.parentNode as HTMLElement).insertBefore(node.firstChild, node);
        }
      }
      // make the modal scrollable by adding the class .modal-dialog-scrollable
      // here wait for one second so that we can find the .modal-dialog
      setTimeout(() => {
        const modalDialog = document.querySelector('.modal-job-scrollable .modal-dialog');
        if (modalDialog) {
          modalDialog.classList.add('modal-dialog-scrollable');
        }
      }, 1000)
    })();
  }

  openSingleDeletionModal(elemento: any) {
    this.notificationsService.setData(elemento)
    this._NgbModal.open(SingleNotificationDeletionComponent, {
      windowClass: 'modal-job-scrollable'
    });

    // upwrap the "app-ng-modal" data to enable the "modal-dialog-scrollable"
    // and make the modal scrollable
    (() => {
      const node: HTMLElement | null = document.querySelector('app-ng-modal');
      if (node) {
        while (node.firstChild) {
          (node.parentNode as HTMLElement).insertBefore(node.firstChild, node);
        }
      }
      // make the modal scrollable by adding the class .modal-dialog-scrollable
      // here wait for one second so that we can find the .modal-dialog
      setTimeout(() => {
        const modalDialog = document.querySelector('.modal-job-scrollable .modal-dialog');
        if (modalDialog) {
          modalDialog.classList.add('modal-dialog-scrollable');
        }
      }, 1000)
    })();
  }

  openUpdateModal(elemento: any) {
    this.notificationsService.setData(elemento)
    this._NgbModal.open(NotificationUpdateComponent, {
      windowClass: 'modal-job-scrollable'
    });

    // upwrap the "app-ng-modal" data to enable the "modal-dialog-scrollable"
    // and make the modal scrollable
    (() => {
      const node: HTMLElement | null = document.querySelector('app-ng-modal');
      if (node) {
        while (node.firstChild) {
          (node.parentNode as HTMLElement).insertBefore(node.firstChild, node);
        }
      }
      // make the modal scrollable by adding the class .modal-dialog-scrollable
      // here wait for one second so that we can find the .modal-dialog
      setTimeout(() => {
        const modalDialog = document.querySelector('.modal-job-scrollable .modal-dialog');
        if (modalDialog) {
          modalDialog.classList.add('modal-dialog-scrollable');
        }
      }, 1000)
    })();
  }

}
