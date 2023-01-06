import { BaseEditableMdModel } from "app/shared/models/BaseEditableMdModel";
import { CourseStudySubject } from "./CourseStudySubject";

export class Course extends BaseEditableMdModel {
    shortName?: string;
    remark?: string;
    sortIndex?: number;
    programId?: string;
    programCode?: string;
    programName?: string;
    unitCount?: number;
    curriculum?: string;
    checkingRequired?: boolean;
    studySubjects?: CourseStudySubject[];
    minHeadCount?: number;
    maxHeadCount?: number;
}