import { CommonService } from "../services/common.service";
import { NotificationType } from "app/shared/models/NotificationType";
import { Utils } from "../Utils";

export abstract class BaseComponent {
    imgFolder: string = iNet.imgFolder;
    currentLanguage: string;
    isMobile: boolean;
    
    constructor(protected commonService: CommonService) {
        this.isMobile = Utils.getGlobalVariable("isMobile");
    }

    public showMessage(messageKey: string, title: string, type: NotificationType = NotificationType.SUCCESS): void {
        var messageConfig: any =  {
            timeOut: 5000,
            positionClass: 'toast-bottom-right'
          };
        this.commonService.translate.get([messageKey, title]).subscribe(data => {
            this.commonService.notificationService.showMessage(data[messageKey], NotificationType[type].toString().toLowerCase(), data[title], messageConfig);
        });
    }

    public getGlobalVariable(key: string) {
        return Utils.getGlobalVariable(key);
    }

}