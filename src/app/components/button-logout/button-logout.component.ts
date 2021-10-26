import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { USER_LOGGED } from 'src/app/constants/storage.constans';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'button-logout',
  templateUrl: 'button-logout.component.html',
  styleUrls: ['button-logout.component.scss'],
})
export class ButtonLogoutComponent implements OnInit {
  public icon = { faSignOutAlt };

  constructor(private router: Router, private storageService: StorageService) {}

  get hasUserLogged() {
    return this.storageService.getItem(USER_LOGGED);
  }

  ngOnInit() {}

  logout() {
    this.storageService.clear(USER_LOGGED);
    this.router.navigate(['/']);
  }
}
