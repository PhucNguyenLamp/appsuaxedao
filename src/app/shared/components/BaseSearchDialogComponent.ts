import { CommonService } from "../services/common.service";
import { BaseComponent } from "./BaseComponent";
import { ViewChild, TemplateRef, Directive, EventEmitter, Output } from '@angular/core';
import { DataTableResource, ConfirmDialogComponent, DataTableRow, DataTable, DialogAction } from 'inet-ui';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from "@angular/router";
import { BaseEditableModel } from "../models/BaseEditableModel";
import { FormGroup } from "@angular/forms";

@Directive()
export abstract class BaseSearchComponent<TModel extends BaseEditableModel> extends BaseComponent {
    @Output('valueChange') change = new EventEmitter<any>();
    @ViewChild(DataTable) dataTableRef;

    dataResource = new DataTableResource([]);
    items = [];
    itemCount = 0;
    pageNumber = 1;
    limit = 10;
    selectedItem: TModel;
    protected params: any; // to reload data

    public mainForm: FormGroup;

    constructor(protected commonService: CommonService) {
        super(commonService);
    }

    // virtual method need to override
    protected callLoadList(callbackFn: Function, errorFn: Function): void {

    }

    public load(params): void {
        this.params = params;

        this.callLoadList(data => {
            // console.log("Search Data", data);
            const items = data['items'];
            this.itemCount = data['total'];
            this.dataResource = new DataTableResource(items);

            if (items) {
                this.itemCount = data['total'] || items.length;
            } else {
                this.itemCount = 0;
            }
            this.items = items;
        },
            error => {
                console.error(error);
                // this.router.navigate(['home']);
                // this.errors = error
            }
        );
        //}.bind(this));
    }

}