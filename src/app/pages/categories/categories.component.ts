import { Component, HostListener, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
 Categoriess = [
    { id: 1, name: 'Categories A', sku: 'SKU001', category: 'Category 1', stock: 100 },
    { id: 2, name: 'Categories B', sku: 'SKU002', category: 'Category 2', stock: 50 },
    // ...more products
  ];
  displayedColumns: string[] = ['id', 'name',  'actions'];
  dataSource = new MatTableDataSource(this.Categoriess);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('addCategoriesDialog') addCategoriesDialog!: TemplateRef<any>;
  isSmallScreen = window.innerWidth < 768;
  CategoriesData = { name: '', sku: '', category: '', stock: 0 };
  editingCategories: any = null;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = event.target.innerWidth < 768;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openAddCategoriesDialog(templateRef: TemplateRef<any>) {
    this.editingCategories = null;
    this.CategoriesData = { name: '', sku: '', category: '', stock: 0 };
    const dialogRef = this.dialog.open(templateRef, {
      width: '400px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe();
  }

  editCategories(Categories: any) {
    this.editingCategories = Categories;
    this.CategoriesData = { ...Categories };
    const dialogRef = this.dialog.open(this.addCategoriesDialog, {
      width: '400px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe();
    // Open dialog (assumes you have a reference to the template)
    // You may need to store a @ViewChild for the template and call openAddCategoriesDialog(this.addCategoriesDialog)
  }

  saveCategories(dialogRef: any) {
    if (this.editingCategories) {
      // Update existing Categories
      Object.assign(this.editingCategories, this.CategoriesData);
    } else {
      // Add new Categories
      const newId = this.Categoriess.length ? Math.max(...this.Categoriess.map(p => p.id)) + 1 : 1;
      this.Categoriess.push({ id: newId, ...this.CategoriesData });
      this.dataSource.data = this.Categoriess;
    }
    dialogRef.close();
  }

  deleteCategories(Categories: any) {
    this.Categoriess = this.Categoriess.filter(p => p !== Categories);
    this.dataSource.data = this.Categoriess;
  }
}
