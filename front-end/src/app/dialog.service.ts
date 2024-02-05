import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openCartDialog(medicine: any): void {
    this.dialog.open(DialogComponent, {
      height: '160px',
      width: '400px',
      data: { medicine },
    });
  }
}
