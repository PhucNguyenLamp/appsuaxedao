import { BaseEditableModel } from "app/shared/models/BaseEditableModel";

export class TeachingUnitSummaryDoc extends BaseEditableModel {
    dateFrom?: number;
    dateTo?: number;
    year?: number;
    month?: number;
    period?: string;
    description?: string;
    lastRunAt?: number;
    generated?: boolean = false;
}