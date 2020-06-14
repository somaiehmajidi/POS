import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Button } from 'protractor';

export interface DialogData {
  data: string;
}

@Component({
  selector: 'app-rename-table',
  templateUrl: './rename-table.component.html',
  styles: ['Button{margin-left:5px}']
})
export class RenameTableComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<RenameTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogRef.close();
  }

}
