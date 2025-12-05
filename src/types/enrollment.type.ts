import { PaymentStatus } from '@/constants/course.constant';
import { ICourse, ILesson } from './course.type';

export interface IInitPaymentResponse {
    paymentUrl: string;
}
export interface IUpdateEnrollmentPayload {
    completedLessonIndex: number;
}
export type TPaymentStatus = (typeof PaymentStatus)[number];

export interface IEnrollment {
    _id: string;
    studentId: string;
    courseId: ICourse;
    paymentStatus: TPaymentStatus;
    completedLessonIndex: number;
    progress: number;
    totalLessons: number;
    lessons: ILesson[];
    createdAt: string;
    updatedAt: string;
}
