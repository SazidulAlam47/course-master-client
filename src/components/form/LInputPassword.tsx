import { useController, useFormContext } from 'react-hook-form';
import LFormError from './LFormError';
import { Input } from '../ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type TlInputPasswordProps = {
    label?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
};

const LInputPassword = ({
    label = 'Password',
    name = 'password',
    placeholder = 'Enter your Password',
    disabled = false,
    className,
}: TlInputPasswordProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const { control } = useFormContext();

    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
    });

    return (
        <div className={cn('space-y-1 relative', className)}>
            <label className="block text-sm font-medium text-gray-800">
                {label}
            </label>
            <Input
                {...field}
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                disabled={disabled}
            />
            <button
                type="button"
                className="absolute right-0 top-8.5 pr-3 flex items-center text-muted-foreground hover:text-foreground"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                ) : (
                    <Eye className="h-4 w-4" />
                )}
            </button>
            <LFormError error={error} />
        </div>
    );
};

export default LInputPassword;
