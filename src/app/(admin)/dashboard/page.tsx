import { DashboardView } from "@/widgets/dashboard/ui/DashboardView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Spike Admin",
  description: "Ikhtisar bisnis dan statistik pengguna.",
};

export default function DashboardPage() {
  return <DashboardView />;
}
