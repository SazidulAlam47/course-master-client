import {
    BookOpen,
    Users,
    FileCheck,
    LayoutDashboard,
    UsersRound,
} from 'lucide-react';

export const adminSidebarItems = [
    {
        title: 'Admin Dashboard',
        url: '/dashboard/admin',
        icon: LayoutDashboard,
    },
    {
        title: 'Course Management',
        url: '/dashboard/admin/courses',
        icon: BookOpen,
    },
    {
        title: 'Instructor Management',
        url: '/dashboard/admin/instructors',
        icon: Users,
    },
    {
        title: 'Enrollment Management',
        url: '/dashboard/admin/enrollments',
        icon: UsersRound,
    },
    {
        title: 'Assignment Review',
        url: '/dashboard/admin/assignments',
        icon: FileCheck,
    },
];
