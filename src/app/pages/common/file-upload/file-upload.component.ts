import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';

import { FileUploader, ResponseUploadFile } from 'inet-ui';
import { BaseComponent } from 'app/shared/components/BaseComponent';
import { File } from 'app/model/cedu-core/common/File';
import { CEDUDataService } from 'app/data/cedu.data.service';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html'
})
export class FileUploadComponent extends BaseComponent implements OnInit {
    @Input() ownerType: string;
    @Input() ownerId: string;
    @Input() createDoc: boolean;
    @Input() multipleFiles: boolean;
    @Output() valueChange = new EventEmitter();

    fileMaxSize: number = 10*1024*1024;
    uploader: FileUploader;
    autoUpload: boolean = false;
    uploading: boolean = false;

    constructor(
        // private systemService: SystemService,
        private ceduDataService: CEDUDataService,
        protected commonService: CommonService
    ) {
        super(commonService);
    }

    ngOnInit(): void {
        this.uploader = new FileUploader({
            url: this.ceduDataService.url.cedu_sys_cdn_upload,
            method: 'POST',
            itemAlias: 'FileUpload',
            autoUpload: this.autoUpload
        });

        this.uploader.response.subscribe(res => {
            const response = JSON.parse(res) as ResponseUploadFile;

            // const files: Array<Attachment> = [];
            if (response.elements) {
                for (const file of response.elements) {
                    var attachment: File = {};
                    attachment.contentUuid = file.uuid;
                    attachment.name = file.name;
                    attachment.mimetype = file.mimetype;
                    attachment.size = file.filesize;
                    attachment.organId = iNet.organId;
                    attachment.ownerType = this.ownerType;
                    attachment.ownerId = this.ownerId;
                    if (this.createDoc != null)
                        attachment.createDoc = this.createDoc;
                    
                    this.ceduDataService.fileCreate(attachment).subscribe(data => {
                        if (this.uploader.getNotUploadedItems().length == 0) {
                            this.valueChange.emit(null);
                        }
                    });
                }
            }
        });
        
    }

    onUpload() {
        this.uploading = true;
        for (let i=this.uploader.queue.length;i>0;i--) {
            if (this.uploader.queue[i-1].file.size > this.fileMaxSize) {
                // console.log(this.uploader.queue[i-1].file.size)
                this.uploader.queue.splice(i-1,1)
            }
        }

        this.uploader.uploadAll();
    }
    onClearItem(i: number) {
        this.uploader.queue.splice(i,1);
    }
    onClearAll() {
        this.uploader.clearQueue();
    }
}