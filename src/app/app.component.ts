import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sidenav';

  isSideNavCollapsed = false
  screenWidth = 0;

  onTaggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
  constructor(private authService: AuthService){}
  ngOnInit(){
    this.authService.initializeSession();
  }
}
