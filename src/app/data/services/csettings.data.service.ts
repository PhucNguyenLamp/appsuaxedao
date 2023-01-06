import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClientService } from 'inet-core';

@Injectable({
    providedIn: 'root'
})
export class CSettingsDataService {
    public url = {
        // STUDENT
        // Student & Contacts
        cedu_contact_create: iNet.getPUrl('cedu/contact/create'),
        cedu_contact_update: iNet.getPUrl('cedu/contact/update'),
        cedu_contact_list: iNet.getPUrl('cedu/contact/list'),
        cedu_contact_duplicate_check: iNet.getPUrl('cedu/contact-duplicate/check'),
        cedu_contact_name_update: iNet.getPUrl('cedu/contact-name/update'),
 
        // Firm Logo
        // calista_firm_logo_view: iNet.getPUrl("plugin/firmlogo/view"),
        // calista_user_role_list: iNet.getPUrl("system/userrole/list"),
        // calista_organization_list: iNet.getPUrl("plugin/organization/list"),
        // calista_permision_group_list: iNet.getPUrl("cloud/subfirmrole/group"),
        // calista_permision_group_load: iNet.getPUrl("cloud/subfirmrole/groupload"),
        // calista_app: iNet.getPUrl("cloud/subfirmrole/variable"),
        // Other
        cedu_sys_help_about: iNet.getPUrl('cedu/sys/help/about/get'),
        cedu_remark_update: iNet.getPUrl("cedu/remark/update"),
    };

    constructor(private http: HttpClientService,) { }
    
    // remarkUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_remark_update, item); }
    // getFirmLogo(): Observable<any> { return this.http.postJSON(this.url.calista_firm_logo_view); }
    // sysHelpAboutGet(): Observable<any> { return this.http.postJSON(this.url.cedu_sys_help_about); }
}