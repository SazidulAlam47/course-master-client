interface CourseSyllabusCardProps {
    index: number;
    title: string;
    duration: string;
}

const CourseSyllabusCard = ({
    index,
    title,
    duration,
}: CourseSyllabusCardProps) => (
    <div className="hover:shadow-md transition-shadow bg-white rounded-lg">
        <div className="flex items-center gap-4 p-4">
            <div className="w-10 h-10 bg-[#1b7ad2] text-white rounded-lg flex items-center justify-center font-semibold">
                {index + 1}
            </div>
            <div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-500">{duration}</p>
            </div>
        </div>
    </div>
);

export default CourseSyllabusCard;
