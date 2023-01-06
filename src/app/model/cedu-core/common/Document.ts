import { BaseEditableModel } from "app/shared/models/BaseEditableModel";

export class Document extends BaseEditableModel {
    ownerType?: string;
    ownerId?: string;
    type?: string;
    description?: string;
    url?: string;
    fileId?: string;
    filename?: string;
    fileSize?: string;
    mimetype?: string;
    contentUuid?: String;
}