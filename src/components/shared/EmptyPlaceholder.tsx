import { LucideIcon } from 'lucide-react';
import {
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from '@/components/ui/empty';

type EmptyContentProps = {
    Icon: LucideIcon;
    title: string;
    description: string;
};

const EmptyPlaceholder = ({ Icon, title, description }: EmptyContentProps) => {
    return (
        <Empty className="min-h-[60dvh] flex items-center justify-center">
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <Icon />
                </EmptyMedia>
                <EmptyTitle>{title}</EmptyTitle>
                <EmptyDescription>{description}</EmptyDescription>
            </EmptyHeader>
        </Empty>
    );
};

export default EmptyPlaceholder;
