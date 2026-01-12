import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-asside',
  templateUrl: './asside.component.html',
  styleUrls: ['./asside.component.css']
})
export class AssideComponent {
sidebarOpen = window.innerWidth >= 992; // Open by default on large screens

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.sidebarOpen = event.target.innerWidth >= 992;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  isDarkTheme = false;

toggleTheme() {
  this.isDarkTheme = !this.isDarkTheme;
  document.body.classList.toggle('dark-theme', this.isDarkTheme);
  document.body.classList.toggle('light-theme', !this.isDarkTheme);
}

ngOnInit() {
  document.body.classList.add('light-theme');
}
}
