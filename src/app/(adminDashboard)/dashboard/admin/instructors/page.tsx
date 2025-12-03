'use client';

import { useGetAllInstructorsQuery } from '@/redux/api/instructorApi';
import CreateInstructor from './components/CreateInstructor';
import InstructorCard from './components/InstructorCard';
import Loader from '@/components/shared/Loader';
import EmptyPlaceholder from '@/components/shared/EmptyPlaceholder';
import { Users } from 'lucide-react';

const InstructorsPage = () => {
    const { data: instructors, isLoading } = useGetAllInstructorsQuery({});

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Instructor Management
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Add, edit, and manage course instructors
                    </p>
                </div>
                <CreateInstructor />
            </div>

            <div className="grid gap-4">
                {isLoading ? (
                    <Loader />
                ) : instructors?.length ? (
                    instructors?.map((instructor) => (
                        <InstructorCard
                            key={instructor._id}
                            instructor={instructor}
                        />
                    ))
                ) : (
                    <EmptyPlaceholder
                        Icon={Users}
                        title="No Instructors Yet"
                        description="You haven't added any instructors yet. Start by adding your first instructor."
                    />
                )}
            </div>
        </div>
    );
};

export default InstructorsPage;
