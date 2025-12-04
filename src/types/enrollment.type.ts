import { PaymentStatus } from '@/constants/course.constant';
import { ICourse } from './course.type';

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
    createdAt: string;
    updatedAt: string;
}
