import { Component, ViewChild, AfterViewInit, HostListener, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ProductServiceService } from 'src/app/service/product/product-service.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements AfterViewInit {
  products = [
    { id: 1, name: 'Product A', sku: 'SKU001', category: 'Category 1', stock: 100 },
    { id: 2, name: 'Product B', sku: 'SKU002', category: 'Category 2', stock: 50 },
    // ...more products
  ];
  displayedColumns: string[] = ['id', 'name', 'price',];
  dataSource = new MatTableDataSource(this.products);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isSmallScreen = window.innerWidth < 768;
  productData = { name: '', sku: '', category: '', stock: 0 };
  editingProduct: any = null;
  router: any;

  constructor(private dialog: MatDialog, private productService: ProductServiceService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }
  ngOnInit(){
    this.getProduct();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = event.target.innerWidth < 768;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openAddProductDialog(templateRef: TemplateRef<any>) {
    this.editingProduct = null;
    this.productData = { name: '', sku: '', category: '', stock: 0 };
    const dialogRef = this.dialog.open(templateRef, {
      width: '400px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe();
  }

  editProduct(product: any) {
    this.editingProduct = product;
    this.productData = { ...product };
    // Open dialog (assumes you have a reference to the template)
    // You may need to store a @ViewChild for the template and call openAddProductDialog(this.addProductDialog)
  }

  saveProduct(dialogRef: any) {
    if (this.editingProduct) {
      // Update existing product
      Object.assign(this.editingProduct, this.productData);
    } else {
      // Add new product
      const newId = this.products.length ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
      this.products.push({ id: newId, ...this.productData });
      this.dataSource.data = this.products;
    }
    dialogRef.close();
  }

  deleteProduct(product: any) {
    this.products = this.products.filter(p => p !== product);
    this.dataSource.data = this.products;
  }
data:any
  getProduct(){
    this.productService.getProducts().subscribe(response=>{
      this.data=response;
      console.log(this.data)
    })
  }

  submit() {

    // Add login logic here
    this.router.navigate(['/asside']);
  }

}
