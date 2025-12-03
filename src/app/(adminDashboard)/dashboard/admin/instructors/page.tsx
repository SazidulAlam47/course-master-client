import AddInstructor from './components/AddInstructor';
import InstructorCard from './components/InstructorCard';

// Mock data - replace with actual API call
const mockInstructors = [
    {
        id: '1',
        name: 'John Doe',
        avatar: '',
        title: 'Senior Web Developer & Instructor',
        bio: 'Full-stack developer with 10+ years of experience in building scalable web applications. Passionate about teaching modern web technologies.',
    },
    {
        id: '2',
        name: 'Jane Smith',
        avatar: '',
        title: 'React Specialist',
        bio: 'Expert in React ecosystem with deep knowledge of hooks, context, Redux, and modern state management patterns.',
    },
    {
        id: '3',
        name: 'Mike Johnson',
        avatar: '',
        title: 'Backend Engineer',
        bio: 'Specialized in Node.js, Express, and building RESTful APIs. Love teaching backend architecture and best practices.',
    },
    {
        id: '4',
        name: 'Sarah Williams',
        avatar: '',
        title: 'UI/UX Designer & Frontend Developer',
        bio: 'Creative designer turned developer. Teaching the perfect blend of design principles and frontend implementation.',
    },
];

const InstructorsPage = () => {
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
                <AddInstructor />
            </div>

            <div className="grid gap-4">
                {mockInstructors.map((instructor) => (
                    <InstructorCard
                        key={instructor.id}
                        instructor={instructor}
                    />
                ))}
            </div>
        </div>
    );
};

export default InstructorsPage;
