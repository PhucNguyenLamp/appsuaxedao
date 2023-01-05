import { BaseEditableModel } from "app/shared/models/BaseEditableModel";
import { ClassInfo } from "./ClassInfo";

export class ClassAttendanceRecord extends BaseEditableModel {
    classUnitId?: string;
    contactId?: string;
    contactCode?: string;
    contactName?: string;
    classInfo?: ClassInfo;
    date?: number;
    dateFrom?: number;
    dateTo?: number;
    hourFrom?: string;
    hourTo?: string;
    minuteFrom?: string;
    minuteTo?: string;
    status?: string;
    remark?: string;
    aaTypeId?: string;
    aaTypeCode?: string;
    aaTypeName?: string;
    aaTypeSymbol?: string;
    aaQuantity?: number;
    classInfoStr?: string;
    checked?: boolean;
    checkedRemark?: string;
    checkedBy?: string;
    checkedByEmployeeId?: string;
    checkedByEmployeeCode?: string;
    checkedByEmployeeName?: string;
    checkedAt?: number;
}

/* 

private ClassInfo classInfo;
    private String classUnitId;
    private String contactId;
    private String contactCode;
    private String contactName;
    private Long date;
    private Long dateFrom;
    private Long dateTo;
    private String hourFrom;
    private String hourTo;
    private String minuteFrom;
    private String minuteTo;
    private String remark;
    private String aaTypeId;
    private String aaTypeCode;
    private String aaTypeName;
    private String aaTypeSymbol;

*/