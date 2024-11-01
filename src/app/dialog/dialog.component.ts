import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormGroup, Validators  
 } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {

  constructor(
    private _NgbActiveModal: NgbModal
  ) {}

  get activeModal() {
    return this._NgbActiveModal;
  }

  guardar() {
    // Aquí puedes guardar los datos del formulario, por ejemplo, en una base de datos
    console.log('Datos del formulario:');
  }
  onNoClick(): void {

  }
}


