type CourseDescriptionProps = {
    description: string;
};

const CourseDescription = ({ description }: CourseDescriptionProps) => (
    <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Course Description
        </h2>
        <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    </section>
);

export default CourseDescription;
