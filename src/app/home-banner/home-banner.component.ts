import { Component } from '@angular/core';

@Component({
  selector: 'app-home-banner', // Ajusta el selector aquí
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent {
  
  scrollDown(): void {
    const banner = document.getElementById('banner');
    if (banner) {
      banner.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}