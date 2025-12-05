export interface IAssignment {
    _id: string;
    studentId: string;
    courseId: string;
    lessonId: string;
    enrollmentId: string;
    submissionText: string;
    feedback?: string;
    createdAt: string;
    updatedAt: string;
}

export type TCreateAssignmentPayload = Pick<
    IAssignment,
    'lessonId' | 'submissionText'
>;

export type TUpdateAssignmentPayload = Partial<Pick<IAssignment, 'feedback'>>;
