import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideHttpClient } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationComponent } from './notification/notification.component';
import { MatTableModule } from '@angular/material/table' 
import { MatIconModule } from '@angular/material/icon';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NotificationRegisterComponent } from './dialog/notification-register/notification-register.component';
import { NotificationDeletionComponent } from './dialog/notification-deletion/notification-deletion.component';
import { SingleNotificationDeletionComponent } from './dialog/single-notification-deletion/single-notification-deletion.component';
import { NotificationUpdateComponent } from './dialog/notification-update/notification-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    NotificationRegisterComponent,
    SingleNotificationDeletionComponent,
    NotificationUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    LoginComponent,
    RegisterComponent,
    NgbModule,
    MatTableModule,
    MatIconModule,
    MatFormField,
    DialogComponent,
    ReactiveFormsModule,
    MatDialogModule,
    NotificationDeletionComponent,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    MatDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
