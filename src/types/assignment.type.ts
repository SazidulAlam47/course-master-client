import { ICourse, ILesson } from './course.type';
import { IEnrollment } from './enrollment.type';
import { TUser } from './user.type';

export interface IAssignment {
    _id: string;
    studentId: TUser;
    courseId: ICourse;
    lessonId: ILesson;
    enrollmentId: IEnrollment;
    submissionText: string;
    feedback?: string;
    createdAt: string;
    updatedAt: string;
}

export type TCreateAssignmentPayload = {
    lessonId: string;
    submissionText: string;
};

export type TUpdateAssignmentPayload = Partial<Pick<IAssignment, 'feedback'>>;
