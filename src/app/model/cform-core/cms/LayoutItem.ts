import { BaseEditableModel } from "app/shared/models/BaseEditableModel";
import { ContentInfo } from "./ContentInfo";
import { QuestionInfo } from "./QuestionInfo";

export class LayoutItem extends BaseEditableModel {
    layoutId?: string;
    title?: string;
    sortIndex?: number;
    inactive?: boolean;
    description?: string;
    remark?: string;
    contentInfo?: ContentInfo;
    questionInfo?: QuestionInfo;
    parentId?: string;
    sortingMode?: string;
    itemJSON?: string;
}