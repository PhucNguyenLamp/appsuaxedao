import { BlankFieldAnswer } from "./BlankFieldAnswer";

export class BlankField {
    uuid?: string;
    scores?: number;
    type?: string;
    prefix?: string;
    suffix?: string;
    answer?: string;
    size?: number;
    answers?: BlankFieldAnswer[];
    group?: string;
}