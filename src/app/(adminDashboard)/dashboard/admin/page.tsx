'use client';

import { Chart } from 'react-google-charts';
import { Users, BookOpen, FileCheck, FileText } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// Mock data for enrollments over time
const enrollmentData = [
    ['Month', 'Enrollments'],
    ['Jan', 45],
    ['Feb', 52],
    ['Mar', 68],
    ['Apr', 73],
    ['May', 89],
    ['Jun', 95],
    ['Jul', 110],
    ['Aug', 125],
    ['Sep', 140],
    ['Oct', 155],
    ['Nov', 168],
    ['Dec', 180],
];

const chartOptions = {
    title: 'Student Enrollments Over Time',
    curveType: 'function',
    legend: { position: 'bottom' },
    colors: ['#1b7ad2'],
    chartArea: { width: '85%', height: '70%' },
    hAxis: {
        title: 'Month',
    },
    vAxis: {
        title: 'Number of Enrollments',
        minValue: 0,
    },
};

// Mock stats data
const stats = [
    {
        title: 'Total Enrollments',
        value: '100',
        icon: Users,
        color: 'bg-blue-100 text-blue-600',
    },
    {
        title: 'Active Courses',
        value: '24',
        icon: BookOpen,
        color: 'bg-green-100 text-green-600',
    },
    {
        title: 'Pending Reviews',
        value: '12',
        icon: FileCheck,
        color: 'bg-yellow-100 text-yellow-600',
    },
    {
        title: 'Assignments Submitted',
        value: '20',
        icon: FileText,
        color: 'bg-purple-100 text-purple-600',
    },
];

const AdminDashboardPage = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">
                    Dashboard Overview
                </h1>
                <p className="text-gray-500 mt-1">
                    Welcome back! Here&apos;s what&apos;s happening with your
                    courses.
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <Card
                        key={stat.title}
                        className="bg-white border border-gray-200"
                    >
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">
                                        {stat.title}
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {stat.value}
                                    </p>
                                </div>
                                <div
                                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}
                                >
                                    <stat.icon className="w-6 h-6" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Enrollment Chart */}
            <Card className="bg-white border border-gray-200">
                <CardHeader>
                    <CardTitle>Enrollment Trends</CardTitle>
                    <CardDescription>
                        Monthly student enrollment statistics for 2025
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={enrollmentData}
                        options={chartOptions}
                    />
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminDashboardPage;
