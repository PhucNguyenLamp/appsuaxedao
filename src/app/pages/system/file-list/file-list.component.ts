import { Component, OnInit, OnDestroy, ElementRef, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseListComponent } from 'app/shared/components/BaseListComponent';
import { CommonService } from 'app/shared/services/common.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormMode } from 'app/model/cedu-core/common/FormMode';
import { HttpClientService } from 'inet-core';
// import { SystemService } from '../system.service';
import { Utils } from 'app/shared/Utils';
import { File } from 'app/model/cedu-core/common/File';
import { CEDUDataService } from 'app/data/cedu.data.service';

@Component({
    selector: 'app-file-list',
    templateUrl: './file-list.component.html'
})
export class FileListComponent extends BaseListComponent<File> implements OnInit, AfterViewInit {
    public mainForm: FormGroup;
    @ViewChild("searchValue") elSearchValue: ElementRef;
    mode: FormMode = FormMode.E_EDIT;
    private cdnUrl = {
        upload: iNet.getPUrl('cedu/sys/cdn/file-upload'),
        download: iNet.getPUrl('cedu/sys/cdn/file-download')
    };
    contentUuid: string;
    mimetype: string;
    
    constructor(
        commonService: CommonService,
        protected ceduDataService: CEDUDataService,
        protected modalService: BsModalService,
        protected router: Router,
        private http: HttpClientService,
        protected route: ActivatedRoute
    ) {
        super(commonService, modalService, router);
    }

    ngOnInit() {
        this.config.class="modal-xl";

        this.mainForm = new FormGroup({
            // 'activeStatus': new FormControl(null),
            'searchValue': new FormControl(null)
        });
        
        // this.mainForm.get('searchValue').setValue("");
    }

    ngAfterViewInit() {
        // this.elSearchValue.nativeElement.focus();
        // this.mainForm.get('searchValue').setValue("");
    }

    protected callDeleteItem(id: string, callbackFn: Function): void {
        // this.settingsService.outletDelete(id).subscribe(res => callbackFn(res));
    }

    protected callCheckItemInUse(id: string, callbackFn: Function): void {
        // this.mdService.checkSourceInUse(id, null).subscribe(inUse => callbackFn(inUse));
    }

    protected callLoadList(callbackFn: Function, errorFn: Function): void {
        // this.params.activeStatus = this.mainForm.get('activeStatus').value;
        let searchValue = this.mainForm.get('searchValue').value;
        if(searchValue) {
            searchValue = searchValue.replace(/[*\\]/g, '');
            this.params.searchValue = searchValue; 
        }
        // searchValue = searchValue.replace(/[*\\]/g, '');
        // this.params.searchValue = searchValue; 
        // this.mainForm.get('searchValue').setValue(searchValue);
        this.ceduDataService.fileList(this.params).subscribe(data => callbackFn(data), error => errorFn(error));
    }

    onSearch() {
        this.dataTableRef.firstPage();
    }

    download(att: any) {
        // console.log(this.cdnUrl.download);
        this.http.downloadFile(this.cdnUrl.download, {docID: att.contentUuid});
    }

    onDownload(item: any) {
        var att: any = {};
        att.contentUuid = item.contentUuid;
        this.download(att);
    }

    onGetLink(template: TemplateRef<any>, item: any) {
        this.contentUuid = item.contentUuid;
        this.mimetype = item.mimetype;
        this.modalRef = this.modalService.show(template, this.config);
    }

    onConvert(template: TemplateRef<any>) {
        // this.contentUuid = item.contentUuid;
        // this.mimetype = item.mimetype;
        this.modalRef = this.modalService.show(template, this.config);
    }

    

    onChanged($event) {
        this.modalRef.hide();
        this.onSearch();
    }

    copyLink(uuid: string) {
        Utils.copyMessage(this.cdnUrl.download + "?docID=" + uuid);
    }
}