// filepath: c:\Users\User\Documents\Soft Galaxy\Accounting and Inventory Management System\ui\ui\src\app\pages\users\users.component.ts
import { Component, ViewChild, AfterViewInit, HostListener, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements AfterViewInit {
  users = [
    { id: 1, username: 'admin', email: 'admin@example.com', role: 'Admin' },
    // ...more users
  ];

  User :any=
  { username: '',
    email: '',
    role: ''
   }; // For new user input
  displayedColumns: string[] = ['id', 'username', 'email', 'role', 'actions'];
  dataSource = new MatTableDataSource(this.users);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isSmallScreen = window.innerWidth < 768;
  newUser = { username: '', email: '', role: '' };

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

  openAddUserDialog(templateRef: TemplateRef<any>) {
    this.newUser = { username: '', email: '', role: '' };
    const dialogRef = this.dialog.open(templateRef, {
      width: '400px',
      data: {},
      disableClose: true
    });
    dialogRef.afterClosed().subscribe();
  }

  saveUser(dialogRef: any) {
    if (this.newUser.username && this.newUser.email && this.newUser.role) {
      const newId = this.users.length ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
      this.users.push({ id: newId, ...this.newUser });
      this.dataSource.data = this.users;
      dialogRef.close();
    }
  }
}
