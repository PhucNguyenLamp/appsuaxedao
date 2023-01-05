import { BaseEditableModel } from "app/shared/models/BaseEditableModel";

export class QuestionSetType extends BaseEditableModel {
    code?: string;
    name?: string;
    sortIndex?: number;
    reference?: string;
    inactive?: boolean;
    remark?: string;
    instructions?: string;
}