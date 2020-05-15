import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../shared/product.service';
import { Title } from '@angular/platform-browser';
//import { Key } from '../../interfaces/Key';

@Component({
  selector: 'app-quick-key-modal',
  templateUrl: './quick-key-modal.component.html',
  styleUrls: ['./quick-key-modal.component.css']
})
export class QuickKeyModalComponent implements OnInit {

  products;

  constructor(public dialogRef: MatDialogRef<QuickKeyModalComponent>,
              //@Inject(MAT_DIALOG_DATA),
              private productService: ProductService){ }

  ngOnInit(): void {
    this.products =this.productService.getProducts();
  }

  onAdd(keyData: {title: string, items:any[]}){
    for (const item of keyData.items){
      item.category = keyData.title;
    }
    this.productService.createQuickKey(keyData.title, keyData.items);
    this.dialogRef.close();
  }
  onCancel(){
    this.dialogRef.close();
  }

}
