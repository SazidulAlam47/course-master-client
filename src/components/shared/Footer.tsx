import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import Container from '../Container';
import Link from 'next/link';
import { footerLinks } from '../../constants/footer.constant';
import capitalize from '../../utils/capitalize';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <Container>
                <div className="grid md:grid-cols-4 gap-8">
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section}>
                            <h3 className="font-bold text-lg mb-4">
                                {capitalize(section)}
                            </h3>
                            <ul className="space-y-2">
                                {links.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.link}
                                            className="text-gray-300 hover:text-white"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Course Master. All rights
                        reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link
                            href="#"
                            className="text-gray-400 hover:text-white"
                        >
                            <FaXTwitter />
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-400 hover:text-white"
                        >
                            <span className="sr-only">LinkedIn</span>
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
