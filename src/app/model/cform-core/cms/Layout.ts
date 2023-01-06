import { BaseEditableModel } from "app/shared/models/BaseEditableModel";

export class Layout extends BaseEditableModel {
    name?: string;
    type?: string;
    sortIndex?: number;
    inactive?: boolean;
    asDefault?: boolean; 
    description?: string;
    remark?: string;
    itemJSON?: string;
}