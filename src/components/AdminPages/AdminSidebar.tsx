/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter,
} from '@/components/ui/sidebar';
import { adminSidebarItems } from '@/constants/adminDashboard.constant';
import { LogOut } from 'lucide-react';
import Image from 'next/image';
import logo from '@/assets/logo-square.png';
import { toast } from 'sonner';
import { signOut } from 'next-auth/react';

const AdminSidebar = () => {
    const router = useRouter();
    const pathname = usePathname();

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
        <Sidebar className="border-r border-gray-200">
            <SidebarHeader className="border-b border-gray-200 p-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={logo} alt="logo" width={50} height={50} />
                    <span className="font-bold text-lg text-gray-900">
                        Course Master
                    </span>
                </Link>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-gray-500 text-xs uppercase tracking-wider px-4">
                        Management
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {adminSidebarItems.map((item) => {
                                const isActive = pathname === item.url;
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActive}
                                            className={`mx-2 rounded-lg transition-colors ${
                                                isActive
                                                    ? 'bg-[#1b7ad2] text-white hover:bg-[#1565b8] hover:text-white'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                        >
                                            <Link href={item.url}>
                                                <item.icon className="w-5 h-5" />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t border-gray-200 p-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="mx-2 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600"
                        >
                            <button
                                onClick={handleLogout}
                                className="cursor-pointer"
                            >
                                <LogOut className="w-5 h-5" />
                                <span>Logout</span>
                            </button>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};

export default AdminSidebar;
