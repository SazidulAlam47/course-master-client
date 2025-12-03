import { TCourse } from '@/types';
import { FaCheck } from 'react-icons/fa6';

type CourseWhatYouWillLearnProps = {
    items: TCourse['whatYouWillLearn'];
};

const CourseWhatYouWillLearn = ({ items }: CourseWhatYouWillLearnProps) => (
    <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What You Will Learn
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-green-50 rounded-lg"
                >
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                </div>
            ))}
        </div>
    </section>
);

export default CourseWhatYouWillLearn;
