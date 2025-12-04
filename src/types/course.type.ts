export type TLessonType = 'video' | 'assignment' | 'quiz';

export interface IQuizQuestion {
    question: string;
    options: string[];
    correctAnswer: number;
}

export interface ILesson {
    _id: string;
    courseId: string;
    title: string;
    type: TLessonType;
    duration: string;
    order: number;
    videoId?: string;
    assignmentTask?: string;
    quizQuestions?: IQuizQuestion[];
    createdAt: string;
    updatedAt: string;
}

export interface IInstructor {
    _id: string;
    name: string;
    avatar?: string;
    title: string;
    bio: string;
    createdAt: string;
    updatedAt: string;
}

export interface ICourse {
    _id: string;
    title: string;
    description: string;
    instructorId: IInstructor;
    thumbnail: string;
    price: number;
    categoryId: ICategory;
    isPublished: boolean;
    lessons: ILesson[];
    createdAt: string;
    updatedAt: string;
}

export interface IBatch {
    _id: string;
    courseId: string;
    number: number;
    startDate: Date;
    endDate: Date;
    createdAt: string;
    updatedAt: string;
}

export interface ICategory {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}
