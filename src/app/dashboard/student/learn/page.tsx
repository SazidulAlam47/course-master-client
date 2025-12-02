import { redirect } from 'next/navigation';

const Learn404Page = async () => {
    redirect('/dashboard/student');
};

export default Learn404Page;
