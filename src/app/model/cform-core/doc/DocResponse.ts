import { BaseEditableModel } from "app/shared/models/BaseEditableModel";

export class DocResponse extends BaseEditableModel {
    docId?: string;
    formId?: string;
    responseStartDate?: number;
    responseEndDate?: number;
    responseStartTime?: string;
    responseEndTime?: string;
    responseMinutes?: number;
    answersStr?: string;
    maxScores?: number;
    resultScores?: number;
}