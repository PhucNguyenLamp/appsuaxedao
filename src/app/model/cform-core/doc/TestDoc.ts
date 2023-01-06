import { BaseEditableModel } from "app/shared/models/BaseEditableModel";

export class TestDoc extends BaseEditableModel {
    examinationId?: string;
    examinationType?: string;
    examId?: string;
    examDescription?: string;
    examSubjectId?: string;
    examSubjectCode?: string;
    examSubjectName?: string;
    questionSetTypeId?: string;
    questionSetTypeCode?: string;
    questionSetTypeName?: string;
    questionSetId?: string;
    questionSetCode?: string;
    questionSetName?: string;
    questionId?: string;
    questionTitle?: string;
    status?: string;        // E_RELEASED, E_ON_HOLD, E_CANCELLED    
    remark?: string;
    takerType?: string;
    takerId?: string;
    takerCode?: string;
    takerName?: string;
    takerUsername?: string;
    submitStatus?: string;
    submitStartAt?: number;
    submitEndAt?: number;
    submitSeconds?: number;
    reviewStatus?: string;  // E_PENDING, E_COMPLETED
    autoReview?: boolean;
    maxScores?: number;
    resultScores?: number;
    itemJSON?: string;
}