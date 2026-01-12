import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  productList = [
    { id: 1, name: 'T-Shirt', price: 20 },
    { id: 2, name: 'Shoes', price: 50 },
    { id: 3, name: 'Hat', price: 15 }
  ];
  filteredProducts = [...this.productList];
  productFilter: string = '';

  cart: any[] = [];
  selectedProductId: number = 0;
  quantity: number = 1;
  paymentType: string = 'Cash';
  selectedCustomerId: string = '';
  newCustomer = { name: '', phone: '' };
  useNewCustomer: boolean = false;

  customers = [
    { id: 'C001', name: 'John Doe' },
    { id: 'C002', name: 'Mary Jane' },
    { id: 'C003', name: 'Ali Rashid' }
  ];
  filteredCustomers = [...this.customers];
  customerFilter: string = '';

  ngOnInit() {
    this.filteredCustomers = this.customers;
    this.filteredProducts = this.productList;
  }

  filterCustomers() {
    const filterValue = this.customerFilter.toLowerCase();
    this.filteredCustomers = this.customers.filter(cust =>
      cust.name.toLowerCase().includes(filterValue)
    );
  }

  filterProducts() {
    const filterValue = this.productFilter.toLowerCase();
    this.filteredProducts = this.productList.filter(product =>
      product.name.toLowerCase().includes(filterValue)
    );
  }

  addToCart() {
    const product = this.productList.find(p => p.id === +this.selectedProductId);
    if (product && this.quantity > 0) {
      const existing = this.cart.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += this.quantity;
      } else {
        this.cart.push({ ...product, quantity: this.quantity });
      }
      this.quantity = 1;
      this.selectedProductId = 0;
      this.productFilter = '';
      this.filterProducts();
    }
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter(item => item.id !== id);
  }

  get total() {
    return this.cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  }

  submitSale() {
    const data = {
      cart: this.cart,
      paymentType: this.paymentType,
      customer: this.paymentType === 'Credit'
        ? this.useNewCustomer ? this.newCustomer : this.customers.find(c => c.id === this.selectedCustomerId)
        : null
    };

    console.log('Sale submitted:', data);
    alert('Sale submitted successfully!');
    this.resetForm();
  }

  resetForm() {
    this.cart = [];
    this.paymentType = 'Cash';
    this.selectedCustomerId = '';
    this.newCustomer = { name: '', phone: '' };
    this.useNewCustomer = false;
    this.productFilter = '';
    this.customerFilter = '';
    this.filterCustomers();
    this.filterProducts();
  }
}
