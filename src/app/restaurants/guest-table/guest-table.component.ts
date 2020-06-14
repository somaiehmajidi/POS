import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  data: number;
}

@Component({
  selector: 'app-guest-table',
  templateUrl: './guest-table.component.html',
  styles: ['Button{margin-left:5px}']
})
export class GuestTableComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<GuestTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogRef.close();
  }
  
}
