import { BaseEditableMdModel } from "app/shared/models/BaseEditableMdModel";
import { ClassInfo } from "./ClassInfo";

export class SchoolClass extends BaseEditableMdModel {
    shortName?: string;
    status?: string;
    outletId?: string;
    outletCode?: string;
    outletName?: string;
    programId?: string;
    programCode?: string;
    programName?: string;
    courseId?: string;
    courseCode?: string;
    courseName?: string;
    courseShortName?: string;
    checkingRequired?: boolean;
    noLecturerTimeSheet?: boolean;
    sessionCount?: number;
    accumulatedSessionCount?: number;
    weekCount?: number;
    curriculum?: string;
    plannedStartDate?: number;
    plannedEndDate?: number;
    actualStartDate?: number;
    actualEndDate?: number;
    schedulePatternId?: string;
    schedulePatternCode?: string;
    schedulePatternName?: string;
    minHeadCount?: number;
    maxHeadCount?: number;
    facilityId?: string;
    facilityCode?: string;
    facilityName?: string;
    facilityNo?: string;
    defaultFee?: number;
    remark?: string;
    classUnitsGenerated?: boolean;
    updateRelatedObjects?: boolean;
    previousClassInfo?: ClassInfo;
    previousClassInfoStr?: string;
    nextClassInfo?: ClassInfo;
    nextClassInfoStr?: string;
    previousClasses?: ClassInfo[] = [];
    previousClassesStr?: string;
    remark2?: string;
    enrollmentCount?: string;
}

  