import { BaseEditableModel } from "app/shared/models/BaseEditableModel";
import { Content } from "./Content";

export class MaterialItem extends BaseEditableModel {
    name?: string;
    reference?: string;
    materialSetId?: string;
    materialSetUnitId?: string;
    materialSetSubUnitId?: string;
    questionSetId?: string;
    questionSetCode?: string;
    questionSetName?: string;
    itemType?: string;
    contentType?: string;
    contents?: Content[] = [];
    sortIndex?: number;
    inactive?: boolean;
    remark?: string;
    itemJSON?: string;
}