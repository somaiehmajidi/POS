import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-quick-key-modal',
  templateUrl: './quick-key-modal.component.html',
  styleUrls: ['./quick-key-modal.component.css']
})
export class QuickKeyModalComponent implements OnInit {

  products;
  newKey:{title:string, items:any[]}; 

  constructor(public dialogRef: MatDialogRef<QuickKeyModalComponent>,
              private productService: ProductService){ }

  ngOnInit(): void {
    this.products =this.productService.getProducts();
  }

  onAdd(key: {title: string, items:any[]}){
    for (const item of key.items){
      item.category = key.title;
    }
    this.productService.createQuickKey(key.title, key.items);
    this.dialogRef.close();
  }
  onCancel(){
    this.dialogRef.close();
  }

}
