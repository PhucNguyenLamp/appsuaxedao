import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { InputCharacterMaskDirective } from '../../shared/directives/input-character-mask.directive';
import { NumericOnlyDirective } from '../../shared/directives/numeric-only.directive';
import {BsLocaleService} from 'ngx-bootstrap/datepicker';
import {CoreModule} from "inet-core";
import {AuthenticateGuard, CloudTranslateModule, InterceptorModule, GridModule, DialogModule, FileUploadModule} from 'inet-ui';
import {CustomTranslateLoader} from '../../i18n/custom-translate-loader';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { MomentFullPipe, MomentPipe, MomentShortPipe } from "../../shared/pipes/moment.pipe";
import { BsModalService } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CommonService } from 'app/shared/services/common.service';
import { FocusService } from 'app/shared/services/focus.service';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { MatNativeDateModule, MAT_DATE_LOCALE   } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { EditorModule } from '@tinymce/tinymce-angular';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SafeHtmlPipe } from 'app/shared/pipes/safeHtml.pipe';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { MediaPickerComponent } from './media-picker/media-picker.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { PDFViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { MatIconModule } from '@angular/material/icon';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
// import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
    imports: [
        CloudTranslateModule.forRoot({
            loader: CustomTranslateLoader
        }),
        ModalModule.forRoot(),
        ButtonsModule.forRoot(),
        PopoverModule.forRoot(),
        TabsModule.forRoot(),
        BsDatepickerModule.forRoot(),
        // CarouselModule.forRoot(),
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        GridModule,
        CoreModule,
        DialogModule,
        RouterModule,
        EditorModule,
        MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule,
        MatExpansionModule, MatIconModule, MatInputModule, MatListModule,
        MatNativeDateModule, MatRadioModule, MatSelectModule, MatSliderModule, MatToolbarModule,
        PaginationModule,
        DragDropModule,
        NgSelectModule,
        FileUploadModule,
        PdfViewerModule,
        
    ],
    declarations: [ 
        MomentPipe, MomentShortPipe, MomentFullPipe,
        SafeHtmlPipe,
        InputCharacterMaskDirective,
        NumericOnlyDirective,
        MediaPickerComponent,
        InfoPanelComponent,
        TextEditorComponent,
        FileUploadComponent,
        PDFViewerComponent,
        EmployeeSearchComponent,
        // MaterialViewComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CoreModule,
        CloudTranslateModule,
        ModalModule,
        RouterModule,
        InterceptorModule,
        PopoverModule,
        TabsModule,
        BsDatepickerModule,
        PaginationModule,
        EditorModule,
        MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule,
        MatExpansionModule, MatIconModule, MatInputModule, MatListModule,
        MatNativeDateModule, MatRadioModule, MatSelectModule, MatSliderModule, MatToolbarModule,
        DragDropModule,
        // CarouselModule,
        MomentPipe, MomentShortPipe, MomentFullPipe,
        SafeHtmlPipe,
        InputCharacterMaskDirective,
        NumericOnlyDirective,
        DialogModule,
        NgSelectModule,
        FileUploadModule,
        PdfViewerModule,
        MediaPickerComponent,
        InfoPanelComponent,
        TextEditorComponent,
        FileUploadComponent,
        PDFViewerComponent,
        EmployeeSearchComponent,
        // MaterialViewComponent
    ],
    providers: [
        ComponentLoaderFactory,
        AuthenticateGuard,
        PositioningService,
        BsLocaleService,
        BsModalService,
        FocusService,
        CommonService,
        MatNativeDateModule,
        MatDatepickerModule,
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB'} 
    ]
})
export class AppCommonModule {
}
