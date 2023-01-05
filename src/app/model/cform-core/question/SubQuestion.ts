import { SubQuestionOption } from "./SubQuestionOption";

export class SubQuestion {
    uuid?: string;
    description?: string;
    type?: string;  // E_MULTIPLE_CHOICE; E_CHECK_BOX
    scores?: number;
    prefix?: string;
    suffix?: string;
    options?: SubQuestionOption[];
    correctOptions?: string[];
    answer?: string;
    optionColumnSize?: number;
}