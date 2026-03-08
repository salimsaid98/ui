import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeroComponent } from './landing/hero/hero.component';
import { ProblemComponent } from './landing/problem/problem.component';
import { SolutionComponent } from './landing/solution/solution.component';
import { FeaturesComponent } from './landing/features/features.component';
import { PricingComponent } from './landing/pricing/pricing.component';
import { FaqComponent } from './landing/faq/faq.component';
import { CtaComponent } from './landing/cta/cta.component';
import { NavbarComponent } from './landing/navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TranslationService } from './translation.service';
import { TranslatePipe } from './translate.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
<<<<<<< HEAD
import { MatIconModule } from '@angular/material/icon';   
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
=======
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
// import { AddproductComponent } from './pages/addproduct/addproduct.component';

// import { SidenavComponent } from './sidenav/sidenav.component';
>>>>>>> a5230e8105b06ddd0e3127dfb638504401951c02

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LandingComponent,
    HeroComponent,
    ProblemComponent,
    SolutionComponent,
    FeaturesComponent,
    PricingComponent,
    FaqComponent,
    CtaComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    TranslatePipe
=======
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
    // AddproductComponent,


    // SidenavComponent
>>>>>>> a5230e8105b06ddd0e3127dfb638504401951c02
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
      MatToolbarModule,
    MatButtonModule,
      MatIconModule,
      MatDatepickerModule,
      MatNativeDateModule,
       HttpClientModule
  ],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
