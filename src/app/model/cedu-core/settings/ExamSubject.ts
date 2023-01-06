import { BaseEditableMdModel } from "app/shared/models/BaseEditableMdModel";
import { ExamSubjectLevel } from "./ExamSubjectLevel";

export class ExamSubject extends BaseEditableMdModel {
    sortIndex?: number;
    remark?: string;
    evaluationType?: string;
    maxScores?: number;
    decimals?: number;
    notForTotal?: boolean = false;
    levels?: ExamSubjectLevel[];
    levelsStr?: string;
    shortName?: string;
    updateRelatedObjects?: boolean;
    
}