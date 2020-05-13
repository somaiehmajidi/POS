import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-quick-key-modal',
  templateUrl: './quick-key-modal.component.html',
  styleUrls: ['./quick-key-modal.component.css']
})
export class QuickKeyModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QuickKeyModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataService) { }

  ngOnInit(): void {
  }

  onCancel(){
    this.dialogRef.close();
  }

}
