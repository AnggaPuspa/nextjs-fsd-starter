import { DashboardStatsWidget } from "./DashboardStatsWidget";
import { UserRecentTable } from "./UserRecentTable";

export function DashboardView() {
  return (
    <div className="space-y-6">
      <DashboardStatsWidget />
      <UserRecentTable />
    </div>
  );
}
