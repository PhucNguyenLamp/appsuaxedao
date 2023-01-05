import { BaseEditableModel } from "app/shared/models/BaseEditableModel";

export class EmployeePermissionProfile extends BaseEditableModel {
    employeeId?: string;
    employeeCode?: string;
    employeeName?: string;
    username?: string;
    asSuperAdmin?: boolean = false;
    outletAssignmentType?: string; // E_ALL; E_INCLUDING
    outlets?: any[] = [];
    roles?: any[] = [];
    outletsStr?: string;
    rolesStr?: string;
}