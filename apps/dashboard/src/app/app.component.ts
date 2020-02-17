import { Component } from '@angular/core';
import { AuthService } from '@mdv-twenty/core-data';

@Component({
  selector: 'mdv-twenty-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'dashboard';

  links = [
    { path: '/fruits', icon: 'work', title: 'Fruits' }
  ]

  userIsAuthenticated = this.authService.isAuthenticated;
  constructor(private authService: AuthService) {}
}
