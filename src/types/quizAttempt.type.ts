export interface IQuizAttempt {
    _id: string;
    studentId: string;
    courseId: string;
    lessonId: string;
    enrollmentId: string;
    submittedAnswers: number[];
    score: number;
    totalQuestions: number;
    createdAt: string;
    updatedAt: string;
}
