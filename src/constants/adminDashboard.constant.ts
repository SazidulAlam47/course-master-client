import { BookOpen, Users, FileCheck, LayoutDashboard } from 'lucide-react';

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
        title: 'Enrollment Management',
        url: '/dashboard/admin/enrollments',
        icon: Users,
    },
    {
        title: 'Assignment Review',
        url: '/dashboard/admin/assignments',
        icon: FileCheck,
    },
];
