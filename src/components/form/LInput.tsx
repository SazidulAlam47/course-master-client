import { useController, useFormContext } from 'react-hook-form';
import LFormError from './LFormError';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';

type TLInputProps = {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
};

const LInput = ({
    label,
    name,
    type = 'text',
    placeholder,
    disabled = false,
    className,
}: TLInputProps) => {
    const { control } = useFormContext();

    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
    });

    return (
        <div className={cn('space-y-1', className)}>
            <label className="block text-sm font-medium text-gray-800">
                {label}
            </label>
            <Input
                {...field}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
            />
            <LFormError error={error} />
        </div>
    );
};

export default LInput;
