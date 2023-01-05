import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseListComponent } from 'app/shared/components/BaseListComponent';
import { CommonService } from 'app/shared/services/common.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActiveStatuses } from 'app/data/global/ActiveStatuses';
import { FormMode } from 'app/model/cedu-core/common/FormMode';
import { AssetGroup } from 'app/model/ceams-core/settings/AssetGroup';
import { CEAMDataService } from 'app/data/services/ceams.data.service';

@Component({
    selector: 'app-asset-group-list',
    templateUrl: './asset-group-list.component.html'
})
export class AssetGroupListComponent extends BaseListComponent<AssetGroup> implements OnInit {
    public mainForm: FormGroup;
    @ViewChild("searchValue") erSearchValue: ElementRef;
    activeStatuses: any[] = ActiveStatuses;
    mode: FormMode = FormMode.E_EDIT;
    
    constructor(
        commonService: CommonService,
        protected ceamsDataService: CEAMDataService,
        protected modalService: BsModalService,
        protected router: Router,
        protected route: ActivatedRoute
    ) {
        super(commonService, modalService, router);
    }

    ngOnInit() {
        this.config.class="taf-modal-medium";

        this.mainForm = new FormGroup({
            'activeStatus': new FormControl(null),
            'searchValue': new FormControl(null)
        });
        
        this.mainForm.get('activeStatus').setValue(this.activeStatuses[1]);
        this.mainForm.get('searchValue').setValue("");
    }
    public onAfterViewInit(): void {
        this.erSearchValue.nativeElement.focus();
    }

    protected callDeleteItem(id: string, callbackFn: Function): void {
    }

    protected callCheckItemInUse(id: string, callbackFn: Function): void {
        // this.mdService.checkSourceInUse(id, null).subscribe(inUse => callbackFn(inUse));
    }

    protected callLoadList(callbackFn: Function, errorFn: Function): void {
        this.params.activeStatus = this.mainForm.get('activeStatus').value;
        let searchValue = this.mainForm.get('searchValue').value;
        searchValue = searchValue.replace(/[*\\]/g, '');
        this.params.searchValue = searchValue; 
        this.mainForm.get('searchValue').setValue(searchValue);

        // console.log(this.params);

        this.ceamsDataService.assetGroupList(this.params).subscribe(data => callbackFn(data), error => errorFn(error));
    }

    onSearch() {
        this.dataTableRef.firstPage();
    }

}