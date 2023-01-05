import { BaseEditableModel } from "app/shared/models/BaseEditableModel";

export class ClassMaterialSet extends BaseEditableModel {
    classId?: string;
    courseMaterialSetId?: string;
    materialSetId?: string;
    materialSetCode?: string;
    materialSetName?: string;
    sortIndex?: number;
    units?: string[] = [];
    itemJSON?: string;
}