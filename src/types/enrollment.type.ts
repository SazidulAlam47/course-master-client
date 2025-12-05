import { PaymentStatus } from '@/constants/course.constant';
import { ICourse, ILesson } from './course.type';
import { TUser } from './user.type';

export interface IInitPaymentResponse {
    paymentUrl: string;
}

export type TPaymentStatus = (typeof PaymentStatus)[number];

export interface IEnrollment {
    _id: string;
    studentId: TUser;
    courseId: ICourse;
    paymentStatus: TPaymentStatus;
    completedLessonOrder: number;
    progress: number;
    totalLessons: number;
    lessons: ILesson[];
    createdAt: string;
    updatedAt: string;
}
