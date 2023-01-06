import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonConstants } from 'app/shared/CommonConstants';

@Component({
    selector: 'app-text-editor',
    templateUrl: './text-editor.component.html'
})
export class TextEditorComponent implements OnInit, AfterViewInit {
    @Input() htmlText: string;
    @Input() mode: String;
    @Output('valueChange') change = new EventEmitter<any>();

    @ViewChild("refHtmlText") refHtmlText: ElementRef;

    editorConfig: any = CommonConstants.editorDefaultConfig;

    mainForm: FormGroup = new FormGroup({
        'htmlText': new FormControl(null, [Validators.required]),
    });;

    constructor() { }

    ngOnInit() {
        if (this.mode == "E_ADD") {
            this.mainForm.get('htmlText').setValue("");
        } else {
            this.mainForm.get('htmlText').setValue(this.htmlText);
        }
    }
    ngAfterViewInit(): void {
        if (this.refHtmlText.nativeElement)
            this.refHtmlText.nativeElement.focus();
    }

    onSave() {
        console.log(this.mainForm.get('htmlText').value );
        this.change.emit([
            this.mainForm.controls['htmlText'].value
        ]);
        // if (this.mainForm.get('htmlText').value == "") return;
    }
    startSave() {
        if (this.mainForm.get('htmlText').value == "") return;
        // this.emit();
    }
}