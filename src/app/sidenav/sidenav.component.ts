import { Component, Output,EventEmitter, OnInit, HostListener} from '@angular/core';
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
export class SidenavComponent implements OnInit {

  @Output() onTaggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  @HostListener('window:resize', ['event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onTaggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void{
      this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onTaggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void{
    this.collapsed = false;
    this.onTaggleSideNav.emit({collapsed:this.collapsed, screenWidth: this.screenWidth})
  }
}
