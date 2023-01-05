import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClientService } from 'inet-core';

@Injectable({
    providedIn: 'root'
})
export class CEAMDataService {
    public url = {
        // SETTINGS
        // Asset Group
        ceams_asset_group_create: iNet.getPUrl('ceams/asset-group/create'),
        ceams_asset_group_update: iNet.getPUrl('ceams/asset-group/update'),
        ceams_asset_group_list: iNet.getPUrl('ceams/asset-group/list'),

        // Other
        ceams_sys_help_about: iNet.getPUrl('ceams/sys/help/about/get'),
    };

    constructor(private http: HttpClientService,) { }

    // SETTINGS
    // Asset Group    
    assetGroupCreate(item: any): Observable<any> { return this.http.postJSON(this.url.ceams_asset_group_create, item); }
    assetGroupUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.ceams_asset_group_update, item); }
    assetGroupList(criteria: any): Observable<any> { return this.http.postJSON(this.url.ceams_asset_group_list, criteria); }    
}