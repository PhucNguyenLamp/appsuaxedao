import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CEDUEmployeeViewComponent } from './cedu-employee-view/cedu-employee-view.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'cedu-employee-view/:id', component: CEDUEmployeeViewComponent },
    { path: 'cedu-employee-view', component: CEDUEmployeeViewComponent },
    // { path: 'report/list', component: ReportListComponent },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {
}