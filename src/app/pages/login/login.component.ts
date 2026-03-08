import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  navigateToRegister() {
    this.router.navigate(['/register']);
  }
  constructor(private router: Router) { }

  submit() {

    // Add login logic here
    this.router.navigate(['/asside']);
  }
}
