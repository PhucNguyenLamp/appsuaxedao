import { BaseEditableModel } from "app/shared/models/BaseEditableModel";
import { CourseExaminationItem } from "./CourseExaminationItem";

export class CourseExamination extends BaseEditableModel {
    courseId?: string;
    name?: string;
    sortIndex?: number;
    remark?: string;
    examinationItems?: CourseExaminationItem[];
    examinationItemsStr?: string;
}