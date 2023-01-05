import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseAddDialogComponent } from "app/shared/components/BaseAddDialogComponent"
import { CommonService } from 'app/shared/services/common.service';
import { BaseEditableMdModel } from 'app/shared/models/BaseEditableMdModel';
import { FormMode } from 'app/model/cedu-core/common/FormMode';
import { AssetGroup } from 'app/model/ceams-core/settings/AssetGroup';
import { CEAMDataService } from 'app/data/services/ceams.data.service';

@Component({
    selector: 'app-asset-group-add',
    templateUrl: './asset-group-add.component.html'
})
export class AssetGroupAddComponent extends BaseAddDialogComponent<AssetGroup> {
    @ViewChild("code") codeField: ElementRef;
    @ViewChild("name") nameField: ElementRef;
    numericNumberReg: string = '^-?[0-9]\\d*(\\.\\d{1,6})?$'

    constructor(
        element: ElementRef,
        protected ceamsDataService: CEAMDataService,
        protected commonService: CommonService
    ) {
        super(element, commonService);
    }
    protected createMainFormGroup(): FormGroup {
        return new FormGroup({
            'code': new FormControl(null, [Validators.required]),
            'name': new FormControl(null, [Validators.required]),
            'sortIndex': new FormControl(null, [Validators.required]),
            'inactive': new FormControl(null, [Validators.required]),
            'shortName': new FormControl(null),
            'remark': new FormControl(null),
        });
    }
    public onAfterViewInit(): void {
        if (this.mode == FormMode.E_ADD) {
            this.codeField.nativeElement.focus();
        } else {
            this.nameField.nativeElement.focus();
        }
    }
    patchInitializedMainForm() {
        if (this.mode == FormMode.E_ADD) {
            this.mainForm.get("inactive").setValue(false);
        }
    }
    protected callSearch(input: {code:string}, callbackFn: Function): void{
        this.ceamsDataService.assetGroupList(input).subscribe(data => callbackFn(data));
    }
    protected callAddItem(requestItem: BaseEditableMdModel, callbackFn: Function): void{
        
        this.ceamsDataService.assetGroupCreate(requestItem).subscribe(data => callbackFn(data));
    }
    protected callUpdateItem(requestItem: BaseEditableMdModel, callbackFn: Function): void{
        this.ceamsDataService.assetGroupUpdate(requestItem).subscribe(data => callbackFn(data));
    }
}