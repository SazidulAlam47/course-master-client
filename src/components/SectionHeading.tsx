type SectionHeadingProps = {
    title: string;
    description?: string;
};

const SectionHeading = ({ title, description }: SectionHeadingProps) => {
    return (
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            {description && (
                <p className="max-w-lg mx-auto text-xl text-gray-600">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
