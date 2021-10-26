import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroRegistrationComponent } from './pages/hero/hero-registration/hero-registration.component';
import { HeroComponent } from './pages/hero/hero.component';
import { LoginComponent } from './pages/login/login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  { path: 'login', component: LoginComponent },
  { path: 'user-registration', component: UserRegistrationComponent },

  { path: 'hero', component: HeroComponent },
  { path: 'hero-registration', component: HeroRegistrationComponent },
  { path: 'hero-registration/:id', component: HeroRegistrationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
