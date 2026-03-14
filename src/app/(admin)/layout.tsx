import { ReactNode } from 'react';
import { AdminSidebar } from '@/widgets/layout/ui/AdminSidebar';
import { AdminHeader } from '@/widgets/layout/ui/AdminHeader';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex bg-neutral-50 min-h-screen">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
