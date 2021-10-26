import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USER_LIST, USER_LOGGED } from 'src/app/constants/storage.constans';
import { UserInterface } from 'src/app/interface/user.interface';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'user-registration-component',
    templateUrl: 'user-registration.component.html',
    styleUrls:['user-registration.component.scss']
})

export class UserRegistrationComponent implements OnInit {
    public user: UserInterface = {} as UserInterface;
    public confirmPassword: string = '';

    constructor(
        private router: Router,
        private storageService: StorageService
    ) { }

    get storageUsers() {
        const userL = this.storageService.getItem(USER_LIST)
        return userL ? JSON.parse(userL) : null 
    }

    ngOnInit() { }

    backToLogin() {
        this.router.navigate(['/login'])
    }

    goToHero(user: UserInterface) {
        const data = JSON.stringify(user)
        this.storageService.setItem(USER_LOGGED, data)
        this.router.navigate(['/hero'])
    }

    save() {
        if(this.user.password != this.confirmPassword) {
            alert('As senhas não coincidem')
            return
        }

        if(!this.storageUsers || !this.storageUsers?.length) {
            const data = JSON.stringify([this.user])
            this.storageService.setItem(USER_LIST, data)

            this.goToHero(this.user)
        }else {
            const currentList = this.storageUsers

            if(currentList.some((user: UserInterface) => user.email === this.user.email)) {
                alert('Email já cadastrado')
                return
            }

            currentList.push(this.user)
            const data = JSON.stringify(currentList)
            this.storageService.setItem(USER_LIST, data)
            
            this.goToHero(this.user)
        }
    }
}