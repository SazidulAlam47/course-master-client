'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
} from '@/components/ui/sidebar';
import { adminSidebarItems } from '@/constants/adminDashboard.constant';
import { LayoutDashboard } from 'lucide-react';

const AdminSidebar = () => {
    const pathname = usePathname();

    return (
        <Sidebar className="border-r border-gray-200">
            <SidebarHeader className="border-b border-gray-200 p-4">
                <Link
                    href="/dashboard/admin"
                    className="flex items-center gap-2"
                >
                    <div className="w-8 h-8 bg-[#1b7ad2] rounded-lg flex items-center justify-center">
                        <LayoutDashboard className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-lg text-gray-900">
                        Admin Panel
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
        </Sidebar>
    );
};

export default AdminSidebar;
