import { Component } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  productName: string = '';
  productId: string = '';
  price: number | null = null;

  // This data will be encoded into the QR code
  get qrData(): string {
    return JSON.stringify({
      name: this.productName,
      id: this.productId,
      price: this.price
    });
  }
}
