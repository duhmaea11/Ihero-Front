import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeroComponent } from './pages/hero/hero.component';
import { LoginComponent } from './pages/login/login.component'
import { HeroRegistrationComponent } from './pages/hero/hero-registration/hero-registration.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { HeroService } from './services/hero.service';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { StorageService } from './services/storage.service';
import { ButtonLogoutComponent } from './components/button-logout/button-logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegistrationComponent,
    HeroRegistrationComponent,
    HeroComponent,
    PaginatorComponent,
    ButtonLogoutComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,

  ],
  providers: [
    HeroService,
    StorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  exports: [PaginatorComponent],
  entryComponents: [PaginatorComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
