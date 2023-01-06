import { BaseEditableMdModel } from "app/shared/models/BaseEditableMdModel";

export class Guardianship extends BaseEditableMdModel {
    relationshipType?: string;
    contactId?: string;
    contactCode?: string;
    contactName?: string;
    guardianId?: string;
    guardianCode?: string;
    guardianName?: string;
    primary?: boolean;
    inactive?: boolean;
    phoneNo?: string;
    email?: string;
    username?: string;
    occupation?: string;
    address?: string;
    remark?: string;
}
