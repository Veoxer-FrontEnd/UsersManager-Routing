import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ServersService } from "./servers/servers.service";

export interface Server {
    name: string;
    id: number;
    status: string;
}


@Injectable({
    providedIn: 'root'
})
export class ServerResolver implements Resolve<Server> {

    constructor(private serverService: ServersService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        return this.serverService.getServer(+route.params['id']);
    }

}