import { ReactNode } from "react";
import { AdminLayout } from "@/widgets/layout/ui/AdminLayout";

export default function RootAdminLayout({ children }: { children: ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
