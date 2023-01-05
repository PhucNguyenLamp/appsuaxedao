import { BaseEditableModel } from "app/shared/models/BaseEditableModel";
import { StringMappingType } from "typescript";

export class CourseMaterialSet extends BaseEditableModel {
    ownerType?: string;
    ownerId?: string;
    userType?: string;
    sortIndex?: string;
}