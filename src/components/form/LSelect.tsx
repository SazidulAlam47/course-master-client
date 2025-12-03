import { useController, useFormContext } from 'react-hook-form';
import LFormError from './LFormError';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

type TLSelectProps = {
    label: string;
    name: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    options: { value: string; label: string }[];
};

const LSelect = ({
    label,
    name,
    placeholder,
    disabled = false,
    className,
    options,
}: TLSelectProps) => {
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
            <Select
                value={field.value}
                onValueChange={field.onChange}
                disabled={disabled}
            >
                <SelectTrigger className="w-full m-0">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <LFormError error={error} />
        </div>
    );
};

export default LSelect;
