import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
features = [
  {
    title: 'Product Management',
    desc: 'Add, edit, and manage products.',
    icon: 'fas fa-boxes',
    link: ['../product-management']
  },
  {
    title: 'Stock Tracking',
    desc: 'Monitor stock levels and history.',
    icon: 'fas fa-warehouse',
    link: '../stock-tracking'
  },
  {
    title: 'Categories & Suppliers',
    desc: 'Organize products and manage suppliers.',
    icon: 'fas fa-tags',
    link: '/inventory/categories'
  },
  {
    title: 'Purchasing & Receiving',
    desc: 'Handle purchase orders and receiving.',
    icon: 'fas fa-truck-loading',
    link: '/inventory/purchasing'
  },
  {
    title: 'Sales & Stock Out',
    desc: 'Record sales and stock out transactions.',
    icon: 'fas fa-shopping-cart',
    link: '/inventory/sales'
  },
  {
    title: 'Inventory Adjustments',
    desc: 'Adjust stock for loss, damage, etc.',
    icon: 'fas fa-sliders-h',
    link: '/inventory/adjustments'
  },
  {
    title: 'Reporting & Analytics',
    desc: 'View inventory reports and analytics.',
    icon: 'fas fa-chart-bar',
    link: '/inventory/reports'
  },
  {
    title: 'Barcode/QR Code Support',
    desc: 'Generate and scan barcodes/QR codes.',
    icon: 'fas fa-barcode',
    link: '/inventory/barcode'
  },
  {
    title: 'User Roles & Permissions',
    desc: 'Manage user access and permissions.',
    icon: 'fas fa-user-shield',
    link: '/inventory/roles'
  }
];
}
