/* eslint-disable no-unused-vars, @typescript-eslint/no-explicit-any */

import { cn } from '@/lib/utils';
import { ReactNode, RefObject, useImperativeHandle } from 'react';
import {
    useForm,
    FormProvider,
    FieldValues,
    SubmitHandler,
} from 'react-hook-form';

export type TLFromFncRef = {
    resetFrom: () => void;
    setFieldValues: (newValues: Record<string, unknown>) => void;
};

type TFormConfig = {
    defaultValues?: Record<string, unknown>;
    resolver?: any;
};

type THFormProps = {
    children: ReactNode;
    onSubmit: SubmitHandler<FieldValues>;
    fncRef?: RefObject<TLFromFncRef>;
    className?: string;
} & TFormConfig;

const LForm = ({
    children,
    onSubmit,
    fncRef = undefined,
    defaultValues,
    className,
    resolver,
}: THFormProps) => {
    const formConfig: TFormConfig = {};

    if (defaultValues) {
        formConfig.defaultValues = defaultValues;
    }
    if (resolver) {
        formConfig.resolver = resolver;
    }

    const methods = useForm(formConfig);

    const resetFrom = () => {
        methods.reset();
    };

    const setFieldValues = (newValues: Record<string, unknown>) => {
        Object.keys(newValues).forEach((key) => {
            methods.setValue(key, newValues[key], {
                shouldDirty: true,
                shouldTouch: true,
            });
        });
    };

    useImperativeHandle(fncRef, () => ({
        resetFrom,
        setFieldValues,
    }));

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className={cn('space-y-4', className)}
            >
                {children}
            </form>
        </FormProvider>
    );
};

export default LForm;
