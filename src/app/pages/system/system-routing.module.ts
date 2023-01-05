import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileListComponent } from './file-list/file-list.component';
import { UserPermissionProfileListComponent } from './user-profile-list/user-profile-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'user-profile/list', pathMatch: 'full' },
    { path: 'user-profile/list', component: UserPermissionProfileListComponent },
    { path: 'file/list', component: FileListComponent },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule {
}