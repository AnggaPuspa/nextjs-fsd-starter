import { ReactNode } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { Topbar } from "./Topbar";

export function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex bg-surface min-h-screen p-5">
      <AdminSidebar />
      <div className="flex-1 flex flex-col pl-5 min-w-0">
        <Topbar />
        <main className="flex-1 pt-5 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
