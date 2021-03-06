import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router}from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

// when we implement canActivate we need to route : ActivatedRouteSnapshot and 
                                        //  state : RouterStateSnapshot
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService,
        private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {
        if (this.authService.isAuth()) {
            return true;
        } else {
            this.router.navigate(['/login'])
        }
    }
}