import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
sidebarOpen = window.innerWidth >= 992; // Open by default on large screens

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.sidebarOpen = event.target.innerWidth >= 992;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
