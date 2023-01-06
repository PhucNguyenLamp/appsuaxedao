import { BaseEditableModel } from "app/shared/models/BaseEditableModel";
import { ContentInfo } from "./ContentInfo";

export class SubCategory extends BaseEditableModel {
    layoutId?: string;
    categoryId?: string;
    title?: string;
    sortIndex?: number;
    inactive?: boolean;
    description?: string;
    remark?: string;
    contentInfo?: ContentInfo
    itemJSON?: string;
}