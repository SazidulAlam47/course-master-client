export type TCourse = {
    id: string;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    instructor: {
        name: string;
        avatar: string;
        title: string;
        bio: string;
    };
    whatYouWillLearn: string[];
    syllabus: {
        title: string;
        duration: string;
    }[];
};

export type LessonType = 'video' | 'assignment' | 'quiz';

export type QuizQuestion = {
    question: string;
    options: string[];
    correctAnswer: number;
};

export type Lesson = {
    title: string;
    duration: string;
    type: LessonType;
    videoId?: string;
    task?: string;
    questions?: QuizQuestion[];
};

export interface IInstructor {
    _id: string;
    name: string;
    avatar?: string;
    title: string;
    bio: string;
    createdAt: string;
    updatedAt: string;
}
