import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BaseComponent } from 'app/shared/components/BaseComponent';

@Component({
    selector: 'app-pdf-viewer',
    templateUrl: './pdf-viewer.component.html'
})
export class PDFViewerComponent extends BaseComponent implements OnInit {
    @Input() src: string;

    page: number = 0;
    totalPages: number = 0;
    zoom: number = 0.75;
    // disabled = false;
    max = 120;
    min = 20;
    showTicks = false;
    step = 5;
    thumbLabel = false;
    value = 75;

    modalRef: BsModalRef;
    config = {
        backdrop: false,
        ignoreBackdropClick: true,
        class: 'modal-xl'
    };

    constructor(
        protected commonService: CommonService
    ) {
        super(commonService);
    }

    ngOnInit() {
        // console.log("question", this.question);
        this.value = 75;
        this.zoom = this.value/100;
    }

    pageChanged(e: any) {
        this.page = e.pageNumber; // the page variable
    }

    afterLoadComplete(pdf): void {
        this.totalPages = pdf.numPages;
        this.page = 1;
    }

    inputUpdate(matSliderChange: any) {
        this.value = matSliderChange.value;
        this.zoom = this.value / 100;
    }
}



// import { Component, Input, OnInit } from '@angular/core';
// import { CommonService } from 'app/shared/services/common.service';
// import { BsModalRef } from 'ngx-bootstrap/modal';
// import { BaseComponent } from 'app/shared/components/BaseComponent';

// @Component({
//     selector: 'app-pdf-viewer',
//     templateUrl: './pdf-viewer.component.html'
// })
// export class PDFViewerComponent extends BaseComponent implements OnInit {
//     @Input() src: string;

//     page: number = 0;
//     totalPages: number = 0;

//     modalRef: BsModalRef;
//     config = {
//         backdrop: false,
//         ignoreBackdropClick: true,
//         class: 'modal-xl'
//     };

//     constructor(
//         protected commonService: CommonService
//     ) {
//         super(commonService);
//     }

//     ngOnInit() {
//         // console.log("question", this.question);

//     }

//     pageChanged(e: any) {
//         this.page = e.pageNumber; // the page variable
//     }

//     afterLoadComplete(pdf): void {
//         this.totalPages = pdf.numPages;
//     }
// }