import { BaseEditableModel } from "app/shared/models/BaseEditableModel";

export class ExamResult extends BaseEditableModel {
    examinationId?: string;
    examinationName?: string;
    examId?: string;
    examSubjectId?: string;
    examSubjectCode?: string;
    examSubjectName?: string;
    examSubjectShortName?: string;
    contactId?: string;
    contactCode?: string;
    contactName?: string;
    resultScores?: number;
    resultLevelCode?: string;
    resultLevelDescription?: string;
    resultLevelScores?: number;
    remark?: string;
}