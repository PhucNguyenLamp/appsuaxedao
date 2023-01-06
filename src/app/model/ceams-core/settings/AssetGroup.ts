import { BaseEditableMdModel } from "app/shared/models/BaseEditableMdModel";
import { ParentInfo } from "../common/ParentInfo";

export class AssetGroup extends BaseEditableMdModel {
    orgId?: string;
    sortIndex?: number;
    remark?: string;
    shortName?: string;
    deleted?: boolean;
    parentId?: string;
    colorCode?: string;
    parentInfo?: ParentInfo;
}


    // public ParentInfo parentInfo;