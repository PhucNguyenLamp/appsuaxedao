import { BaseEditableModel } from "app/shared/models/BaseEditableModel";
import { ClassInfo } from "../class/ClassInfo";

export class Exam extends BaseEditableModel {
    classInfo?: ClassInfo;
    classInfoStr?: string;
    examinationId?: string;
    examinationName?: string;
    examinationType?: string;
    examSubjectId?: string;
    examSubjectCode?: string;
    examSubjectName?: string;
    examSubjectShortName?: string;
    sortIndex?: number;
    examDate?: number;
    status?: string;
    remark?: string;
    online?: boolean;
    duration?: number;
    autoReview?: boolean;
    forContact?: boolean;
    forLead?: boolean;
    random?: boolean;
    questionSource?: string;    // E_QUESTION_SET_TYPE; E_QUESTION_SET
    questionSetId?: string;
    questionSetCode?: string;
    questionSetName?: string;
    questionSetTypeId?: string;
    questionSetTypeCode?: string;
    questionSetTypeName?: string;
    selectionType?: string;
    instructions?: string;
    hasResult?: boolean;
}
