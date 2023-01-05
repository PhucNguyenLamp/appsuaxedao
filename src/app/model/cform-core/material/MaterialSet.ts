import { BaseEditableModel } from "app/shared/models/BaseEditableModel";

export class MaterialSet extends BaseEditableModel {
    code?: string;
    name?: string;
    reference?: string;
    date?: number;
    status?: string;    // E_RELEASED, E_DRAFT, E_INACTIVE
    remark?: string;
    structureType?: string;
    rootMode?: string;
}