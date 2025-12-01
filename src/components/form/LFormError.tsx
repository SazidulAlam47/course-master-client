import { FieldError } from 'react-hook-form';

const LFormError = ({ error }: { error?: FieldError }) => {
    return (
        <>
            {error && (
                <p className="mt-1 text-xs text-red-600">{error.message}</p>
            )}
        </>
    );
};

export default LFormError;
