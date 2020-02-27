import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./server-resolver.service";

const routes: Routes = [
    { path: "", component: HomeComponent },
    {
      path: "users", component: UsersComponent, children: [
        { path: ":id/:name", component: UserComponent }
      ]
    },
    {
      path: "servers", component: ServersComponent, /*canActivate: [AuthGuard]*/ canActivateChild: [AuthGuard],children: [
        { path: ":id", component: ServerComponent, resolve: {server: ServerResolver} },
        { path: ":id/edit", component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
      ]
    },
    // { path: "not-found", component: PageNotFoundComponent },
    { path: "not-found", component: ErrorPageComponent, data: {errorMessage : 'Error loading Page !'} },
    { path: "**", redirectTo: '/not-found' },
  ];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}