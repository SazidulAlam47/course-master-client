import AdminSidebar from '@/components/AdminPages/AdminSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ReactNode } from 'react';

const AdminDashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                <AdminSidebar />
                <main className="flex-1 bg-gray-50">
                    <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4 md:hidden">
                        <SidebarTrigger />
                    </div>
                    <div className="p-6">{children}</div>
                </main>
            </div>
        </SidebarProvider>
    );
};

export default AdminDashboardLayout;
