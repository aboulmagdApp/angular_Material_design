import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { User } from './user.model';
import { AuthData } from './auth-data.model';

// now we need to add router to our service we 
// add @Injectable and import from '@angular/core'
@Injectable()
export class AuthService {
    // we will use subject for declare variable 
    // subscript with true or false to know if user registered
    // or no or have auth or no and make this val with null if user
    // press logout 
    authChange = new Subject<boolean>();
    private user: User;

    /**
     *
     */
    constructor(private router: Router) {
          }
    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
       this.authSuccessfully();
    }

    login(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        this.authSuccessfully();
    }

    logout(){
       this.user = null;
       this.authChange.next(false);
       this.router.navigate(['/login']);
    }

    getUser(){
        return { ...this.user};
    }

    isAuth(){
        return this.user != null;
    }
    authSuccessfully(){
        // use this.authChange then .next to subscript result true or false in any component
        this.authChange.next(true);
        this.router.navigate(['/training']);
    }
}