import { BaseEditableModel } from "app/shared/models/BaseEditableModel";
import { ClassInfo } from "./ClassInfo";

export class ClassUnitLecturerAttendance extends BaseEditableModel {
    employeeId?: string;
    employeeCode?: string;
    employeeName?: string;
    classInfo?: ClassInfo;
    classInfoStr?: string;
    classUnitId?: string;
    date?: number;
    hourFrom?: string;
    minuteFrom?: string;
    hourTo?: string;
    minuteTo?: string;
    studySubjectId?: string;
    studySubjectCode?: string;
    studySubjectName?: string;
    unitCount?: number;
    minuteCount?: number;
    lateMinutes?: number;
    earlyMinutes?: number;
    remark?: string;
}