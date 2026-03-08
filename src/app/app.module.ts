import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AssideComponent } from './dafault/asside/asside.component';
import { NavComponent } from './dafault/nav/nav.component';
import { DarshComponent } from './pages/darsh/darsh.component';
import { UsersComponent } from './pages/users/users.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { ProductManagementComponent } from './pages/product-management/product-management.component';
import { StockTrackingComponent } from './pages/stock-tracking/stock-tracking.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SalesComponent } from './pages/sales/sales.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';
import { PurchasesComponent } from './pages/purchases/purchases.component';
import { DevComponent } from './pages/dev/dev.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { QRCodeModule } from 'angularx-qrcode';
// import { AddproductComponent } from './pages/addproduct/addproduct.component';

// import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AssideComponent,
    NavComponent,
    DarshComponent,
    UsersComponent,
    InventoryComponent,
    AccountingComponent,
    ProductManagementComponent,
    StockTrackingComponent,
    CategoriesComponent,
    SalesComponent,
    CustomersComponent,
    SuppliersComponent,
    PurchasesComponent,
    DevComponent,
    AddproductComponent,
    // AddproductComponent,


    // SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule ,
     MatSelectModule ,
     MatIconModule,
     FormsModule,
      MatButtonModule,
      MatIconModule,
      MatDatepickerModule,
      MatNativeDateModule,
       HttpClientModule,
       QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
