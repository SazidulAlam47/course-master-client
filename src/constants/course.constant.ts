export const courseDefaultValues = {
    title: '',
    instructorId: '',
    description: '',
    price: '',
    categoryId: '',
};

export const categoryDefaultValues = {
    name: '',
};

export const createLessonDefaultValues = {
    title: '',
    type: '',
    duration: '',
    videoId: '',
    assignmentTask: '',
};

export const LessonTypes = ['video', 'assignment', 'quiz'];


export const PaymentStatus = ['paid', 'unpaid'] as const;