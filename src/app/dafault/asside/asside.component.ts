import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asside',
  templateUrl: './asside.component.html',
  styleUrls: ['./asside.component.css']
})
export class AssideComponent {
  sidebarOpen = window.innerWidth >= 992; // Open by default on large screens

  constructor(private router: Router) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.sidebarOpen = event.target.innerWidth >= 992;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  isDarkTheme = false;

  /**
   * Return true when either the product-management or addproduct route is active.
   */
  isProductSectionActive(): boolean {
    const url = this.router.url;
    return url.startsWith('/product-management') || url.startsWith('/asside/addproduct');
  }

toggleTheme() {
  this.isDarkTheme = !this.isDarkTheme;
  document.body.classList.toggle('dark-theme', this.isDarkTheme);
  document.body.classList.toggle('light-theme', !this.isDarkTheme);
}

ngOnInit() {
  document.body.classList.add('light-theme');
}
}
