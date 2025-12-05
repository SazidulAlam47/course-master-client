/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { signOut, useSession } from 'next-auth/react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Session } from 'next-auth';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type HeaderActionProps = {
    initialSession: Session | null;
};

const HeaderAction = ({ initialSession }: HeaderActionProps) => {
    const router = useRouter();
    const { data: session, status } = useSession();

    const currentSession = status === 'loading' ? initialSession : session;

    const role = currentSession?.user.role;

    const handleLogout = async () => {
        const toastId = toast.loading('Logging out...');
        try {
            await signOut({
                redirect: false,
            });
            router.push('/login');
            toast.success('Logged out successfully!', { id: toastId });
        } catch (error: any) {
            toast.error(error.message || error.data || 'Something went wrong', {
                id: toastId,
            });
        }
    };

    return (
        <div className="flex items-center space-x-4">
            {currentSession?.user ? (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage
                                src={session?.user?.image || undefined}
                            />
                            <AvatarFallback>
                                {session?.user.name?.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>
                            {session?.user.name}
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link href={role ? `/dashboard/${role}` : '/dashboard'}>
                            <DropdownMenuItem>Dashboard</DropdownMenuItem>
                        </Link>
                        <Link href="/dashboard/profile">
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                        </Link>
                        {session?.user.hasPassword ? (
                            <Link href="/dashboard/change-password">
                                <DropdownMenuItem>
                                    Change Password
                                </DropdownMenuItem>
                            </Link>
                        ) : (
                            <Link href="/dashboard/set-password">
                                <DropdownMenuItem>
                                    Set Password
                                </DropdownMenuItem>
                            </Link>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <Link href="/login">
                    <Button>Login</Button>
                </Link>
            )}
        </div>
    );
};

export default HeaderAction;
