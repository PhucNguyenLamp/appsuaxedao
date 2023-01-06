import { BaseEditableModel } from "app/shared/models/BaseEditableModel";

export class DocAnswer extends BaseEditableModel {
    docId?: string;
    formId?: string;
    formItemId?: string;
    formItemQuestionType?: string;
    takerId?: string;
    takerCode?: string;
    takerName?: string;
    classId?: string;
    classCode?: string;
    className?: string;
    mcValue?: string;
    cbValues?: string;
    otherText?: string;
    text?: string;
    mcgRows?: any[];
    cbgRows?: any[];
    resultScores?: number;
    maxScores?: number;
}