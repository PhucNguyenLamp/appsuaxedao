import { BaseEditableModel } from "app/shared/models/BaseEditableModel";

export class StudySubjectAssignment extends BaseEditableModel {
    employeeId?: string;
    employeeCode?: string;
    employeeName?: string;
    studySubjectId?: string;
    studySubjectCode?: string;
    studySubjectName?: string;
}