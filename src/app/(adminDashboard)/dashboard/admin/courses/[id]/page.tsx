'use client';

import { BookOpen } from 'lucide-react';
import LessonCard from './components/LessonCard';
import CreateLesson from './components/CreateLesson';
import Loader from '@/components/shared/Loader';
import EmptyPlaceholder from '@/components/shared/EmptyPlaceholder';
import UpdateCourse from '../components/UpdateCourse';
import { useParams } from 'next/navigation';
import { useGetCourseByIdQuery } from '@/redux/api/courseApi';
import PublishUnpublishCourse from '../components/PublishUnpublishCourse';

const CourseLessonsPage = () => {
    const params = useParams();
    const courseId = params.id as string;

    const { data: course, isLoading } = useGetCourseByIdQuery(courseId);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="space-y-6">
            <div className="flex gap-3 items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Lessons for {course?.title || 'Course'}
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Manage lessons for this course
                    </p>
                </div>
                <div className="flex gap-2">
                    {course && (
                        <>
                            <PublishUnpublishCourse course={course} />
                            <UpdateCourse course={course} />
                        </>
                    )}
                    <CreateLesson courseId={courseId} />
                </div>
            </div>

            <div className="grid gap-4">
                {course?.lessons?.length ? (
                    course.lessons.map((lesson) => (
                        <LessonCard key={lesson._id} lesson={lesson} />
                    ))
                ) : (
                    <EmptyPlaceholder
                        Icon={BookOpen}
                        title="No Lessons Yet"
                        description="You haven't added any lessons yet. Start by adding your first lesson."
                    />
                )}
            </div>
        </div>
    );
};

export default CourseLessonsPage;
