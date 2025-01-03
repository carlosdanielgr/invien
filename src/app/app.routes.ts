import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home-page/home-page.component').then(
        (c) => c.HomePageComponent
      ),
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./components/about-us/about-us.component').then(
        (c) => c.AboutUsComponent
      ),
  },
  {
    path: 'properties',
    loadComponent: () =>
      import('./components/properties/properties.component').then(
        (c) => c.PropertiesComponent
      ),
  },
  {
    path: 'properties/:id',
    loadComponent: () =>
      import(
        './components/properties/components/property-detail/property-detail.component'
      ).then((c) => c.PropertyDetailComponent),
  },
  {
    path: 'our-services',
    loadComponent: () =>
      import('./components/our-services/our-services.component').then(
        (c) => c.OurServicesComponent
      ),
  },
  {
    path: 'advisers',
    loadComponent: () =>
      import('./components/advisers/advisers.component').then(
        (c) => c.AdvisersComponent
      ),
  },
  {
    path: 'sell',
    loadComponent: () =>
      import('./components/sell-property/sell-property.component'),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
