'use client';

import Container from '../Container';
import Link from 'next/link';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import HeaderMenu from './HeaderMenu';
import HeaderAction from './HeaderAction';
import MobileMenu from './MobileMenu';
import { useSession } from 'next-auth/react';

const Header = () => {
    const { data: session } = useSession();
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <Container>
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="block w-48">
                        <Image
                            src={logo}
                            alt="Course Master"
                            width={500}
                            height={500}
                            className="w-full"
                        />
                    </Link>
                    <HeaderMenu />
                    <div className="flex items-center space-x-4">
                        <HeaderAction initialSession={session} />
                        <MobileMenu />
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Header;
