import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../../services/data.service';
import { Key } from '../../interfaces/Key';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quick-key-modal',
  templateUrl: './quick-key-modal.component.html',
  styleUrls: ['./quick-key-modal.component.css']
})
export class QuickKeyModalComponent implements OnInit {

  products;

  constructor(public dialogRef: MatDialogRef<QuickKeyModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Key,
              private dataService: DataService){ }

  ngOnInit(): void {
    this.dataService.getProducts()
    .subscribe(products =>{
      this.products = products;
    });
  }


  onAdd(keyData: Key){
    this.dataService.createQuickKey(keyData.title, keyData.items);
    //console.log(keyData)
    this.dialogRef.close();
  }
  onCancel(){
    this.dialogRef.close();
  }

}
