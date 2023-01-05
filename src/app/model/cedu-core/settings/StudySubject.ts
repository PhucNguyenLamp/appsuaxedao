import { BaseEditableMdModel } from "app/shared/models/BaseEditableMdModel";

export class StudySubject extends BaseEditableMdModel {
    sortIndex?: number;
    remark?: string;
    shortName?: string;
    special?: boolean;
    updateRelatedObjects?: boolean;
}