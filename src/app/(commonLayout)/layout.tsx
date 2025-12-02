import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { ReactNode } from 'react';

const CommonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default CommonLayout;
