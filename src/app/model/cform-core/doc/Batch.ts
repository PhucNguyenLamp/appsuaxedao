import { BaseEditableModel } from "app/shared/models/BaseEditableModel";
import { Doc } from "./Doc";
import { TakerOptions } from "./TakerOptions";

export class Batch extends Doc {
    type?: string;    // E_EXERCISE
    takerType?: string;
    reference?: string;
    description?: string;
    remark?: string;
    resDeadlineType: string;
    resDateFrom?: number;
    resTimeFrom?: string;
    resDateTo?: number;
    resTimeTo?: string;
    status?: string;      // E_IN_PROCESS, E_CLOSED, E_PLANNING
    questionSetId?: string;
    questionSetCode?: string;
    questionSetName?: string;
    classInfo?: any;
    examId?: string;
    examInfo?: any;
    issuerId?: string;
    issuerCode?: string;
    issuerName?: string;
    takerOptions?: TakerOptions;
    docsJSON?: string;
    itemJSON?: string;
    batchJSON?: string;
    takers?: any[] = [];
    takersStr?: string;
}