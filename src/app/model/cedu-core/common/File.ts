import { BaseEditableModel } from "app/shared/models/BaseEditableModel";

export class File extends BaseEditableModel {
    ownerType?: string;
    ownerId?: string;
    name?: string;
    size?: number;
    mimetype?: string;
    contentUuid?: String;
    createDoc?: boolean;
}