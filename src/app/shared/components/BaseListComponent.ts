import { CommonService } from "../services/common.service";
import { BaseComponent } from "./BaseComponent";
import { ViewChild, TemplateRef, Directive } from '@angular/core';
import { DataTableResource, ConfirmDialogComponent, DataTableRow, DataTable, DialogAction } from 'inet-ui';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormMode } from "app/model/cedu-core/common/FormMode";
import { NotificationType } from 'app/shared/models/NotificationType';
import { Router } from "@angular/router";
import { BaseEditableMdModel } from "../models/BaseEditableMdModel";
import { BaseEditableModel } from "../models/BaseEditableModel";

@Directive()
export abstract class BaseListComponent<TModel extends BaseEditableModel> extends BaseComponent {
    // @ViewChild(ConfirmDialogComponent) confirmDialog: ConfirmDialogComponent;
    @ViewChild(DataTable) dataTableRef;

    dataResource = new DataTableResource([]);
    items = [];
    itemCount = 0;
    pageNumber = 1;
    selectedItem: TModel;
    mode: FormMode;
    protected params: any; // to reload data

    modalRef: BsModalRef;
    config = {
        backdrop: true,
        ignoreBackdropClick: true,
        class: 'modal-xl',
        keyboard: true
    };
    constructor(protected commonService: CommonService,
        protected modalService: BsModalService,
        protected router: Router) {
        super(commonService);
    }

    // virtual method need to override
    protected callDeleteItem(id: string, callbackFn: Function): void {

    }

    // virtual method need to override
    protected callCheckItemInUse(id: string, callbackFn: Function): void {
        //this.mdService.checklLaborContractTypeInUse(id, null).subscribe(inUse => callbackFn(inUse));
    }
    // virtual method need to override
    protected callLoadList(callbackFn: Function, errorFn: Function): void {

    }
    private confirmDelete() {
        // const selectedRows: Array<DataTableRow> = this.confirmDialog.getData() || [];
        // const ids: Array<string> = [];
        // selectedRows.forEach(row => {
        //     ids.push(row.item['uuid']);
        // });

        // if (ids.length > 0) {
        //     this.callCheckItemInUse(ids[0], (res: { inUse: boolean }) => {
        //         if (!res.inUse) {
        //             this.callDeleteItem(ids[0], () => { this.load(this.params); });
        //         } else {
        //             this.showMessage("ERROR_ITEM_IN_USE", "Error", NotificationType.ERROR);
        //         }
        //         this.confirmDialog.hide();
        //     });

        // }
    }

    public get isEditMode(): boolean {
        return this.mode === FormMode.E_EDIT;
    }

    public load(params): void {
        this.params = params;

        this.callLoadList(data => {
            const items = data['items'];
            this.itemCount = data['total'];
            this.dataResource = new DataTableResource(items);

            if (items) {
                this.itemCount = data['total'] || items.length;
            } else {
                this.itemCount = 0;
            }
            // this.itemCount = data['total'] || items.length;
            this.items = items;
        },
            error => {
                console.error(error);
                this.router.navigate(['home']);
                // this.errors = error
            }
        );
        //}.bind(this));
    }

    onAdd(template: TemplateRef<any>) {
        this.selectedItem = null;
        this.mode = FormMode.E_ADD;
        this.modalRef = this.modalService.show(template, this.config);
    }

    onChanged($event) {
        this.modalRef.hide();
        this.load(this.params);
    }

    onEdit(template: TemplateRef<any>, item: BaseEditableModel) {
        this.selectedItem = <TModel>item;
        this.mode = FormMode.E_EDIT;
        this.modalRef = this.modalService.show(template, this.config);
    }
    deleteItem(item: BaseEditableMdModel, event: Event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        const rows = this.findRowsById(item.uuid);
    }

    private findRowsById(uuid: string): Array<DataTableRow> {
        return this.dataTableRef.rows.toArray().filter(row => row.item.uuid === uuid);
    }
}