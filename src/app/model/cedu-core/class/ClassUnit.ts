import { BaseEditableModel } from "app/shared/models/BaseEditableModel";
import { ClassInfo } from "./ClassInfo";
import { ClassUnitAssignment } from "./ClassUnitAssignment";

export class ClassUnit extends BaseEditableModel {
    classInfo?: ClassInfo = new ClassInfo();
    classInfoStr?: string;
    date?: number;
    dateFrom?: number;
    dateTo?: number;
    hourFrom?: string;
    minuteFrom?: string;
    hourTo?: string;
    minuteTo?: string;
    status?: string;
    remark?: string;
    checkAttendance?: boolean;
    doubleUnit?: boolean = false;
    hourUnit?: boolean = false;
    durationType?: string;
    duration?: number;
    examUnit?: boolean;
    studySubjectId?: string;
    studySubjectCode?: string;
    studySubjectName?: string;
    studySubjectShortName?: string;
    studySubjectSpecial?: boolean;
    facilityId?: string;
    facilityCode?: string;
    facilityName?: string;
    facilityNo?: string;
    assignments?: ClassUnitAssignment[];
    assignmentsStr?: string;
    toCopy?: boolean = false;
    replaced?: boolean = false;
    originEmployeeId?: string;
    originEmployeeCode?: string;
    originEmployeeName?: string;
    replacementRemark?: string;
    hasLecturerAttendance?: boolean;
    hasResult?: boolean;
    resultContent?: string;
    hasAttendance?: boolean;
    addMember?: boolean = false;
    checked?: boolean = false;
    checkedBy?: string;
    checkedAt?: number;
    checkedRemark?: string;
    merged?: boolean;
}