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
