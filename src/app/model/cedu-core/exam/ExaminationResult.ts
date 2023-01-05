import { BaseEditableModel } from "app/shared/models/BaseEditableModel";

export class ExaminationResult extends BaseEditableModel {
    examinationId?: string;
    examinationName?: string;
    contactId?: string;
    contactCode?: string;
    contactName?: string;
    remark?: string;
    toContinue?: boolean = false;
    selectedForScholarship?: boolean = false;
    totalScores?: number;
    averageScores?: number;
    averageMaxScores?: number;

}
