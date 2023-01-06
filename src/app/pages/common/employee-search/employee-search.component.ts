import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CEDUDataService } from 'app/data/cedu.data.service';
// import { DataService } from 'app/data/data-old.service';
import { FormMode } from 'app/model/cedu-core/common/FormMode';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-employee-search',
    templateUrl: './employee-search.component.html'
})
export class EmployeeSearchComponent implements OnInit, AfterViewInit {
    @Input() uuid: string;
    @Output('valueChange') change = new EventEmitter<any>();
    @ViewChild("searchValue") searchValue: ElementRef;

    mainForm: FormGroup;
    items = [];
    itemCount = 0;
    pageNumber = 1;
    limit = 10;
    mode: FormMode;
    protected params: any = {}; // to reload data
    modalRef: BsModalRef;
    config = {
        backdrop: true,
        ignoreBackdropClick: true,
        class: 'modal-xl'
    };

    constructor(
        private ceduDataService: CEDUDataService,
        protected modalService: BsModalService,
        ) { }

    ngOnInit() {
        this.mainForm = new FormGroup({
            'searchValue': new FormControl(null),
        });

        this.params.limit = 10;
        this.params.activeStatus = "E_ACTIVE";
    }
    ngAfterViewInit(): void {
        this.searchValue.nativeElement.focus();
    }

    load(params){
        // var criteria: any = params;
        this.params = params;
        this.params.activeStatus = "E_ACTIVE";
        // console.log(this.params);
        this.ceduDataService.employeeList(this.params).subscribe(data => {       
            this.items = data['items'];
            const items = data['items'];
            this.itemCount = data['total'];
            // this.dataResource = new DataTableResource(items);
        });
    }

    onSelected(item: any) {
        this.change.emit([
            item,
            ""
        ]);
    }

    onSearch() {
        // let searchValue = this.mainForm.get('searchValue').value;
        this.params.searchValue = this.mainForm.get('searchValue').value;
        this.load(this.params);
    }

    onRowClick(params){
        this.change.emit([
            params.row.item
        ]);
    }
}