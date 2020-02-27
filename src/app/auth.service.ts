import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    isAuthenticated: boolean = false;

    IsUserAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                setInterval(() => {
                    resolve(this.isAuthenticated);
                }, 800);
            }
        );

        return promise;
    }

    onLogin(){
        this.isAuthenticated = true;
    }

    onLogout(){
        this.isAuthenticated = false;
    }

}