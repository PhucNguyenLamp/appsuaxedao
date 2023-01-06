import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-media-picker',
    templateUrl: './media-picker.component.html'
})
export class MediaPickerComponent implements OnInit, OnChanges {
    @Input() mediaType: string;
    @Input() mode: string;
    @Input() src: string;
    @Output('valueChange') change = new EventEmitter<any>();

    mainForm: FormGroup = new FormGroup({
        'mediaSrc': new FormControl(null),
    });;

    constructor() { }

    ngOnInit() {
        if (this.mode == "E_ADD") {
            this.mainForm.get('mediaSrc').setValue("");
        } else {
            this.mainForm.get('mediaSrc').setValue(this.src);
        }
    }

    ngOnChanges() {
        // this.mainForm.controls['hour'].setValue(this.hour); 
    }

    startSave() {
        if (this.mainForm.get('mediaSrc').value =="") return;
        this.emit();
    }

    emit() {
        this.change.emit([
            this.mediaType,
            this.mainForm.controls['mediaSrc'].value
        ]);
    }
}