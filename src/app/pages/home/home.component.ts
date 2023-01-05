import { Component, OnInit } from '@angular/core';
import { CoreService } from 'inet-core';
import { CloudTranslateService } from 'inet-ui';
import { TranslateService } from '@ngx-translate/core';
import { Utils } from 'app/shared/Utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    protected coreService: CoreService,
    protected cloudTranslateService: CloudTranslateService,
    protected translate: TranslateService
  ) {}

  ngOnInit() {
    Utils.setGlobalVariable("module", "main");
  }
}