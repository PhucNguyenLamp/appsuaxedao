import { BaseEditableModel } from "app/shared/models/BaseEditableModel";
import { ResultItem } from "./ResultItem";

export class DocItem extends BaseEditableModel {
    docId?: string;
    batchId?: string;
    questionSetId?: string;
    questionSetCode?: string;
    questionSetName?: string;
    questionId?: string;
    questionTitle?: string;
    questionType?: string;
    takerId?: string;
    takerCode?: string;
    takerName?: string;
    classId?: string;
    classCode?: string;
    className?: string;
    // optionValues?: string[] = [];
    // mcValue?: string;
    // cbValues?: string;
    // otherText?: string;
    // text?: string;
    // mcgRows?: any[];
    // cbgRows?: any[];
    resultScores?: number;
    maxScores?: number;
    completed?: boolean;
    completion?: string;
    correctness?: string;
    resultItems?: ResultItem[] = [];
    itemJSON?: string;
}