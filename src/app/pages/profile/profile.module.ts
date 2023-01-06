import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GridModule } from "inet-ui";
import { CommonService } from 'app/shared/services/common.service';
import { FocusService } from 'app/shared/services/focus.service';
import { AppCommonModule } from '../common/app-common.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { CEDUEmployeeViewComponent } from './cedu-employee-view/cedu-employee-view.component';

@NgModule({
    imports: [
        CommonModule,
        AppCommonModule,
        GridModule,
        ReactiveFormsModule,
        ProfileRoutingModule
        // SettingsRoutingModule
    ],
    declarations: [
        CEDUEmployeeViewComponent
        // SettingsHomeComponent,
    ],
    providers: [
        CommonService,
        FocusService
    ]
})
export class ProfileModule {
}