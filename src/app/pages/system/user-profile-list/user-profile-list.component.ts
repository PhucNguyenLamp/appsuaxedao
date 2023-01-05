import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseListComponent } from 'app/shared/components/BaseListComponent';
import { CommonService } from 'app/shared/services/common.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormStatuses } from 'app/data/global/FormStatuses';
import { Question } from 'app/model/cform-core/question/Question';
// import { Form } from 'app/model/form/Form';
// import { FormService } from 'app/pages/form/form.service';

@Component({
    selector: 'app-user-profile-list',
    templateUrl: './user-profile-list.component.html'
})
export class UserPermissionProfileListComponent extends BaseListComponent<Question> implements OnInit, AfterViewInit {
    public mainForm: FormGroup;
    @ViewChild("searchValue") erSearchValue: ElementRef;

    statuses: any[] = FormStatuses;
    
    constructor(
        commonService: CommonService,
        // protected formService: FormService,
        protected modalService: BsModalService,
        protected router: Router,
        protected route: ActivatedRoute
    ) {
        super(commonService, modalService, router);
    }

    ngOnInit() {
        this.config.class="modal-medium";

        this.mainForm = new FormGroup({
            'statuses': new FormControl(null),
            'searchValue': new FormControl(null)
        });
        // this.erSearchValue.nativeElement.focus();
        this.mainForm.get('statuses').setValue(["E_DRAFT", "E_RELEASED", "E_ON_HOLD"]);
        this.mainForm.get('searchValue').setValue("");
    }

    ngAfterViewInit() {
        // this.erSearchValue.nativeElement.focus();
    }

    onAfterViewInit() {
        

        // console.log(this.dataTableRef);
        // console.log("DataTableRef", this.dataTableRef);

    }

    protected callDeleteItem(id: string, callbackFn: Function): void {
        // this.settingsService.outletDelete(id).subscribe(res => callbackFn(res));
    }

    protected callCheckItemInUse(id: string, callbackFn: Function): void {
        // this.mdService.checkSourceInUse(id, null).subscribe(inUse => callbackFn(inUse));
    }

    protected callLoadList(callbackFn: Function, errorFn: Function): void {
        let searchValue = this.mainForm.get('searchValue').value;
        searchValue = searchValue.replace(/[*\\]/g, '');
        this.params.searchValue = searchValue; 
        this.params.statuses = this.mainForm.get('statuses').value;
 
        // this.formService.formList(this.params).subscribe(data => callbackFn(data), error => errorFn(error));
    }

    onSearch() {
        this.dataTableRef.firstPage();
    }

    onChangeStatus() {
        this.onSearch();
    }
    onDocCountRefresh(formId: string){
        // this.formService.formDocCountRefresh(formId).subscribe(data => {
        //     this.onSearch();
        // })
    }
}