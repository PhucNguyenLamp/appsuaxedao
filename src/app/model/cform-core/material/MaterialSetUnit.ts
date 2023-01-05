import { BaseEditableModel } from "app/shared/models/BaseEditableModel";

export class MaterialSetUnit extends BaseEditableModel {
    name?: string;
    reference?: string;
    materialSetId?: string;
    materialSetCode?: string;
    materialSetName?: string;
    sortIndex?: number;
    inactive?: boolean;
    remark?: string;
    parentId?: string;
    noContent?: boolean;
    noSub?: boolean;
}

