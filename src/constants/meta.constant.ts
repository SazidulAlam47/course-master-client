// Mock data for enrollments over time
export const enrollmentData = [
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

export const chartOptions = {
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
