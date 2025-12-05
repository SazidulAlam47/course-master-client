export interface IQuizAttempt {
    studentId: string;
    courseId: string;
    lessonId: string;
    enrollmentId: string;
    submittedAnswers: number[];
    score: number;
    totalQuestions: number;
}
