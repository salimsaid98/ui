import { Component, ViewChild, AfterViewInit, HostListener, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-stock-tracking',
  templateUrl: './stock-tracking.component.html',
  styleUrls: ['./stock-tracking.component.css']
})
export class StockTrackingComponent implements AfterViewInit {
  stockEntries = [
    {
      date: new Date(),
      product: 'Product A',
      type: 'In',
      quantity: 100,
      note: 'Initial stock'
    },
    {
      date: new Date(),
      product: 'Product B',
      type: 'Out',
      quantity: 10,
      note: 'Sold 10 units'
    }
  ];
  displayedColumns: string[] = ['date', 'product', 'type', 'quantity', 'note', 'actions'];
  dataSource = new MatTableDataSource(this.stockEntries);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('addStockDialog') addStockDialog!: TemplateRef<any>;

  isSmallScreen = window.innerWidth < 768;
  stockData = { date: new Date(), product: '', type: '', quantity: 0, note: '' };
  editingStock: any = null;

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

  openAddStockDialog() {
    this.editingStock = null;
    this.stockData = { date: new Date(), product: '', type: '', quantity: 0, note: '' };
    const dialogRef = this.dialog.open(this.addStockDialog, {
      width: '400px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe();
  }

  editStock(entry: any) {
    this.editingStock = entry;
    this.stockData = { ...entry };
    const dialogRef = this.dialog.open(this.addStockDialog, {
      width: '400px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe();
  }

  saveStock(dialogRef: any) {
    if (this.editingStock) {
      // Update existing entry
      Object.assign(this.editingStock, this.stockData);
    } else {
      // Add new entry
      this.stockEntries.push({ ...this.stockData });
      this.dataSource.data = this.stockEntries;
    }
    dialogRef.close();
  }

  deleteStock(entry: any) {
    this.stockEntries = this.stockEntries.filter(e => e !== entry);
    this.dataSource.data = this.stockEntries;
  }
}