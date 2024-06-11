import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  email: string = localStorage.getItem("email") || ""
  password: string = localStorage.getItem("password") || ""
}
