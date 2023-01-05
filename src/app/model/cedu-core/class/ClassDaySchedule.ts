import { BaseEditableModel } from "app/shared/models/BaseEditableModel";
import { ClassInfo } from "./ClassInfo";
import { ClassUnit } from "./ClassUnit";

export class ClassDaySchedule extends BaseEditableModel {
    classInfo?: ClassInfo = new ClassInfo();
    date?: number;
    hourFrom?: string;
    minuteFrom?: string;
    hourTo?: string;
    minuteTo?: string;
    classUnits?: ClassUnit[];
    classStartDate?: number;
    classEndDate?: number;
    noLecturerTimeSheet?: boolean;
    facilityId?: string;
    facilityCode?: string;
    facilityName?: string;
    facilityNo?: string;
}