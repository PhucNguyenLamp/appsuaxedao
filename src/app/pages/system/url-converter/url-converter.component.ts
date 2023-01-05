import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';
import { BaseComponent } from 'app/shared/components/BaseComponent';
import { Utils } from 'app/shared/Utils';

@Component({
    selector: 'app-url-converter',
    templateUrl: './url-converter.component.html'
})
export class UrlConverterComponent extends BaseComponent implements OnInit {
    url: string = "";
    convertedUrl: string;
    convertedUrl1: string;

    constructor(
        commonService: CommonService
    ) {
        super(commonService);
    }

    ngOnInit() {

    }

    convert() {
        this.convertedUrl = "";
        this.convertedUrl = this.url;

        let prefix = "https://drive.google.com/file/d/";
        let oLength = this.url.length;
        let pLength = prefix.length;
        let tempUrl = this.url.substring(pLength,);
        let sIndex = tempUrl.indexOf("/");
        let id = tempUrl.substring(0, sIndex);

        // this.convertedUrl = "https://drive.google.com/uc?id=" + tempUrl.substring(0, sIndex) + "&confirm=9iBg";
        this.convertedUrl = "https://drive.google.com/uc?id=" + id + "&confirm=9iBg";
        this.convertedUrl1 = "https://drive.google.com/uc?export=download&id=" + id + "&confirm=9iBg";
    }

    copyUrl(url) {
        Utils.copyMessage(url);
    }
    
}
