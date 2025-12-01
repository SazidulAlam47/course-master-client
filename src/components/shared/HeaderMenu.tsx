'use client';
import { navLinks } from '@/constants/header.constant';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderMenu = () => {
    const pathname = usePathname();

    return (
        <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                        'text-gray-700 hover:text-gray-900 font-medium',
                        {
                            'text-primary': link.href === pathname,
                        }
                    )}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
};

export default HeaderMenu;
