export class QuestionInfo {
    type?: string;   // E_MATERIAL, E_QUESTION
    questionSource?: string;
    questionSetId?: string;
    questionSetCode?: string;
    questionSetName?: string;
    questionSetTypeId?: string;
    questionSetTypeCode?: string;
    questionSetTypeName?: string;
    selectionType?: string;
    instructions?: string;
    duration?: number;
    random?: boolean;
    autoReview?: boolean;  
}
