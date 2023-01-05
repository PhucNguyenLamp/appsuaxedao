import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetGroupListComponent } from './asset-group/asset-group-list/asset-group-list.component';
import { SettingsHomeComponent } from './settings-home/settings-home.component';

const routes: Routes = [
    { path: '', redirectTo: 'asset-group/list', pathMatch: 'full' },
    { path: 'asset-group/list', component: AssetGroupListComponent },
    // { path: 'report/list', component: ReportListComponent },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule {
}