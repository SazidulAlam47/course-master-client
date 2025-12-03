import { useController, useFormContext } from 'react-hook-form';
import LFormError from './LFormError';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

type TLTextareaProps = {
    label: string;
    name: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    rows?: number;
};

const LTextarea = ({
    label,
    name,
    placeholder,
    disabled = false,
    className,
    rows = 3,
}: TLTextareaProps) => {
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
            <Textarea
                {...field}
                placeholder={placeholder}
                disabled={disabled}
                rows={rows}
            />
            <LFormError error={error} />
        </div>
    );
};

export default LTextarea;
