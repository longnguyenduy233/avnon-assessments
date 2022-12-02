export interface Question {
    questionType: string;
    questionTitle: string;
    answerOptions?: AnswerOption[];
    isAllowUserSpecifyTheirOwnAnswer?: boolean;
    isRequiredFields: boolean;
}
export interface AnswerOption {
    answerOption: string;
}


