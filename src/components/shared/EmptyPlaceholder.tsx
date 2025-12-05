import { LucideIcon } from 'lucide-react';
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from '@/components/ui/empty';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type EmptyContentProps = {
    Icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
    children?: ReactNode;
};

const EmptyPlaceholder = ({
    Icon,
    title,
    description,
    className,
    children,
}: EmptyContentProps) => {
    return (
        <Empty
            className={cn(
                'min-h-[60dvh] flex items-center justify-center',
                className
            )}
        >
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <Icon />
                </EmptyMedia>
                <EmptyTitle>{title}</EmptyTitle>
                <EmptyDescription>{description}</EmptyDescription>
                {children && <EmptyContent>{children}</EmptyContent>}
            </EmptyHeader>
        </Empty>
    );
};

export default EmptyPlaceholder;
