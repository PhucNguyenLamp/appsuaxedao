import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CEDUDataService } from 'app/data/cedu.data.service';
// import { DataService } from 'app/data/data-old.service';
import { FormMode } from 'app/model/cedu-core/common/FormMode';
import { Employee } from 'app/model/cedu-core/employee/Employee';
import { BaseComponent } from 'app/shared/components/BaseComponent';
import { CommonService } from 'app/shared/services/common.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-cedu-employee-view',
    templateUrl: './cedu-employee-view.component.html'
})
export class CEDUEmployeeViewComponent extends BaseComponent implements OnInit, AfterViewInit {
    @ViewChild("searchValue") searchValue: ElementRef;
    selectedEmployee: Employee;
    employees: Employee[] = [];

    mainForm: FormGroup;
    // items = [];
    // itemCount = 0;
    // pageNumber = 1;
    // limit = 10;
    // mode: FormMode;
    protected params: any = {}; // to reload data

    modalRef: BsModalRef;
    config = {
        backdrop: true,
        ignoreBackdropClick: true,
        class: 'modal-xl'
    };

    constructor(
        protected commonService: CommonService,
        private ceduDataService: CEDUDataService,
        protected modalService: BsModalService,
        protected route: ActivatedRoute,
        ) { super(commonService); }

    ngOnInit() {
        this.mainForm = new FormGroup({
            'searchValue': new FormControl(null),
        });

        let inputEmployeeId = this.route.snapshot.paramMap.get('id');
        // console.log("selected id", this.selectedEmployeeId);

        this.params.limit = 20;
        this.params.activeStatus = "E_ACTIVE";
        
        if (inputEmployeeId) {
            this.mainForm.get('searchValue').setValue(inputEmployeeId);
            this.loadEmployees();
        }
    }
    ngAfterViewInit(): void {
        this.searchValue.nativeElement.focus();
    }

    loadEmployees() {
        this.ceduDataService.employeeList(this.params).subscribe(data => {
            console.log("emp list", data);
            this.employees = data.items;
        });

    }

    onSearch() {
        if (this.mainForm.get('searchValue').value) {
            this.params.searchValue = this.mainForm.get('searchValue').value.replace(/[*\\]/g, '');
        } else {
            this.params.searchValue = "";
        }
         // this.params.searchValue = searchValue; 
        this.loadEmployees();
    }

    getCardClass(id: string) {
        if (this.selectedEmployee && this.selectedEmployee.uuid == id) {
            return "taf-card taf-card-selected";
        }
        return "taf-card";
    }



}