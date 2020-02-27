import { Observable } from "rxjs";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

export interface CanComponentDeactivate{
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
    providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

    canDeactivate(component: CanComponentDeactivate, 
        route: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return component.canDeactivate();
    }
}