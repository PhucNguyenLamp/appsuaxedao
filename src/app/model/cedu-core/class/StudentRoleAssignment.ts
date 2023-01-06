import { BaseEditableModel } from "app/shared/models/BaseEditableModel";
import { ClassInfo } from "./ClassInfo";

export class StudentRoleAssignment extends BaseEditableModel {
    contactId?: string;
    contactCode?: string;
    contactName?: string;
    studentRoleId?: string;
    studentRoleCode?: string;
    studentRoleName?: string;
    classInfo?: ClassInfo;
    classInfoStr?: string;
    validDateFrom?: number;
    validDateTo?: number;
    inactive?: boolean;
    remark?: string;
}