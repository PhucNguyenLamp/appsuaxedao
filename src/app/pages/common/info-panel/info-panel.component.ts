import { Component, OnInit, Input, Output, EventEmitter, OnChanges, TemplateRef, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { Info } from 'app/model/common/Info';
import { BaseComponent } from 'app/shared/components/BaseComponent';
import { CommonService } from 'app/shared/services/common.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-info-panel',
    templateUrl: './info-panel.component.html'
})
export class InfoPanelComponent extends BaseComponent implements OnInit, OnChanges {
    // @Input() infos: Info[];
    @Input() mode: string;
    // @Output('valueChange') change = new EventEmitter<any>();

    @ViewChild("editorDialog") editorDialog: TemplateRef<any>;
    @ViewChild("mediaPickDialog") mediaPickDialog: TemplateRef<any>;
    selectedHtmlText: string;
    selectedSrc: string;
    selectedInfoType: string;
    selectedIndex: number;

    tempInfoType: string;
    childMode: string;

    modalRef: BsModalRef;
    config = {
        backdrop: false,
        ignoreBackdropClick: true,
        class: 'modal-xl'
    };

    mainForm: FormGroup = new FormGroup({
        'mediaSrc': new FormControl(null),
    });;

    constructor(
        element: ElementRef,
        // private questionService: QuestionService,
        private modalService: BsModalService,
        protected commonService: CommonService
    ) { super(commonService); }

    ngOnInit() {
        // console.log("infos", this.infos);
        this.mainForm.get('mediaSrc').setValue("");
        // this.emit();


    }

    ngOnChanges() {
        // this.mainForm.controls['hour'].setValue(this.hour); 
    }


    // startSave() {
    //     if (this.mainForm.get('mediaSrc').value =="") return;
    //     this.emit();
    // }

    // emit() {
    //     this.change.emit([
    //         // this.mediaType,
    //         this.mainForm.controls['mediaSrc'].value
    //     ]);
    // }

    remove(i: number) {
        // console.log("remove: ", i);
        // this.infos.splice(i, 1);
    }

    onPick(infoType: string, template: TemplateRef<any>) {
        // this.tempInfoType = infoType;
        this.childMode = "E_ADD";
        this.selectedInfoType = infoType;
        this.config.class = "modal-xl";
        this.modalRef = this.modalService.show(template, this.config);
    }

    // onInfoPicked(event) {
    //     this.modalRef.hide();
    //     if (this.childMode == "E_ADD") {
    //         this.infos.push({
    //             type: event[0],
    //             src: event[1]
    //         })
    //     } else {
    //         this.infos[this.selectedIndex].src = event[1];
    //     }    
        
    // }

    onOpenEditor(template: TemplateRef<any>) {
        this.childMode = "E_ADD";
        this.modalRef = this.modalService.show(template, this.config);
    }
    onEdited(event) {
        this.modalRef.hide();

        // if (this.childMode == "E_ADD") {
        //     this.infos.push({
        //         type: "E_HTML_TEXT",
        //         src: event[0]
        //     })
        // } else {
        //     this.infos[this.selectedIndex].src = event[0];
        // }
    }

    onEdit(i: number) {
        // this.selectedIndex = i;
        // if (this.infos[i].type == "E_HTML_TEXT") {
        //     this.childMode = "E_EDIT";
        //     this.modalRef = this.modalService.show(this.editorDialog, this.config);
        //     this.selectedHtmlText = this.infos[i].src;
        // } else {
        //     this.childMode = "E_EDIT";
        //     this.selectedInfoType = this.infos[i].type;
        //     this.modalRef = this.modalService.show(this.mediaPickDialog, this.config);
        //     this.selectedSrc = this.infos[i].src;
        // }

    }

    drop(event: CdkDragDrop<string[]>) {
        // moveItemInArray(this.infos, event.previousIndex, event.currentIndex);
    }
}