import { LucideIcon } from 'lucide-react';

export type TSidebarItem = {
    title: string;
    url: string;
    icon: LucideIcon;
};

export type TBatch = {
    id: string;
    name: string;
    startDate: string;
    endDate?: string;
    maxStudents?: number;
    enrolledCount?: number;
};

export type TAdminCourse = {
    id: string;
    title: string;
    description: string;
    thumbnail?: string;
    price: number;
    instructor: string;
    duration: string;
    batches: TBatch[];
    isPublished: boolean;
    createdAt: string;
    updatedAt: string;
};

export type TEnrollment = {
    id: string;
    studentId: string;
    studentName: string;
    studentEmail: string;
    studentImage?: string;
    courseId: string;
    courseName: string;
    batchId: string;
    batchName: string;
    enrolledAt: string;
    progress: number;
    status: 'active' | 'completed';
};

export type TSubmittedAssignment = {
    id: string;
    studentId: string;
    studentName: string;
    studentEmail: string;
    studentImage?: string;
    courseId: string;
    courseName: string;
    lessonTitle: string;
    submissionText: string;
    submittedAt: string;
    status: 'pending' | 'approved' | 'rejected';
    feedback?: string;
};
