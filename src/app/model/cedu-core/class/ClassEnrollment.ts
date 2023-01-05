import { BaseEditableModel } from "app/shared/models/BaseEditableModel";
import { Remark } from "../common/Remark";
import { ClassInfo } from "./ClassInfo";

export class ClassEnrollment extends BaseEditableModel {
    contactId?: string;
    contactCode?: string;
    contactName?: string;
    classInfo?: ClassInfo = new ClassInfo();
    classInfoStr?: string;
    enrollmentDate?: number;
    status?: string;
    reservedDateFrom?: number;
    reservedDateTo?: number;
    resignedDate?: number;
    remark?: string;
    hasDebt?: boolean;
    debtAmount?: number;
    debtDueDate?: number;
    studyMaterialStatus?: string;
    fromClassId?: string;
    fromClassCode?: string;
    fromClassName?:string;
    toClassId?: string;
    toClassCode?: string;
    toClassName?: string;
    firstClass?: boolean = false;
    movedUpFromClassEnrollmentId?: string;
    movedUp?: boolean = false;
    resignRemark?: Remark;
}