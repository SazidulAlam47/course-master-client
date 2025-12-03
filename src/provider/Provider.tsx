'use client';
import { store } from '@/redux/store';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <SessionProvider>
            <ReduxProvider store={store}>{children}</ReduxProvider>
        </SessionProvider>
    );
};

export default Provider;
