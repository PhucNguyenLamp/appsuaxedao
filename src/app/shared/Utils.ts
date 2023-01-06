// import { CellGroups } from "app/data/global/CellGroups";
import { Question } from "app/model/cform-core/question/Question";
import { interval, Observable } from "rxjs";
import { switchMap, take } from "rxjs/operators";
import { CommonConstants } from "./CommonConstants";

export class Utils {

    public static subscribeRetry<T>(observable: Observable<T>,
        callbackfn: (value: T) => boolean,
        intervalPeriod = CommonConstants.SHORT_TIMEOUT,
        retry = CommonConstants.Retry
    ): Promise<T> {
        var observableRetry = interval(intervalPeriod).pipe(
            switchMap(() => observable),
            take(retry)
        );
        var subscription = observableRetry.subscribe(value => {
            if (callbackfn(value)) {
                subscription.unsubscribe();
            }
        });
        return observableRetry.toPromise();
    }

    public static removeThousandSeparator(value: string) {
        var separator = parseInt("1000").toLocaleString().substring(1, 2);
        return value.replace(new RegExp(separator, "g"), '');
    }
    public static getNumberWithThousandSeparator(value: string) {
        return parseInt(value).toLocaleString();
    }

    public static getDayFromLong(dateLong: number): string {
        var dateD: Date = new Date(dateLong);
        const yearStr = dateD.getFullYear().toString();
        const month = dateD.getMonth() + 1;
        const monthStr = (month < 10 ? "0" : "") + month;
        const date = dateD.getDate();
        const dayStr = (date < 10 ? "0" : "") + date;

        return yearStr + "-" + monthStr + "-" + dayStr;
    }

    public static clearGlobalVariables() {
        var localVariables: any = {};
        localStorage.setItem(CommonConstants.APP_NAME + "_" + iNet.organId + "_" + iNet.username, JSON.stringify(localVariables));
    }

    public static setGlobalVariable(key: string, value: any) {
        var globalVariables: any = {};
        globalVariables = JSON.parse(localStorage.getItem(CommonConstants.APP_NAME + "_" + iNet.organId + "_" + iNet.username));
        if (!globalVariables) globalVariables = {};
        globalVariables[key] = value;

        localStorage.setItem(CommonConstants.APP_NAME + "_" + iNet.organId + "_" + iNet.username, JSON.stringify(globalVariables));
    }

    public static getGlobalVariable(key: string) {
        var globalVariables: any = {};
        globalVariables = JSON.parse(localStorage.getItem(CommonConstants.APP_NAME + "_" + iNet.organId + "_" + iNet.username));
        if (!globalVariables) globalVariables = {};

        return globalVariables[key];
    }

    public static getTime(date: Date): string {
        const hours = date.getHours();
        const minutes = date.getMinutes();

        const hoursStr = (hours < 10 ? "0" : "") + hours;
        const minutesStr = (minutes < 10 ? "0" : "") + minutes;

        return hoursStr + minutesStr;
    }

    public static getMinutes(startDate: number, startTime: string, endDate: number, endTime: string): number {
        let daysInMinutes = (endDate - startDate) / (1000 * 60);
        let startHours = Number(startTime.substr(0, 2));
        let startMinutes = Number(startTime.substr(2, 2));
        let endHours = Number(endTime.substr(0, 2));
        let endMinutes = Number(endTime.substr(2, 2));
        return daysInMinutes + (endHours * 60 + endMinutes) - (startHours * 60 + startMinutes) + 1;
    }

    public static checkMobileDevice(): boolean {
        var check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor);
        Utils.setGlobalVariable("isMobile", check);
        return check;
    };

    public static copyObject(source: any): any {
        return JSON.parse(JSON.stringify(source));
    }

    public static copyMessage(val: string) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }

    // public static uploadFile(file: any) {
    //     return "https://calista-dev.inetcloud.vn/hrm/vinaco/cedu/sys/cdn/file-download.cpx?docID=6233f1b7fe793f6977dc9e9b";
    // }

    public static getTimeStr(inputSeconds: number): any {
        let seconds = inputSeconds % 60;
        let minutes = Math.floor((inputSeconds % (60 * 60)) / 60);
        let hours = Math.floor((inputSeconds % (60 * 60 * 60)) / 3600);

        var secondsS: string, minutesS: string;
        if (minutes < 10) {
            minutesS = "0" + minutes.toString();
        } else {
            minutesS = minutes.toString();
        }
        if (seconds < 10) {
            secondsS = "0" + seconds.toString();
        } else {
            secondsS = seconds.toString();
        }

        return hours.toString() + ":" + minutesS + ":" + secondsS;
    }

    public static getOptionNumbering(optionNumberingType: string, index: number): string {
        var array123: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        var arrayABC: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

        let final = "";

        if (optionNumberingType == "" || optionNumberingType == null) return "";
        if (index > 9) return "X ";
        if (optionNumberingType == "E_123") {
            return "(" + array123[index] + ") ";
        }
        if (optionNumberingType == "E_ABC") {
            return "(" + arrayABC[index] + ") ";
        }

        return "";
    }
    public static getOptionNumbering1(optionNumberingType: string, index: number): string {
        var array123: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        var arrayABC: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

        if (optionNumberingType == "" || optionNumberingType == null) return "";
        if (index > 9) return "X";
        if (optionNumberingType == "E_123") {
            return array123[index];
        }
        if (optionNumberingType == "E_ABC") {
            return arrayABC[index];
        }

        return "";
    }

    public static mixList(sourceList: string[]) {
        var mixedList: string[] = [];
        var temp: string[] = sourceList;
        while (temp.length > 0) {
            let min = Math.ceil(0);
            let max = Math.floor(temp.length - 1);
            let random = Math.floor(Math.random() * (max - min + 1) + min);
            mixedList.push(temp[random]);
            temp.splice(random, 1);
        }
        return mixedList;
    }

    public static getBorderTop(question: Question, r: number, c: number): string {
        if (r == 0) {
            return "solid 2px black";
        }
        return "";
    }
    public static getBorderLeft(question: Question, r: number, c: number): string {
        if (c == 0) {
            return "solid 2px black";
        }
        return "";
    }
    public static getBorderRight(question: Question, r: number, c: number): string {
        if (c == question.gridRows[r].cells.length - 1) {
            return "solid 2px black";
        }
        if (question.gridRows[r].cells[c].group != question.gridRows[r].cells[c + 1].group) {
            return "solid 2px black";
        }
        return "";
    }
    public static getBorderBottom(question: Question, r: number, c: number): string {
        if (r == question.gridRows.length - 1) {
            return "solid 2px black";
        }
        if (question.gridRows[r].cells[c].group != question.gridRows[r + 1].cells[c].group) {
            return "solid 2px black";
        }
        return "";
    }
}