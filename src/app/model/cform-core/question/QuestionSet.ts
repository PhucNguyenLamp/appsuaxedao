import { BaseEditableModel } from "app/shared/models/BaseEditableModel";

export class QuestionSet extends BaseEditableModel {
    code?: string;
    name?: string;
    reference?: string;
    date?: number;
    status?: string;    // E_RELEASED, E_DRAFT, E_INACTIVE
    hasScores?: boolean;
    duration?: number;
    hasSections?: boolean;
    totalScores?: number;
    questionSetTypeId?: string;
    questionSetTypeCode?: string;
    questionSetTypeName?: string;
    defaultQuestionDisplayMode?: string;    // E_ALL, E_SINGLE
    optionNumberingType?: string;
    playMedia?: boolean;
    mediaType?: string;
    mediaSrc?: string;
    showMedia?: boolean;
    remark?: string;
    hasInstruction?: boolean;
    materialItemId?: string;
    matereialItemName?: string;
    random?: boolean;
    questionStartingNumber?: number;
    forPublic?: boolean;
    questions?: any[];
    fontFamily?: string;
}