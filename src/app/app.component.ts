import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { PropertyService } from '@shared/services/property.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  activeLightHeader = false;

  constructor(
    private router: Router,
    private readonly propertyService: PropertyService
  ) {}

  ngOnInit() {
    this.propertyService.initGetProperties();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('#contact')) window.location.href = '#contact';
        this.activeLightHeader =
          event.url.includes('/properties/') ||
          event.url.includes('/projects/');
        window.scrollTo(0, 0);
      }
    });
  }
}
