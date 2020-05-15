import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../shared/product.service';
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

  onAdd(keyData: {title: string, items: string[]}){
    this.productService.createQuickKey(keyData.title, keyData.items);
    console.log(keyData);
    this.dialogRef.close();
  }
  onCancel(){
    this.dialogRef.close();
  }

}
