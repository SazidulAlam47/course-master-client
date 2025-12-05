import { Chart } from 'react-google-charts';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { chartOptions, enrollmentData } from '@/constants/meta.constant';

const EnrollmentChart = () => {
    return (
        <Card className="bg-white border border-gray-200">
            <CardHeader>
                <CardTitle>Enrollment Trends</CardTitle>
                <CardDescription>
                    Monthly student enrollment statistics for 2025 (Dummy data)
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
    );
};

export default EnrollmentChart;
