import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* App Root */
import { AppComponent } from './app.component';

import { CoreService, SecurityService } from 'inet-core';
import { environment } from '../environments/environment';
import {
    CloudTranslateModule, DialogModule, NotifyModule,
    WebsocketModule
} from 'inet-ui';
import { UnicornCommonModule } from './pages/layout/common/unicorn-common.module';
import { TopMenuComponent } from './pages/layout/menu/menu.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CustomTranslateLoader } from "./i18n/custom-translate-loader";
import { NavbarComponent } from "./pages/layout/navbar/navbar.component";
import { RouteReuseStrategy } from "@angular/router";
import { CustomCacheRouteReuseStrategy } from "./pages/common/custom-route.strategy";
import { HomeComponent } from './pages/home/home.component';
import { ComingMessageComponent } from './pages/system/coming.message';
import { CommonService } from './shared/services/common.service';
import { FocusService } from './shared/services/focus.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        AppComponent,
        TopMenuComponent,
        NavbarComponent,
        HomeComponent,
        ComingMessageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        // CalendarModule,
        // SocialAppModule, SocialModule,
        CloudTranslateModule.forRoot({
            loader: CustomTranslateLoader
        }),
        UnicornCommonModule,
        WebsocketModule,
        BsDatepickerModule.forRoot(),
        DialogModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        NotifyModule
    ],
    providers: [{
        provide: RouteReuseStrategy,
        useClass: CustomCacheRouteReuseStrategy,
    },
        CommonService,
        FocusService
    ],

    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
    constructor(
        private securityService: SecurityService,
        private coreService: CoreService) {
        this.coreService.setEnvironment(environment);
        // console.log('[unicorn][environment]', this.coreService.getEnvironment());
        if (this.coreService.getEnvironment().production) {
            setInterval(this.securityService.ping.bind(this), 2 * 60000);
        }

    }
}
