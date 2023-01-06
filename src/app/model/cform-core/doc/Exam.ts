import { BaseEditableModel } from "app/shared/models/BaseEditableModel";
import { ClassInfo } from "./ClassInfo";

export class Exam extends BaseEditableModel {
    classInfo?: ClassInfo;
    classInfoStr?: string;
    examinationId?: string;
    examinationName?: string;
    examSubjectId?: string;
    examSubjectCode?: string;
    examSubjectName?: string;
    examSubjectShortName?: string;
    sortIndex?: number;
    examDate?: number;
    status?: string;
    remark?: string;
}