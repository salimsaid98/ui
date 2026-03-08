import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AssideComponent } from './dafault/asside/asside.component';
import { DarshComponent } from './pages/darsh/darsh.component';
import { UsersComponent } from './pages/users/users.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { ProductManagementComponent } from './pages/product-management/product-management.component';
import { StockTrackingComponent } from './pages/stock-tracking/stock-tracking.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SalesComponent } from './pages/sales/sales.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';
import { PurchasesComponent } from './pages/purchases/purchases.component';
import { DevComponent } from './pages/dev/dev.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
// import { AddproductComponent } from './pages/addproduct/addproduct.component';
// import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'asside', component: AssideComponent, children: [
    {path: '', component: DarshComponent},
    {path: 'users', component: UsersComponent},
    {path: 'inventory', component: InventoryComponent},
    {path: 'accounting', component: AccountingComponent},
    {path: 'product-management', component: ProductManagementComponent},
    {path: 'stock-tracking', component: StockTrackingComponent},
    {path: 'categories', component: CategoriesComponent},
    {path: 'sales', component: SalesComponent},
    {path:'customers',component:CustomersComponent},
    {path:'suppliers',component:SuppliersComponent},
    {path:'purchases',component:PurchasesComponent},
    {path: 'dev', component: DevComponent},
    {path: 'addproduct', component: AddproductComponent},
    // {path: 'settings', component: SettingsComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
