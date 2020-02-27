import { Injectable } from "@angular/core";
import { CanActivate, Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild{

    constructor(private authService: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const isAuth = this.authService.IsUserAuthenticated().then(
            (isAuthenticated: boolean) => {
                if(isAuthenticated){
                    return true;
                }
                else{
                    this.router.navigate(['/']);
                }
            }
        );

        return isAuth;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return this.canActivate(route, state);
    }

}