import { BaseEditableModel } from "app/shared/models/BaseEditableModel";

export class MaterialSetSubUnit extends BaseEditableModel {
    name?: string;
    reference?: string;
    materialSetId?: string;
    materialSetUnitId?: string;
    sortIndex?: number;
    inactive?: boolean;
    remark?: string;
}