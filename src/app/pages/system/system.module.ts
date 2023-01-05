import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GridModule } from "inet-ui";
import { CommonService } from 'app/shared/services/common.service';
import { FocusService } from 'app/shared/services/focus.service';
import { AppCommonModule } from '../common/app-common.module';
import { UserPermissionProfileListComponent } from './user-profile-list/user-profile-list.component';
import { SystemRoutingModule } from './system-routing.module';
import { FileListComponent } from './file-list/file-list.component';
import { UrlConverterComponent } from './url-converter/url-converter.component';

@NgModule({
    imports: [
        CommonModule,
        AppCommonModule,
        GridModule,
        ReactiveFormsModule,
        SystemRoutingModule
    ],
    declarations: [
        UserPermissionProfileListComponent,
        FileListComponent,
        UrlConverterComponent,
    ],
    providers: [
        CommonService,
        FocusService
    ]
})
export class SystemModule {
}