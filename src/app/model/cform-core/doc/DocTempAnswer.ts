import { BaseEditableModel } from "app/shared/models/BaseEditableModel";
import { ResultItem } from "./ResultItem";

export class DocTempAnswer extends BaseEditableModel {
    docId?: string;
    questionSetId?: string;
    questionId?: string;
    questionType?: string;
    questionNo?: number = 0;
    resultItems?: ResultItem[] = [];
    // mcValue?: string = "";
    // cbValues?: boolean[] = [];      
    completed?: boolean = false;
    completion?: string;        // E_FULL, E_NONE, E_PARTIAL
    correctness?: string;       // E_FULL, E_NONE, E_PARTIAL
    resultScores?: number = 0;
    maxScores?: number = 0;
}