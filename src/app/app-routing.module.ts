import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages.nav/dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PagesComponent } from './pages.nav/pages/pages.component';
import { MediaComponent } from './pages.nav/media/media.component';
import { SettingsComponent } from './pages.nav/settings/settings.component';
import { AccountComponent } from './pages.nav/account/account.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CardComponent } from './components/card/card.component';
import { ProductDeatailComponent } from './components/product-deatail/product-deatail.component';
import { FormsComponent } from './pages.nav/forms/forms.component';
import { EditformComponent } from './components/editforms/editform/editform.component';
import { FormNewProductComponent } from './components/form-new-product/form-new-product.component';
import { ProductsComponent } from './pages.nav/products/products.component';
import { authGuard } from './guards/auth.guard';
import { EditformstableComponent } from './components/editforms/editformstable/editformstable.component';
import { CouponComponent } from './components/coupons/coupons.component';
import { FooterComponent } from './footer/footer.component';
import { DeleteformComponent } from './components/delete-form/delete-form.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/productDetail/:id', component: ProductDeatailComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/productDetail/:id', component: ProductDeatailComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'media', component: MediaComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'register', component: RegisterComponent },
  { canActivate: [authGuard], path: 'form', component: FormsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'coupons', component: CouponComponent },
  { path: 'card', component: CardComponent },
  { canActivate: [authGuard], path: 'editform', component: EditformComponent },
  { canActivate: [authGuard], path: 'deleteform', component: DeleteformComponent },
  { canActivate: [authGuard], path: 'editformlist', component: EditformstableComponent },
  { canActivate: [authGuard], path: 'editformlist/editform/:id', component: EditformComponent },
  { canActivate: [authGuard], path: 'editformlist/deleteform/:id', component: DeleteformComponent },
  { path: 'dashboard/forNewProduct', component: FormNewProductComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
