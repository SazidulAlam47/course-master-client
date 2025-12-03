'use client';

import { BookOpen } from 'lucide-react';
import CourseCard from './components/CourseCard';
import CreateCourse from './components/CreateCourse';
import { useGetAllCoursesQuery } from '@/redux/api/courseApi';
import Loader from '@/components/shared/Loader';
import EmptyPlaceholder from '@/components/shared/EmptyPlaceholder';

const AdminCoursePage = () => {
    const { data: courses, isLoading } = useGetAllCoursesQuery({});

    console.log(courses);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Course Management
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Create, update, and manage your courses and batches
                    </p>
                </div>
                <CreateCourse />
            </div>

            <div className="grid gap-4">
                {isLoading ? (
                    <Loader />
                ) : courses?.length ? (
                    courses.map((course) => (
                        <CourseCard key={course._id} course={course} />
                    ))
                ) : (
                    <EmptyPlaceholder
                        Icon={BookOpen}
                        title="No Courses Yet"
                        description="You haven't created any courses yet. Start by adding your first course."
                    />
                )}
            </div>
        </div>
    );
};

export default AdminCoursePage;
