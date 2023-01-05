import { BaseEditableMdModel } from "app/shared/models/BaseEditableMdModel";
import { SchedulePatternDetail } from "./SchedulePatternDetail";

export class SchedulePattern extends BaseEditableMdModel {
    sortIndex?: number;
    remark?: string;
    doubleUnit?: boolean = false;
    hourUnit?: boolean = false;
    durationType?: string;      // E_45, E_60, E_OTHER
    unitDuration?: number;
    breakDuration?: number = 0;
    details?: SchedulePatternDetail[];
    detailsStr?: string;
}