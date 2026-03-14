import { DashboardStatsWidget } from '@/widgets/dashboard/ui/DashboardStatsWidget';
import { UserRecentTable } from '@/widgets/dashboard/ui/UserRecentTable';

export const metadata = {
  title: 'Dashboard Admin Utama',
  description: 'Ringkasan performa platform',
};

export default function DashboardPage() {
  return (
    <div className="space-y-8 fade-in animate-fade-in pb-12">
      <DashboardStatsWidget />
      <UserRecentTable />
    </div>
  );
}
