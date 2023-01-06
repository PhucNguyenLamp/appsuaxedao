export class QuestionOption {
    uuid?: string;
    description?: string;
    sortIndex?: number;
    mediaType?: string;
    mediaSrc?: string;
    scores?: number;
    correct?: boolean = false;
    other?: boolean = false;
}