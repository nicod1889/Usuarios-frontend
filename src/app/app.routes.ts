import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from '../components/users-list/users-list.component';
import { CreateUserComponent } from '../components/create-user/create-user.component';

export const routes: Routes = [
    {path: "users", component: UsersListComponent},
    {path: "create-user", component: CreateUserComponent},
    {path: "", redirectTo: "users", pathMatch: 'full'}  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}