import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GridModule } from "inet-ui";
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsHomeComponent } from './settings-home/settings-home.component';
import { CommonService } from 'app/shared/services/common.service';
import { FocusService } from 'app/shared/services/focus.service';
import { AppCommonModule } from '../common/app-common.module';
import { AssetGroupListComponent } from './asset-group/asset-group-list/asset-group-list.component';
import { AssetGroupAddComponent } from './asset-group/asset-group-add/asset-group-add.component';

@NgModule({
    imports: [
        CommonModule,
        AppCommonModule,
        GridModule,
        ReactiveFormsModule,
        SettingsRoutingModule
    ],
    declarations: [
        SettingsHomeComponent,
        AssetGroupListComponent,
        AssetGroupAddComponent
    ],
    providers: [
        CommonService,
        FocusService
    ]
})
export class SettingsModule {
}