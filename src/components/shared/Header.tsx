import Container from '../Container';
import Link from 'next/link';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import HeaderMenu from './HeaderMenu';
import HeaderAction from './HeaderAction';
import { getServerSession } from 'next-auth';
import authOptions from '@/nextAuth/authOptions';

const Header = async () => {
    const session = await getServerSession(authOptions);
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
                    <HeaderAction initialSession={session} />
                </div>
            </Container>
        </nav>
    );
};

export default Header;
