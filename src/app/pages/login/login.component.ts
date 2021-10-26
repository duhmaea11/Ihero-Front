import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faMask } from '@fortawesome/free-solid-svg-icons';
import { USER_LIST, USER_LOGGED } from 'src/app/constants/storage.constans';
import { LoginInterface } from 'src/app/interface/login.interface';
import { UserInterface } from 'src/app/interface/user.interface';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'login-component',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  public icon = { faMask };
  public login: LoginInterface = {} as LoginInterface;

  constructor(private router: Router, private storageService: StorageService) {}

  get storageUsers() {
    const userL = this.storageService.getItem(USER_LIST);
    return userL ? JSON.parse(userL) : null;
  }

  ngOnInit() {}

  goToRegister() {
    this.router.navigate(['/user-registration']);
  }

  handleLogin() {
    if (!this.storageUsers || !this.storageUsers?.length) {
      alert('Cadastre-se para continuar');
      return;
    }

    const { email, password } = this.login;
    const user = this.storageUsers.find(
      (user: UserInterface) =>
        user.email === email && user.password === password
    );

    if (!user) {
      alert('Usuario não encontrado');
      return;
    }

    const data = JSON.stringify(user);
    this.storageService.setItem(USER_LOGGED, data);
    
    this.router.navigate(['/hero']);
  }
}
