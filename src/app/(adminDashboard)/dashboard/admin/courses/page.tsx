import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseCard from './components/CourseCard';

// Mock data - replace with actual API call
const mockCourses = [
    {
        id: '1',
        title: 'Complete Web Development Bootcamp',
        description: 'Learn HTML, CSS, JavaScript, React, Node.js and more',
        price: 4999,
        instructor: 'John Doe',
        duration: '12 weeks',
        isPublished: true,
        batches: [
            { id: 'b1', name: 'Batch 1', startDate: '2025-01-01' },
            { id: 'b2', name: 'Batch 2', startDate: '2025-02-15' },
        ],
    },
    {
        id: '2',
        title: 'Advanced React Masterclass',
        description: 'Master React with hooks, context, and advanced patterns',
        price: 2999,
        instructor: 'Jane Smith',
        duration: '8 weeks',
        isPublished: true,
        batches: [{ id: 'b3', name: 'Batch 1', startDate: '2025-01-15' }],
    },
    {
        id: '3',
        title: 'Node.js Backend Development',
        description: 'Build scalable backend applications with Node.js',
        price: 3499,
        instructor: 'Mike Johnson',
        duration: '10 weeks',
        isPublished: false,
        batches: [],
    },
];

const AdminDashboardPage = () => {
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
                <Button className="bg-[#1b7ad2] hover:bg-[#1565b8] text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Course
                </Button>
            </div>

            <div className="grid gap-4">
                {mockCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default AdminDashboardPage;
