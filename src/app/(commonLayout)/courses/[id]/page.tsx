import CourseDetailsHero from '@/components/CourseDetailsPage/CourseDetailsHero/CourseDetailsHero';
import CourseDetailsMain from '@/components/CourseDetailsPage/CourseDetailsMain/CourseDetailsMain';

const CourseDetailsPage = () => {
    const course = {
        id: 'asdfasdfasdf',
        title: 'Complete Web Development Bootcamp',
        description:
            'This comprehensive bootcamp takes you from complete beginner to professional web developer. You will learn front-end technologies like HTML5, CSS3, JavaScript ES6+, and React.js, as well as back-end technologies including Node.js, Express.js, and MongoDB. By the end of this course, you will be able to build full-stack web applications from scratch.',
        price: 1200,
        thumbnail:
            'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-education-youtube-thumbnail-design-template-81860c5e2c826288e86665f75958fc82_screen.jpg',
        instructor: {
            name: 'Ghulam Sumdany Don',
            avatar: '/instructor-avatar.jpg',
            title: 'Chief Inspirational Officer at Don Sumdany Facilitation',
            bio: 'Managing Director at Ikigai HR Services; Managing Director at LoveGen Bangladesh',
        },
        whatYouWillLearn: [
            'Build professional websites from scratch',
            'Master HTML5, CSS3, and JavaScript',
            'Learn React.js for modern web development',
            'Understand Node.js and backend development',
            'Work with databases like MongoDB',
            'Deploy applications to production',
        ],
        syllabus: [
            {
                title: 'Introduction to Web Development',
                duration: '45 min',
            },
            {
                title: 'HTML5 Fundamentals',
                duration: '1.5 hours',
            },
            {
                title: 'CSS3 Styling & Layouts',
                duration: '2 hours',
            },
            {
                title: 'JavaScript Essentials',
                duration: '3 hours',
            },
            {
                title: 'React.js Framework',
                duration: '4 hours',
            },
            {
                title: 'Node.js & Express.js',
                duration: '3.5 hours',
            },
            {
                title: 'MongoDB & Database Design',
                duration: '2 hours',
            },
            {
                title: 'Final Project & Deployment',
                duration: '2 hours',
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <CourseDetailsHero course={course} />
            <CourseDetailsMain course={course} />
        </div>
    );
};

export default CourseDetailsPage;
