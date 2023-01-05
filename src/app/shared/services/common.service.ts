import { Injectable } from "@angular/core";
import { FocusService } from "./focus.service";
import { TranslateService } from "@ngx-translate/core";
// import { NotificationService } from "inet-core";
import { NotifyService } from "inet-ui";

@Injectable()
export class CommonService {
 constructor(
    public focusService: FocusService,
    public translate: TranslateService,
    public notificationService: NotifyService) {
      //   console.log("notificationServe", this.notificationService);
     }
}