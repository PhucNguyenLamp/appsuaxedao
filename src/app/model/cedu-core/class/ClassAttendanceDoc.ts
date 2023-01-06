import { BaseEditableModel } from "app/shared/models/BaseEditableModel";
import { ClassInfo } from "./ClassInfo";

export class ClassAttendanceDoc extends BaseEditableModel {
    classInfo?: ClassInfo;
    date?: number;
    remark?: string;
    sectionId?: string;
    sectionCode?: string;
    sectionName?: string;
    classAttendanceRecordsStr?: string;
    classInfoStr?: string;
    checked?: boolean;
    checkedRemark?: string;
    checkedBy?: string;
    checkedByEmployeeId?: string;
    checkedByEmployeeCode?: string;
    checkedByEmployeeName?: string;
    checkedAt?: number;
}