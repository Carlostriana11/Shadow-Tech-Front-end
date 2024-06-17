import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages.nav/dashboard/dashboard.component';
import { ProductsComponent } from './pages.nav/products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './pages.nav/coupens/coupens.component';
import { PagesComponent } from './pages.nav/pages/pages.component';
import { MediaComponent } from './pages.nav/media/media.component';
import { SettingsComponent } from './pages.nav/settings/settings.component';
import { AccountComponent } from './pages.nav/account/account.component';

const routes: Routes = [

  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}, 
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'coupens', component: CoupensComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'account', component: AccountComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
