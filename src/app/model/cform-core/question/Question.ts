import { BaseEditableModel } from "app/shared/models/BaseEditableModel";
import { BlankField } from "./BlankField";
import { DisplayOptions } from "./DisplayOptions";
import { GridRow } from "./GridRow";
import { QuestionOption } from "./QuestionOption";
import { SubQuestion } from "./SubQuestion";

export class Question extends BaseEditableModel {
    infoOnly?: boolean;
    questionSetId?: string;
    questionSetCode?: string;
    questionSetName?: string;
    questionSetReference?: string;
    hasScores?: boolean;
    scores?: number;
    questionType?: string;
    title?: string;
    content?: string;
    description?: string;
    sortIndex?: number;
    sectionCode?: string;
    // instruction?: string;           
    optionContentType?: string;     // E_TEXT, E_HTML
    mappingType?:  string;          // E_NONE, E_MAPPING
    dataType?: string;              // E_TEXT, E_NUMBER
    options?: QuestionOption[];     // For multiple choice, check boxes
    subQuestions?: SubQuestion[];
    subQuestionContentType?: string;    // E_TEXT, E_HTML
    answer?: string;              // For E_UNSCRAMBLE
    answerScrambled?: string;     // For E_UNSCRAMBLE
    workingText?: string;
    blankFields?: BlankField[];
    blankFieldExtras?: string[];
    blankFieldScores?: number;
    // gridRows?: GridRow[];
    gridRows?: GridRow[];
    displayOptions?: DisplayOptions;
    duration?: number;      // minutes
    answerSolution?: string;
    itemJSON?: string;
}