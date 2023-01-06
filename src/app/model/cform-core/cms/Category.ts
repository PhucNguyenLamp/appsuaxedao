import { BaseEditableModel } from "app/shared/models/BaseEditableModel";

export class Category extends BaseEditableModel {
    layoutId?: string;
    title?: string;
    sortIndex?: number;
    inactive?: boolean;
    description?: string;
    remark?: string;
    itemJSON?: string;
}