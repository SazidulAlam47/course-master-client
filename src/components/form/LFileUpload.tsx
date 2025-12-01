import { useController, useFormContext } from 'react-hook-form';
import LFormError from './LFormError';
import { cn } from '@/lib/utils';

type TLFileUploadProps = {
    label: string;
    className?: string;
};

const LFileUpload = ({ label, className }: TLFileUploadProps) => {
    const { control, setValue } = useFormContext();

    const {
        field: { name },
        fieldState: { error },
    } = useController({
        name: 'file',
        control,
    });

    return (
        <div className={cn('space-y-1', className)}>
            <label className="block text-sm font-medium text-gray-800">
                {label}
            </label>
            <input
                id={name}
                name={name}
                type="file"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                        setValue('file', file);
                    }
                }}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 file-input"
            />
            <LFormError error={error} />
        </div>
    );
};

export default LFileUpload;
