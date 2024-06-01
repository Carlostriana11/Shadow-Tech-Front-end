import { Component, Output,EventEmitter  } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

@Output() onTaggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter;
  collapsed = false
  screenWidth = 0
  navData = navbarData

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onTaggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
  }

  closeSidenav(): void{
    this.collapsed = false
    this.onTaggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth})
  }
}
